const express = require('express');
const multer = require('multer');
const routes = new express.Router();

const uploadConfig = require('../config/upload');
const upload = multer(uploadConfig);

// Importação dos Controllers
const PostController = require('../controllers/PostController');
const LikeController = require('../controllers/LikeController');

routes.post('/posts/:id/like',LikeController.store);

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);

module.exports = routes;
