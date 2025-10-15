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

const http = require('http');

const server= http.createServer((req, res)=>{
  // res.writeHead(200, {"content-type":"text/plain"})
  // res.setHeader('Content-Type', 'text/plain')
  
  if(req.url==="/"){
    res.statusCode = 200;
    res.end("Home Page")
  }else if(req.url==="/about"){
    res.statusCode = 200;
    res.end("About Page")
  }else{
    res.statusCode = 404;
    res.end("Page not found")
  }  
})

server.listen(8080, ()=>{
  console.log("Server is running on http://localhost:8080")
})
