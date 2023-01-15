const express=require('express')
require('dotenv').config();
const {graphqlHTTP}=require('express-graphql');
const cors=require('cors');

const schema=require('./schema/schema');
const connectDB =require('./config/db');

const port=process.env.PORT || 3000;

const app=express();
connectDB();

app.use(cors());

app.use('/graphql',graphqlHTTP({
    schema
}))

app.listen(port, console.log(`Server running`));