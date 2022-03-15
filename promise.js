const fs = require("fs/promises");

// Asynchronous - Continue running if when the promise is not fulfilled
// fs.readFile("text.txt", {encoding: ascii})
// .then(content) => {
//     console.log("content is " + content);
// }


//Synchronous - continue 
async function readfile(){

    let content = await fs.readFile("text.txt", {encoding: "ascii"});

    console.log(content);
}
readfile();