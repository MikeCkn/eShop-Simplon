import express from 'express';

import Product from '../models/product';

let router = express.Router();

router.get('/products', (req, res) => {
    Product.find({}, (err, products)=>{
        err ? res.send(err) : res.json(products);
    });
});

router.post('/newproduct', (req, res) =>{
    const product = new Product(req.body);
    product.save((err, productSaved) => {
        err ? res.send(err) : res.json('Product saved !')   
    });
});

export default router;