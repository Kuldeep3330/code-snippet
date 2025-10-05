import express from 'express'

const app = express();
const PORT = 8080;



// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
