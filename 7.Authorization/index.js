const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());
app.use(cookieParser());

const ACCESS_SECRET = "access-secret";
const REFRESH_SECRET = "refresh-secret";

let refreshTokensDB = [];

//LOGIN API
app.post("/login", (req, res) => {
    const user = { id: 1, email: "test@gmail.com" }
    const accessToken = jwt.sign(user, ACCESS_SECRET, { expiresIn: "10s" });

    const refreshToken = jwt.sign(user, REFRESH_SECRET, { expiresIn: "1m" });
    refreshTokensDB.push(refreshToken)
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        sameSite: "strict"
    });
    res.json({ accessToken });
});

//JWT verification
function verifyToken(req, res, next){
    const token=req.headers.authorizatioon?.split("")[1]
    jwt.verify(token, ACCESS_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}



app.get("/protected", verifyAccess, (req, res) => {
  res.json({ message: "Secure Data 🔥", user: req.user });});

//Refresh token Rotation
app.post("/refresh", (req, res)=>{
    const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(401);//ye logout ke time nikal diya hai

  if (!refreshTokensDB.includes(token)) {
    return res.sendStatus(403);
  }
  jwt.verify(token, REFRESH_SECRET, (err, user)=>{
    if(err) return res.sendStatus(403)
        //remove old refresh token(rotation)
    refreshTokensDB = refreshTokensDB.filter(t => t !== token);
    const newAccessToken = jwt.sign(
      { id: user.id, email: user.email },
      ACCESS_SECRET,
      { expiresIn: "10s" }
    );
    const newRefreshToken = jwt.sign(
      { id: user.id, email: user.email, tokenId: uuidv4() },
      REFRESH_SECRET,
      { expiresIn: "1m" }
    );
    refreshTokensDB.push(newRefreshToken);

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      sameSite: "strict"
    });
    res.json({ accessToken: newAccessToken });
  })})

  //logout
  app.post("/logout", (req, res) => {
  const token = req.cookies.refreshToken;

  refreshTokensDB = refreshTokensDB.filter(t => t !== token);

  res.clearCookie("refreshToken");
  res.json({ message: "Logged out successfully" });
});
app.listen(5000, () => console.log("Server running on 5000"));