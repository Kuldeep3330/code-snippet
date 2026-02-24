// import express from "express";
// import session from "express-session";
// import cookieParser from "cookie-parser";

// const app = express();
// const PORT = 8080;

// app.use(express.json());
// app.use(cookieParser());

// // 🧠 SESSION setup
// app.use(
//   session({
//     secret: "kuldeep_secret_key",
//     resave: false,
//     saveUninitialized: false,
//     cookie: { maxAge: 60000, httpOnly: true }, // 1 minute
//   })
// );

// // 🔑 Login route
// app.post("/login", (req, res) => {
//   const { username, theme } = req.body;

//   if (!username) return res.status(400).send("Username required");

//   // Store username in session
//   req.session.username = username;

//   // Set a theme cookie (default = light)
//   res.cookie("theme", theme || "light", { maxAge: 60000 });

//   res.status(200).send(`Logged in as ${username}`);
// });

// // 🏠 Dashboard route (requires session)
// app.get("/dashboard", (req, res) => {
//   if (!req.session.username)
//     return res.status(401).send("Please log in first!");

//   const theme = req.cookies.theme || "light";

//   res.send({
//     message: `Welcome back, ${req.session.username}!`,
//     theme: `Your current theme is ${theme}`,
//   });
// });

// // 🎨 Change theme (cookie update)
// app.put("/theme", (req, res) => {
//   const { theme } = req.body;
//   if (!theme) return res.status(400).send("Theme required");

//   res.cookie("theme", theme, { maxAge: 60000 });
//   res.send(`Theme changed to ${theme}`);
// });

// // 🚪 Logout (destroy session + clear cookie)
// app.delete("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     if (err) return res.status(500).send("Error logging out");
//     res.clearCookie("theme");
//     res.clearCookie("connect.sid"); // default session cookie
//     res.send("Logged out successfully!");
//   });
// });

// app.listen(PORT, () =>
//   console.log(`Server running on http://localhost:${PORT}`)
// );

// import express from "express"
// const app=express()
// import cookieParser from "cookie-parser"

// app.use(cookieParser())

 
// app.listen(8080, ()=>{
//   console.log("Server is running on http://localhost:8080")
// })

// import fs from 'fs'

// fs.writeFile('./data.js', "hello i am learning Node and js",'utf8',(err, data)=>{

// })
/**
 * server.on('request', (request, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!',
  }));
});

server.listen(8000);
 */

// import http from 'http'

// http.createServer((req, res)=>{
//   if(req.url==="/" && req.method==="GET")
//   {
//     res.write("home page")
//     res.end()
//   }
//   else if(req.url==="/about" && req.method==="GET"){
//     req.write("about page")
//     req.end();
//   }
  


// }).listen(4000,()=>{
//   console.log("Server running on http://localhost:4000");
// })

// import fs from "fs"

// //file write
// fs.writeFile('data.txt', "this is a file", (err)=>{
//   if(err) console.log(err);
//   else console.log('file written');  
// })

// //read file

// fs.readFile("data.txt", 'utf-8', (err, data)=>{
//   if(err){
//     console.log(err)
//   }
//   else
//     console.log(data);
// })

// fs.appendFile('data.txt', "/n Nwe line added", ()=>{
//   console.log("data appended"); 
// })

// const data= fs.readFileSync("data.txt", 'utf-8')
// console.log(data);


// import os from 'os'

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.freemem());


// import path from 'path'

// const filePath=path.join("folder", "data.txt")
// console.log(filePath);

import path from 'path'
import http from 'http'
import fs from 'fs'
import os from 'os'

const filePath= path.join(process.cwd(), "kuldeep.txt")

