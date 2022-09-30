import mongoose from "mongoose";


// create student schema
const productSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },
    regular_price : {
        type : Number,
        required : true,
    },
    sale_price : {
        type : Number,
    },
    stock : {
        type : Number,
    },
    photo : {
        type : String,
        default : 'p.png'        
    },
    gallery : {
        type : Array,
        default : []       
    },
    category : {
        type : Array,
        default : []
    },
    tags : {
        type : Array,
        default : []
    },

  

}, {
    timestamps : true
});




// export model 
export default mongoose.model('Product', productSchema);