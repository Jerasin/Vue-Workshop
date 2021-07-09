const express = require("express")
const router = express.Router();

router.get('/products' ,  (req, res)=>{
    res.json({
        status: 200,
        result: [
            {
                id: 001,
                product_name: "React",
                product_price: 200,
                product_stock: 1,
            },
            {
                id: 002,
                product_name: "Vue",
                product_price: 250,
                product_stock: 1,
            },
            {
                id: 003,
                product_name: "Vue",
                product_price: 450,
                product_stock: 1,
            },
            {
                id: 004,
                product_name: "Angular",
                product_price: 1450,
                product_stock: 1,
            },
            {
                id: 005,
                product_name: "Node",
                product_price: 1550,
                product_stock: 1,
            }
        ]
    })
})

module.exports = router;