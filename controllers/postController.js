const Post = require("../models/posts");

const getPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.status(200).json(allPosts);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const newPost = await post.save();
    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
};

const getSpecificPost = async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.id);
    res.status(200).json(specificPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
};

const putPost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(201).json(updatedPost);
  } catch (err) {
    res.status(400).json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne({_id: req.params.id});
    res.status(200).json(deletedPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getPosts,
  addPost,
  getSpecificPost,
  updatePost,
  putPost,
  deletePost,
};
