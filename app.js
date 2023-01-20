const express = require('express');
const app = express();

const dbEmp = require('./employee');
const PORT = 4200

app.use(express.json())

app.post('/add', dbEmp.createEmployee)
// app.get("/",(req,res)=>{
//     res.send("update hai re");
// })

// app.listen(4200);
app.listen(PORT,()=> console.log(`server is running on ${PORT}`));