//Function ->airthmetic

//const { add } = require('./app.js');
//const { multiply } = require('./app.js');
//const { sub } = require('./app.js');

//console.log(add(10, 20));
//console.log(multiply(10, 20));
//console.log(sub(10, 20));

// File system
// const fs=require("fs");
//     fs.writeFile("hello.txt","Hello World","UTF-8",(err)=>{
//         if(err) {
//             console.log(err);
//             return;
//         }
//         console.log("Created Successfully")
//     })

    // const fs=require("fs");
    // const content ="Hii this is hello world"
    // fs.writeFile("hello.txt",content,"UTF-8",(err)=>{
    //     if(err) {
    //         console.log(err);
    //         return;
    //     }
    //     console.log("Add Data Successfully")
    // })

// 


// install and importing can be done by const os

const os = require("os");

console.log(os.platform());

console.log("Platform:  ", os.platform());
console.log("Type: ",os.type());
console.log("Total Memory: ",os.totalmem());
console.log("Free Memory: ",os.freemem());
console.log("Home Directory: ",os.homedir());
console.log("CPU Info: ",os.cpus());
