const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
http.createServer((req, res) => {
  const file = req.url === '/' ? 'index.html' : req.url.split('?')[0].slice(1);
  if (file.startsWith('character/')) {
    const target = path.resolve(root, file.endsWith('/') ? file + 'index.html' : file);
    const base = path.resolve(root, 'character') + path.sep;
    if (!target.startsWith(base) || !fs.existsSync(target) || !fs.statSync(target).isFile()) { res.writeHead(404); res.end(); return; }
    const ext = path.extname(target);
    const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.pack':'application/octet-stream'};
    res.writeHead(200, {'content-type':types[ext] || 'application/octet-stream'});
    fs.createReadStream(target).pipe(res);
    return;
  }
  const avatarFile = /^assets\/avatars\/(?:q(?:512|1024)\/)?(?:asian-casual(?:-woman)?|cyberpunk|adventurer)\.glb$/.test(file);
  if (!['index.html', 'youtube.js', 'wardrobe.js'].includes(file) && !avatarFile) { res.writeHead(404); res.end(); return; }
  let content = fs.readFileSync(path.join(root, file), file.endsWith('.glb') ? undefined : 'utf8');
  if (file === 'index.html') {
    const needle = 'firebase.initializeApp(cfg);var db=firebase.database(),auth=firebase.auth();';
    if (!content.includes(needle)) { res.writeHead(500); res.end('Firebase adapter not found'); return; }
    content = content.replace(needle, "cfg.projectId='demo-coffee3d';cfg.databaseURL='https://demo-coffee3d-default-rtdb.firebaseio.com';" + needle + "db.useEmulator('127.0.0.1',19000);auth.useEmulator('http://127.0.0.1:19099');");
  }
  res.writeHead(200, {'content-type':file.endsWith('.glb')?'model/gltf-binary':file.endsWith('.js')?'text/javascript; charset=utf-8':'text/html; charset=utf-8'});
  res.end(content);
}).listen(Number(process.env.COFFEE3D_TEST_PORT) || 8766, '127.0.0.1');
