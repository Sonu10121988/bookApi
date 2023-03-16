require("dotenv").config();
const express = require('express');
var cors = require('cors');
const app = express();
const connetDB = require('./db/connect');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const products_routes = require("./routes/products");

app.get('/', (req, res) => {
   res.send("Hi I am Live");
});

// middleware and set router
app.use("/api/products", products_routes);

// for single id
//app.use("/api/products/:id", products_routes);

 // for single id
// app.get("/api/products/:id", async (req,res)=>{
//    try{
//     const _id = req.params.id;
//     console.log(_id);
//     const productData = await product.findById(_id);
//     //console.log(productData);
//     if(!productData){
//       return res.status(404).send();
//     }else{
//       res.send(productData);
//     }
//    }catch(error){
//       res.send(error);
//    }
// });

const start = async() => {
try{
   await connetDB(process.env.MONGODB_URL);
app.listen(PORT, ()=>{
   console.log(`${PORT} Yes I am Connected`);
});
}catch(error){
console.log(error);
}
};


start();