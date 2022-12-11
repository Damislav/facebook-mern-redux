const express = require("express");
const { createPost } = require("../controllers/post");
const { authUser } = require("../middlewares/auth");

const router = express.Router();

router.post("/createPost", authUser, createPost);

module.exports = router;
