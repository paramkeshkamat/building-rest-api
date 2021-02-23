const Post = require("../models/posts");

const getPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (err) {
    res.json(err);
  }
};

const addPost = async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    const newPost = await post.save();
    res.json(newPost);
  } catch (err) {
    res.json(err);
  }
};

const getSpecificPost = async (req, res) => {
  try {
    const specificPost = await Post.findById(req.params.id);
    res.json(specificPost);
  } catch (err) {
    res.json(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.id },
      { $set: { title: req.body.title } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json(err);
  }
};

const putPost = async (req, res) => {
  try {
    const updatedPost = await Post.updateOne({_id: req.params.id}, {$set: req.body});
    res.json(updatedPost);
  } catch (err) {
    res.json(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.deleteOne(req.params.id);
    res.json(deletedPost);
  } catch (err) {
    res.json(err);
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
