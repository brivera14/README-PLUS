const fs = require('fs');

const writeFile = fileContent => {
  return new Promise ((resolve, reject) => {
    fs.writeFile('./README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'File created'
      });
    });
  });
};

// // function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = { writeFile };