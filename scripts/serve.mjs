/** Servidor estático mínimo (Railway / cualquier Node): sirve /dist con índices de carpeta. */
import http from 'node:http'; import fs from 'node:fs'; import path from 'node:path'
const root=new URL('../dist', import.meta.url).pathname
const types={'.html':'text/html; charset=utf-8','.js':'text/javascript','.css':'text/css','.svg':'image/svg+xml','.woff2':'font/woff2','.woff':'font/woff','.xml':'application/xml','.txt':'text/plain','.json':'application/json','.webp':'image/webp','.avif':'image/avif'}
http.createServer((req,res)=>{let p=decodeURIComponent(req.url.split('?')[0]);if(p.includes('..')){res.writeHead(400);return res.end()}let f=path.join(root,p);
 if(fs.existsSync(f)&&fs.statSync(f).isDirectory()) f=path.join(f,'index.html');
 if(!fs.existsSync(f)){res.writeHead(404,{'content-type':'text/html'});return res.end(fs.readFileSync(path.join(root,'404.html')))}
 res.writeHead(200,{'content-type':types[path.extname(f)]||'application/octet-stream','cache-control':f.includes('/assets/')?'public, max-age=31536000, immutable':'public, max-age=300'});fs.createReadStream(f).pipe(res)}).listen(process.env.PORT||4173,()=>console.log('Sirviendo dist en puerto',process.env.PORT||4173))
