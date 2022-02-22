const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');

// GET ROUTES
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.send(posts);
  } catch (error) {
    res.json({ message: error });
  }
});

// POST ROUTES
router.post('/', async (req, res) => {
  const post = new Post({
    id: req.body.id,
    name: req.body.name,
    manufacturer: req.body.manufacturer,
    description: req.body.description,
    colour: req.body.colour,
    price: req.body.price,
    imageFilePath: req.body.imageFilePath,
    ram: req.body.ram,
    screen: req.body.screen,
    processor: req.body.processor,
  });
  try {
    const savedPost = await post.save();
    res.json(savedPost);
    console.log('all posts');
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete('/:postId', async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (error) {
    res.json({ message: error });
  }
});

//only updates the title - TODO: update existing changed entries
router.patch('/:postId', async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } });
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
