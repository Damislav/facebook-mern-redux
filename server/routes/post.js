const express = require("express");
const { createPost, getAllPosts } = require("../controllers/post");
const { authUser } = require("../middlewares/auth");
const router = express.Router();

router.post("/createPost", authUser, createPost);
router.get("/getAllPosts", authUser, getAllPosts);

module.exports = router;
