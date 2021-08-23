import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();
app.use('/posts', postRoutes);

//express 4.16+
app.use(express.urlencoded({extended: true}));
app.use(express.json()) // To parse the incoming requests with JSON payloads

app.use(cors());

const CONNECTION_URL = 'mongodb+srv://ffatoom:<password>@cluster0.fuput.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
        .then(()=>app.listen(PORT, console.log(`Server running on port: ${PORT} `)))
        .catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify', false);