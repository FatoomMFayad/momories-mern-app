import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();


//express 4.16+
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(cors());

app.use('/posts', postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>app.listen(PORT, console.log(`Server running on port: ${PORT} `)))
        .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);