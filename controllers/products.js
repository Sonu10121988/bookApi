const product = require("../models/product");
//const { search } = require("../routes/products");

const getAllProducts = async (req, res) => {
  const {id, author, name, featured, sort, select ,search,stock} = req.query;
  const queryObj = {};

  if (id) {
    queryObj._id = id;
  }
  if (stock) {
    queryObj.stock = stock;
  }
  if (author) {
    queryObj.author = author;
  }
  if (featured) {
    queryObj.featured = featured;
  }
  if (name) {
    queryObj.name = { $regex: name, $options: "f" };
  }
// use sort method
  let apiBook = product.find(queryObj);
  
   if (sort){
    let sortFix = sort.split(",").join(" ");
    apiBook = apiBook.sort(sortFix);
  };
  
  // use select searching method
  if (select){
    //let selectFix = select.replace(",", " ");
    let selectFix = select.split(",").join(" ");
    apiBook = apiBook.select(selectFix);
  };

  // use pagination and limit
  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 7;
  let skip = (page - 1)* limit;

  apiBook = apiBook.skip(skip).limit(limit);

  //console.log(queryObj);
  const myBook = await apiBook;
  res.status(200).json({ myBook, nbHits: myBook.length });
};

const getAllProductsTesting = async (req, res) => {
 const myBook = await product.find(req.query).sort("price");
  console.log(req.query);
  res.status(200).json({ myBook });
};
module.exports = { getAllProducts, getAllProductsTesting};
