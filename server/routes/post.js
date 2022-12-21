const express = require("express");
const { createPost, getAllPosts, comment } = require("../controllers/post");
const { authUser } = require("../middlewares/auth");
const router = express.Router();

router.post("/createPost", authUser, createPost);
router.get("/getAllPosts", authUser, getAllPosts);
router.put("/comment", authUser, comment);

module.exports = router;
