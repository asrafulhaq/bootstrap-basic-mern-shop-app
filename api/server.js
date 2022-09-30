import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import studentRoute from './routes/student.js';
import userRoute from './routes/user.js'; 
import productRoute from './routes/product.js'; 
import mongoDBConnect from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

 
 

// init express 
const app = express();
dotenv.config(); 

 


// middlewares 
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(cookieParser()); 
app.use(cors());
 
// init env variabels
const PORT = process.env.PORT || 5000;

// static folder 
app.use(express.static('api/public'));


// routes 
app.use('/api/v1/product' , productRoute );
app.use('/api/student' , studentRoute );
app.use('/api/user' , userRoute );



// express error handler 
app.use( errorHandler );

// listen server 
app.listen(PORT, () => {
    mongoDBConnect();
    console.log(`server running on port ${ PORT }`.bgGreen.black);
});