const mongoose=require('mongoose');
require('dotenv').config();

const connectDB=async()=>{
    const conn= await mongoose.connect('mongodb+srv://KetTroyDsz:yuh21yuh@splyt.meqgytv.mongodb.net/ProjectManagement?retryWrites=true&w=majority');
    console.log(`MongoDB connected`);
}

module.exports=connectDB;