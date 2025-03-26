const express = require('express');
const router = express.router();

const upload = require("../config/multer");

const PictureController = require('../controller/PictureController');

router.post("/", upload.single("file"), PictureController.create);