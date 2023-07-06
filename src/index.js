// const fs = require("fs/promises");
// const fileName = "myfile.txt";
// const fileContent = "Newton School";
// const writeFile = async (fileName, fileContent) => {
//   // write code here
//   // dont change function name
// };

// module.exports = { writeFile };

const fs = require('fs');

function writeFile(filename, content) {
  // Create a new file with the given filename and content
  fs.writeFile(filename, content, (err) => {
    if (err) {
      // If there's an error, log the error message
      console.error(err);
    } else {
      // If writing is successful, log a success message
      console.log(`File '${filename}' created successfully.`);
    }
  });
}

// Create a new file with the name 'myfile.txt' and the content 'Newton School'
writeFile('myfile.txt', 'Newton School');


