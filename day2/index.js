import express from 'express';
import data from './data.js';

const app = express();
const PORT = 8080;

// Example route
app.get('/', (req, res) => {
  console.log(req.query); // http://localhost:8080/?name=Alice Smith
  const { name } = req.query;
  const userData = data.filter((user) => {
    return user.name == name
  })
  res.status(200).send(userData)
});

//using params
app.get('/user/:id', (req, res) => {
  const { id } = req.params;
  const userId = parseInt(id);

  // const userData= data.find((user)=>{
  //   return user.id===userId
  // })

  //filter method
  const userData = data.filter((user) => {
    return user.id === userId
  })

    res.status(200).send({
    message:'user data fetched succesfully',
    data:userData
  })
})

app.use(express.json());// middleware for parsing application/json

// post method for creating user
app.post('/user', (req, res)=>{
  const { name, email }= req.body;

  const newUSer={
    id: data.length + 1,
    name,
    email
  }
  data.push(newUSer);

  res.status(201).send({
    message:'user created successfully',
    data:data
  })

})

//put method for updating user
app.put('/user/:id', (req, res) => {
  const {
    body,
    params: { id }
  } = req;

  const userInd = data.findIndex((user) => user.id === parseInt(id));

  if (userInd === -1) {
    return res.status(404).send("User not found");
  }

  // Update the user data
  data[userInd] = { id: parseInt(id), ...body };

  res.status(200).send({
    message: 'User updated successfully',
    data
  });
});

// //patch method for updating user
// app.patch('/user/:id', (req, res)=>{
//   const {id}= req.params;

// })



// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
