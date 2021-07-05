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
            }
        ]
    })
})

module.exports = router;