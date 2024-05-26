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

// userData = [
//   {
//     name: "mro",
//     class: "fsd",
//     address: {
//       no: "3",
//       street: "vivekanandar street dubai main road",
//       city: "dubai",
//     },
//   },
//   {
//     name: "VIJAY",
//     class: "fsd",
//     address: {
//       no: "3",
//       street: "vivekanandar street dubai main road",
//       city: "dubai",
//     },
//   },
// ];

const http = require("http");
const fs = require("fs");

PORT = 5000;
let server = new http.createServer((req, res) => {
  try {
    let data = fs.readFileSync("node.txt", "utf-8",)
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
  
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("tryagain later");
  }  
});

server.listen(PORT, () => console.log(`"Serrver listening ${PORT}"`));
