// console.log("Started server")


// const express = require("express")
// const app = express();
// const PORT =3000;



// app.get("/", (req,res)=>{
//     console.log("success");
//     res.send ("hello back");
// });

// app.listen(PORT, ( )=> {
//     console.log("Listening server");
// })

const http =require('http')
PORT=8000;
let server=new http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end("hi")
})

server.listen(PORT, ()=>console.log(`"Serrver listening ${PORT}"`))