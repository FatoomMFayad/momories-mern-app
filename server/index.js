import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();


//express 4.16+
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

const corsOptions ={
    origin:'localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

app.use('/posts', postRoutes);

const CONNECTION_URL = '';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>app.listen(PORT, console.log(`Server running on port: ${PORT} `)))
        .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);