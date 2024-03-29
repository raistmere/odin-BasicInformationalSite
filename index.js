import http from "http";
import path from "path";
import fs from "fs";
import url from "url";

const myServer = http.createServer((req, res) => {

    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const filePath = path.join(__dirname, "public", req.url === "/"? "index" : req.url);
    const extname = path.extname(filePath) === ""? ".html" : "";

    // console.log("Path: ", filePath)
    // console.log("Ext: ", extname);
    // console.log("file: ", path.parse(filePath));

    let contentType = "text/html";

    switch (extname) {
        case "":
            contentType = "text/html";
            break;
        case ".css":
            contentType = "text/css";
        default:
            break;
    }

    // console.log("Content Type: ", contentType);

    fs.readFile(`${filePath}${extname}`, (err, content) => {
        // console.log("Reading File: ", `${filePath}${extname}`);

        // Failure request
        if(err) { 
            if(err.code === "ENOENT") {
                const errorPath = path.join(__dirname, "public", "404.html");
                fs.readFile(errorPath, (err, errContent) => {
                    res.writeHead(200, {"Content-Type": contentType});
                    res.write(errContent, "utf-8");
                    res.end();
                });
            }
            else
            {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }
        // Success request
        else { 
            res.writeHead(200, {"Content-Type": contentType});
            res.write(content);
            res.end();
        }

    })
});

const PORT = process.env.PORT || 8000;

myServer.listen(PORT, () => console.log(`Server running on port: ${PORT}`));