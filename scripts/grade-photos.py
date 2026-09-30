"""Tratamiento 'calma': equilibrio de blancos, exposición, curva suave, split-tone cálido/azul, rojos domados, glow."""
import numpy as np, sys, os
from PIL import Image, ImageOps, ImageFilter

def srgb_to_lin(x): return np.where(x<=0.04045, x/12.92, ((x+0.055)/1.055)**2.4)
def lin_to_srgb(x): return np.where(x<=0.0031308, x*12.92, 1.055*np.power(np.clip(x,0,None),1/2.4)-0.055)

def grade(im, strength=1.0):
    a=np.asarray(im.convert('RGB')).astype(np.float32)/255
    lin=srgb_to_lin(a)
    # 1. balance de blancos (gray world parcial, sobre medios tonos)
    L=0.2126*lin[...,0]+0.7152*lin[...,1]+0.0722*lin[...,2]
    m=(L>0.05)&(L<0.8)
    means=np.array([lin[...,c][m].mean() for c in range(3)])
    gains=(means.mean()/means)**0.45
    gains*=np.array([1.025,1.0,0.965])  # ligero calor
    lin=lin*gains
    # 2. exposición suave: mediana -> ~0.19 lineal, sin pasarse
    L=0.2126*lin[...,0]+0.7152*lin[...,1]+0.0722*lin[...,2]
    med=np.median(L); ev=np.clip(0.19/max(med,1e-3),0.9,1.45)
    lin=lin*ev
    # 3. tone mapping tipo Reinhard extendido (altas luces suaves, sin quemar caras)
    Wp=1.35
    Lx=0.2126*lin[...,0]+0.7152*lin[...,1]+0.0722*lin[...,2]
    Lt=Lx*(1+Lx/(Wp*Wp))/(1+Lx)
    scale=np.where(Lx>1e-5, Lt/np.maximum(Lx,1e-5), 1)
    lin=lin*scale[...,None]*1.12
    s=np.clip(lin_to_srgb(np.clip(lin,0,1)),0,1)
    # 4. curva: sombras levantadas, contraste suave
    s=0.045+ (1-0.045-0.015)*s
    s=s + 0.06*np.sin(np.pi*s)*(0.5-s)*-1  # reduce contraste medio ligeramente
    # 5. saturación y rojos domados
    gray=(0.299*s[...,0]+0.587*s[...,1]+0.114*s[...,2])[...,None]
    mx=s.max(-1); mn=s.min(-1); sat=(mx-mn)
    redness=np.clip((s[...,0]-np.maximum(s[...,1],s[...,2]))*3,0,1)  # zonas rojo intenso
    k=0.86-0.30*redness
    s=gray+(s-gray)*k[...,None]
    # 6. split-tone: sombras hacia azul marino, luces hacia crema
    lum=gray[...,0]
    sh=np.clip(1-lum*2,0,1)[...,None]; hi=np.clip(lum*2-1,0,1)[...,None]
    s=s+sh*np.array([-0.012,0.0,0.03])+hi*np.array([0.022,0.012,-0.012])
    s=np.clip(s,0,1)
    out=Image.fromarray((s*255+0.5).astype(np.uint8))
    # 7. glow suave (screen)
    r=max(2,int(max(out.size)*0.012))
    blur=np.asarray(out.filter(ImageFilter.GaussianBlur(r))).astype(np.float32)/255
    base=np.asarray(out).astype(np.float32)/255
    scr=1-(1-base)*(1-blur)
    mix=base*(1-0.10)+scr*0.10
    return Image.fromarray((np.clip(mix,0,1)*255+0.5).astype(np.uint8))

if __name__=='__main__':
    src,dst=sys.argv[1],sys.argv[2]
    im=ImageOps.exif_transpose(Image.open(src)).convert('RGB')
    if max(im.size)>2600: im.thumbnail((2600,2600),Image.LANCZOS)
    if max(im.size)<700: im=im.resize((im.width*4//1 if max(im.size)<300 else im.width*2, im.height*4 if max(im.size)<300 else im.height*2), Image.LANCZOS)
    out=grade(im)
    out.save(dst,quality=92)
