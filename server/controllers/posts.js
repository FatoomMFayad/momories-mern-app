import express from 'express';
import mongoose from 'mongoose';
// import Post from '../../client/src/components/Posts/Post/Post.js';
import PostMessage from '../models/postMessage.js';

export const getPosts = (async(req, res)=>{
    try{
        const postMessages = await PostMessage.find();
        // console.log(postMessages);
        res.status(200).json(postMessages);
    }catch(error){
        res.status(404).json({messge: error.messge});
    }
});

export const createPost= async(req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try{
        await newPost.save();
        res.status(201).json(newPost);

    }catch(error){
        res.status(409).json({messge: error.messge});
    }
}

export const updatePost= async(req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    
    if(!mongoose.Types.objectId.isValid(_id))  res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new : true });

    res.json(updatedPost);
}
