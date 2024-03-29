import express from "express";
import url from "url";
import path from "path";

const app = express();
const PORT = 3000;

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/about.html"));
});

app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/contact.html"));
});

app.get("/css/style.css", (req, res) => {
    console.log("Css style");
    res.sendFile(path.join(__dirname, "/public/css/style.css"));
});

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/404.html"));
});

app.listen(PORT, () => {
    console.log(`Server with ${PORT} activated`);
});