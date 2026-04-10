const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const imagesDir = path.join(process.cwd(), 'images');

  try {
    const files = fs.readdirSync(imagesDir).filter(f =>
      /\.(png|jpg|jpeg|webp)$/i.test(f)
    );
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ images: files });
  } catch (e) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({ images: [], error: e.message, cwd: process.cwd() });
  }
};
