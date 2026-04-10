const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const candidates = [
    path.join(process.cwd(), 'skushy-site', 'images'),
    path.join(process.cwd(), 'images'),
    '/var/task/skushy-site/images',
    '/var/task/images',
  ];

  let files = [];
  let usedPath = '';

  for (const dir of candidates) {
    try {
      files = fs.readdirSync(dir).filter(f => /\.(png|jpg|jpeg|webp)$/i.test(f));
      usedPath = dir;
      break;
    } catch (e) {}
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.json({ images: files, usedPath });
};
