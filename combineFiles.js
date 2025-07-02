// combineFiles.js
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname); // Dein Projektordner, z.B. 'C:/Users/Familie Bock/gethelperbee.com-web'
const outputFile = path.resolve(__dirname, 'allCodeFiles.txt'); // Die große Ausgabe-Datei

const exts = ['.js', '.jsx', '.json', '.css']; // Dateitypen, die du willst

const filesContent = [];

function walkDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      if (file.name === 'node_modules' || file.name === '.next' || file.name === '.git') continue;
      walkDir(fullPath);
    } else if (exts.includes(path.extname(file.name))) {
      const content = fs.readFileSync(fullPath, 'utf-8');
      // Dateipfad als Header + Inhalt
      filesContent.push(`// ==== FILE: ${fullPath.replace(rootDir + path.sep, '')} ==== \n\n${content}\n\n\n`);
    }
  }
}

walkDir(rootDir);

fs.writeFileSync(outputFile, filesContent.join(''), 'utf-8');
console.log(`Fertig! Alle Dateien wurden in ${outputFile} zusammengeführt.`);
