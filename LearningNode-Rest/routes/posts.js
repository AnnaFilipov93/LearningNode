const express = require('express');
const router = express.Router();

const Post = require('../models/Post');

//Get all the posts 
router.get('/', async (req, res) => {
    try{
        const posts = await Post.find();
        res.json(posts);
    } catch (err){
        res.json({ massage: err });
}} );


router.get('/more', (req, res) => {
    res.send('We are on posts/more');
} );


//To create a new post
router.post('/', async (req,res) => {
    //creating a new post after we got the information
    //from the client
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    //Saving to the DB
    try{
        const savePost = await post.save();
        res.json(savePost);
    } catch (err){
        res.json({ massage: err });
    }
});


//Get a spesific post by the url => /sometging (id)
router.get('/:postId', async (req,res) => {

    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    } catch (err){
        res.json({ massage: err });
    }
});

//Delete post
router.delete('/:postId', async (req,res) => {
    try{
        const removedPost = await Post.remove({_id: req.params.postId});
        res.json(removedPost);
    } catch (err){
        res.json({ massage: err });
    }    
});

//Update a post
router.patch('/:postId' , async (req,res) => {
    try{
    const updatedPost = await Post.updateOne(
        {_id: req.params.postId}, 
        {$set: {title: req.body.title}}
        );
        res.json(updatedPost);
    } catch (err){
        res.json({ massage: err });
    }
});

//To export the router
module.exports = router;