const mongoose = require('mongoose');



const connetDB = (uri)=>{
   // console.log("connet DB");
return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
};

module.exports = connetDB;