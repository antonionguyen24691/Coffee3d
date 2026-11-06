const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
http.createServer((req, res) => {
  const file = req.url === '/' ? 'index.html' : req.url.split('?')[0].slice(1);
  if (!['index.html', 'youtube.js', 'assets/avatars/asian-casual.glb', 'assets/avatars/asian-casual-woman.glb', 'assets/avatars/cyberpunk.glb'].includes(file)) { res.writeHead(404); res.end(); return; }
  let content = fs.readFileSync(path.join(root, file), file.endsWith('.glb') ? undefined : 'utf8');
  if (file === 'index.html') {
    const needle = 'firebase.initializeApp(cfg);var db=firebase.database(),auth=firebase.auth();';
    if (!content.includes(needle)) { res.writeHead(500); res.end('Firebase adapter not found'); return; }
    content = content.replace(needle, "cfg.projectId='demo-coffee3d';cfg.databaseURL='https://demo-coffee3d-default-rtdb.firebaseio.com';" + needle + "db.useEmulator('127.0.0.1',19000);auth.useEmulator('http://127.0.0.1:19099');");
  }
  res.writeHead(200, {'content-type':file.endsWith('.glb')?'model/gltf-binary':file.endsWith('.js')?'text/javascript; charset=utf-8':'text/html; charset=utf-8'});
  res.end(content);
}).listen(8766, '127.0.0.1');
