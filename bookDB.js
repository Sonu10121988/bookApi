require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./models/product");

const bookjson = require("./books.json");


const start = async () => {
try{
await connectDB(process.env.MONGODB_URL);
await product.deleteMany();
await product.create(bookjson);
console.log("success");
} catch (error){
console.log(error);
}
};

start();