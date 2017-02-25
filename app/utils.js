import fs from 'fs';

export function readfile(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, file) => {
      if (err) {
        reject(err);
        return
      }
      resolve(file)
    })
  })
}
