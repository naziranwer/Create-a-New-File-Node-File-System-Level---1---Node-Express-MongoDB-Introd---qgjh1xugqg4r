// const fs = require("fs/promises");
// const fileName = "myfile.txt";
// const fileContent = "Newton School";
// const writeFile = async (fileName, fileContent) => {
//   // write code here
//   // dont change function name
// };

// module.exports = { writeFile };

const fs = require('node:fs');

const writeFile= async (filename, content)=> {
  // Create a new file with the given filename and content
  fs.writeFile(filename, content, (err) => {
    if (err) {
      // If there's an error, log the error message
      console.error(err);

  }});
}

// Create a new file with the name 'myfile.txt' and the content 'Newton School'
writeFile('myfile.txt', 'Newton School');


