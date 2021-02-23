const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

router.get("/", postController.getPosts);
router.post("/", postController.addPost);
router.get("/:id", postController.getSpecificPost);
router.patch("/:id", postController.updatePost);
router.put("/:id", postController.putPost);
router.delete("/:id", postController.deletePost);

module.exports = router;
