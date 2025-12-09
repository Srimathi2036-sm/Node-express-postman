 // Append the file 

 //const fs = require("fs");

// fs.appendFile("hello.txt", " New Text updated", (err) => {
//     if (err) {
//         console.log("Error: ", err);
//         return;
//     }

//     console.log("Data updated");
// });


// Delete the file 

// fs.unlink("new.txt",(err)=>{
//     if(err){
//         console.log("Error: ",err);
//         return;
//     }
//     console.log("File deleted successfully");
    
// })


 // Renamed file 
// const fs = require("fs");

// fs.rename("hello.txt", "hello.js", (err) => {
//     if (err) {
//         console.log("Error:", err);
//         return;
//     }
//    console.log("File renamed successfully!");
// });

 // Write the file(create the file and there disaplay the content )
// 

const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });

    if (req.url === "/") {
        res.end("Welcome to my Node.js server!");
    } 
    else if (req.url === "/about") {
        res.end("Welcome to About page");
    } 
    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
