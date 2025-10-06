import express from 'express';
import cookieParser from 'cookie-parser';
import data from './data.js';

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());        // Parse JSON body
app.use(cookieParser());        // Parse cookies

// Login Route - sets a cookie
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send('Username and password are required');
  }

  // Setting a cookie valid for 1 minute
  res.cookie('sessionId', '123456', {
    maxAge: 60 * 1000,  // 1 minute
    httpOnly: true       // Prevent client-side JS access
  });

  // Also set username in another cookie for demo (non-secure)
  res.cookie('username', username);

  res.status(200).json({
    message: 'Login successful',
    cookieSet: true
  });
});

// Profile Route - checks cookie
app.get('/profile', (req, res) => {
  const { sessionId, username } = req.cookies;

  if (sessionId !== '123456') {
    return res.status(401).send('Unauthorized');
  }

  res.status(200).send(`Hello ${username}, welcome back!`);
});

// Logout Route - clears cookie
app.post('/logout', (req, res) => {
  res.clearCookie('sessionId');
  res.clearCookie('username');
  res.send('Logged out successfully');
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
