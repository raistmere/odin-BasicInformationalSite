// import path from "path";
// import url from "url";
// import fs from "fs";
// import fsp from "fs/promises";
// import http from "http";
// import os from "os";

// const filePath = import.meta.url;
// const __dirname = path.dirname(filePath);
// console.log(__dirname);
// console.log(path.join(__dirname, "/test"));

// fs.mkdir("./test", {}, (err) => {
//     if(err) throw err;
//     console.log("Folder created");
// });

// fs.writeFile("./test/hello.txt", "Hello World", {}, (err) => {
//     if(err) throw err;
//     console.log("File created");
// });

// fs.appendFile("./test/hello.txt", "Goodbye World", {}, (err) => {
//     if(err) throw err;
//     console.log("File created");
// });

// fs.rmdir("./test", {}, (err) => {
//     if(err) throw err;
//     console.log("Folder Removed");
// });

// fs.readFile("./test/hello.txt", {encoding: "utf-8"}, (err, data) => {
//     if(err) throw err;
//     console.log(data);
// })

// console.log(os.cpus());
// console.log(os.totalmem());

// // PATH testing
// const __dirname = path.dirname(filePath);
// console.log(filePath);
// console.log(path.dirname(filePath));
// console.log(path.parse(filePath));

// // URL Testing
// const myURL = new url.URL(filePath);
// console.log(myURL);
// console.log("Path Name: ", myURL.pathname);
// myURL.pathname = path.join(path.dirname(myURL.pathname), "/test");
// console.log("New Path Name: ", myURL.pathname);
// console.log(url.fileURLToPath(myURL));
// console.log(url.pathToFileURL(filePath));
// console.log(url.format(myURL, {fragment: false, search: false,}))
// console.log(url.urlToHttpOptions(myURL));

// FS Testing

// // HTTP Testing
// const myServer = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "application/json"});
//     console.log(req.url);
//     if(req.url === "/about")
//     {
//         console.log(`${req.url}`);
//     }
//     res.end(() => {
//         console.log("Hello World");
//     })
//     // res.end(JSON.stringify({
//     //     data: "Hello World",
//     // }));
// });

// myServer.listen(8000);