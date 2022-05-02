const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Moralis', {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(function () {
    console.log("Connection connected Successfully");
}).catch(function () {
    console.log("Connection Fail");
})
const MoralisSchema = new mongoose.Schema({
    fileName:{
        type:String,
        required:true
    },
    hash: {
        type: String,
        required:true
    }
});

let  moralis  =  mongoose.model("moralis", MoralisSchema);
module.exports  = moralis;