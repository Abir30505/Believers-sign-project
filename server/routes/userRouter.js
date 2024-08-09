const express = require( 'express')
const { fetchProduct } = require('../controllers/userController')
const { deleteProduct } = require('../controllers/userController')
const { postproduct } = require('../controllers/userController')
 
const route = express.Router();

route.get('/fetch',fetchProduct)
route.post('/post',postproduct)
route.delete('/deleteProduct/:id',deleteProduct)

module.exports = route ;