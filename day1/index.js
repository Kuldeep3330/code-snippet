
const path= require("path")

console.log("filename", __filename);
console.log("Pathname", __dirname);

const filename= path.join("kuldeep", "singh", "rajput")

console.log(filename);





































// // const fs = require("fs")

// // //sync blocking code , async means non-blocking code
// // //write

// // // fs.writeFileSync("./myFile.txt", "my hello world")

// // // fs.writeFile("./myFile.txt","world i am writting from async", (err)=>{
// // //     if(err){
// // //         console.log(err);
        
// // //     }
// // //     console.log("successfully written in asyn nature");
    
// // // } )
// // // console.log("successfully written");

// // //read
// // // const data=fs.readFileSync("myFile.txt", "utf-8")

// // // console.log(data);

// // // fs.readFile("myFile.txt", "utf-8", (err, res)=>{
// // //     if(err){
// // //         console.log(err);        
// // //     }
// // //     else{
// // //         console.log(res);        
// // //     }
// // // })

// // //update
// // fs.appendFileSync("myFile.txt", new Date().toDateString())

// // fs.appendFile("myFile.txt", 'hello world this is kuldeep', (err, res)=>{
// //     if(err){
// //         console.log(err);

// //     }
// //     else{
// //         console.log(res);
        
// //     }
// // })
// // //delete

// const express = require('express')

// const app= express()

// const courses= [
//   {
//     "id": 1,
//     "title": "Introduction to JavaScript",
//     "category": "Programming",
//     "level": "Beginner",
//     "duration": "6 weeks"
//   },
//   {
//     "id": 2,
//     "title": "Advanced React Development",
//     "category": "Web Development",
//     "level": "Advanced",
//     "duration": "8 weeks"
//   },
//   {
//     "id": 3,
//     "title": "Data Structures & Algorithms",
//     "category": "Computer Science",
//     "level": "Intermediate",
//     "duration": "10 weeks"
//   },
//   {
//     "id": 4,
//     "title": "Python for Data Science",
//     "category": "Data Science",
//     "level": "Beginner",
//     "duration": "7 weeks"
//   },
//   {
//     "id": 5,
//     "title": "Machine Learning Fundamentals",
//     "category": "Artificial Intelligence",
//     "level": "Intermediate",
//     "duration": "12 weeks"
//   },
//   {
//     "id": 6,
//     "title": "UI/UX Design Principles",
//     "category": "Design",
//     "level": "Beginner",
//     "duration": "5 weeks"
//   },
//   {
//     "id": 7,
//     "title": "Cloud Computing with AWS",
//     "category": "Cloud",
//     "level": "Intermediate",
//     "duration": "8 weeks"
//   },
//   {
//     "id": 8,
//     "title": "Cybersecurity Basics",
//     "category": "Security",
//     "level": "Beginner",
//     "duration": "6 weeks"
//   },
//   {
//     "id": 9,
//     "title": "DevOps Practices & Tools",
//     "category": "Software Engineering",
//     "level": "Intermediate",
//     "duration": "9 weeks"
//   },
//   {
//     "id": 10,
//     "title": "Blockchain Essentials",
//     "category": "Emerging Tech",
//     "level": "Beginner",
//     "duration": "6 weeks"
//   }
// ]

// const logger= (req, res, next)=>{
//     console.log('i am logger');
//     next()
// }

// app.get('/',[logger],(req, res)=>{
//     res.send('hello world!');
// })

// app.get('/api/v1/courses',(req, res)=>{
//     //http://localhost:8000/api/v1/courses?page=1&limit=5
//     //here we page and limit as req.query
//     // console.log(req.query.page);   

//     res.send(courses);
// })

// // app.get('/api/v1/courses/3', (req, res)=>{
// //     res.send(courses[3])
// // })

// app.get('/api/v1/courses/:id', (req, res)=>{
//     res.status(200).send(courses[req.params.id])
// })

// app.listen(8000, ()=>{
//     console.log("Server started on port ",8000 )
// })