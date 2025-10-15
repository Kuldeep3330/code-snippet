import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import data from './data.js';

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());        // Parse JSON body
app.use(cookieParser());        // Parse cookies

//session middleware
app.use(sesson({
  secret:'mysecretkey',
  resave:false,
  saveUninitialized:true,
  cookie:{ maxAge: 60 * 1000 } 

}))

app.post('/login', (req, res)=>{
  const { username }= req.body;
  if(!username){
    return res.status(400).send('username is required')
  }
  req.session.username=username;
  res.status(200).send(`Session created for ${username}`)
})

// Profile Route - checks session
app.get("/profile", (req, res) => {
  if (!req.session.username) {
    return res.status(401).send("Please log in first!");
  }

  res.status(200).send(`Welcome back, ${req.session.username}`);
});

// PUT /update — Update session data
app.put("/update", (req, res) => {
  const { newName } = req.body;

  if (!req.session.username) {
    return res.status(401).send("Please log in first!");
  }

  req.session.username = newName;
  res.status(200).send(`Session username updated to ${newName}`);
});

//DELETE /logout — Destroy the session
app.delete("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).send("Error destroying session");
    }
    res.clearCookie("connect.sid"); // default session cookie name
    res.status(200).send("Logged out and session destroyed!");
  });
});


// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
