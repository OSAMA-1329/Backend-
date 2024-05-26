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


// const http = require("http");
// const fs = require("fs");

// PORT = 3000;
// let server = new http.createServer((req, res) => {
//   try {
//     let data = fs.readFile('node.txt', 'utf-8',(err, data) => {
//       if (err) {
//         throw err
//       } else {
//         res.writeHead(200, { "Content-Type": "text/html" });
//         res.end(data);
//       }
//     });
//   } catch (error) {
//     res.writeHead(500, { "Content-Type": "text/html" });
//     res.end("tryagain later");
//   }
// });

// server.listen(PORT, () => console.log(`"Serrver listening ${PORT}"`));

const http = require("http");
const fs = require("fs");

PORT = 5000;
let server = new http.createServer((req, res) => {



  try { 

    //write file in the folder then use in the read file to show that

    fs.writeFileSync('assets/sample.doc','nathanda eluthuna intha file','utf-8')

    // if we need to update the file
    fs.appendFileSync('assets/sample.doc','Athuku na ena pana','utf-8')


    //read file in the  folder
    let data = fs.readFileSync('assets/sample.doc', "utf-8",)
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
  
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("tryagain later");
  }  
});

server.listen(PORT, () => console.log(`"Serrver listening ${PORT}"`));
