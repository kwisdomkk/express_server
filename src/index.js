import express from "express"
const app=express();


const PORT=3000

// app.get("/",(req,res)=>{
//     res.send("root direstory")
// })
app.get("/",(req,res)=>{
    res.send("Hello World! github push test");
});

app.listen(PORT,()=> console.log(`Sever on: http://localhost:${PORT}`));