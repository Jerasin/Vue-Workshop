const express = require("express");
const router = express.Router();
const authorization = require("../authentication/authorize-jwt");
const product = require("../models/product");

//  Module for Create DataForm
const formidable = require("formidable");

const path = require("path");

// Module is FileSystem for Manager Files
const fs = require("fs-extra");

router.get("/products", authorization, async (req, res) => {
  try {
    const result = await product.findAll(
      { limit: 5 },
      { where: { product_active: 1 } }
    );

    const count = await product.count()

    console.log(count);
    res.status(200).json({ status: 200, result: result , count: count});
  } catch (err) {
    //   res.status(500).json({status: 500 , result: err})
    console.log(err);
  }
});

router.post("/product", authorization, (req, res) => {
  try {
    let form = new formidable.IncomingForm();
    form.parse(req, async (error, fields, files) => {
      const {
        product_code,
        product_stock,
        product_price,
        product_name,
        product_active,
        product_image,
        createdBy,
      } = fields;

      console.log(fields);

      const data = await product.findOne({
        where: { product_code: fields.product_code },
      });

      if (data === null) {
        const result_insert = await product.create({
          product_code: product_code,
          product_stock: product_stock,
          product_name: product_name,
          product_price: product_price,
          product_active: product_active,
          product_image: product_image,
          createdBy: createdBy,
        });
        // console.log(files.product_image);
        if (files.product_image) {
          if (
            files.product_image.type != undefined &&
            files.product_image.type === "image/jpeg"
          ) {
            const data_img = await uploadImage(files, result_insert);
            if (data_img.status === 200) {
              return res.status(200).json({ status: 200, result: "Success" });
            } else {
              return res.status(500).json({ status: 500, result: data_img });
            }
          }
        }
        return res.status(200).json({ status: 200, result: "Success" });
      } else {
        // console.log("Duplicate");
        return res.status(200).json({ status: 404, result: "Duplicate" });
      }
    });
  } catch (err) {
    return res.status(500).json({ status: 500, result: err });
  }
});

uploadImage = async (files, doc) => {
  try {
    const fileExtention = files.product_image.name.split(".")[1];

    // Custom Filename Ex: (product_id = 1150) + (fileExtention = .pdf)
    doc.product_image = `${doc.product_code}.${fileExtention}`;
    // console.log(doc.product_image);

    // Custom  Newpath to save Files
    const newpath =
      path.resolve("./" + "/upload/images/") + "/" + doc.product_image;
    // console.log(newpath);

    if (fs.access(newpath)) {
      await fs.remove(newpath);
    }
    await fs.moveSync(files.product_image.path, newpath);

    const result = await product.update(
      { product_image: doc.product_image },
      {
        where: {
          product_code: doc.product_code,
        },
      }
    );
    return { status: 200, result: "Success" };
  } catch (err) {
    return err;
  }
};

router.delete("/product/:id", async (req, res) => {
  const { id } = req.params;
  try{
    const result = await product.destroy({
      where: {
        id: id,
      },
    });
    if(result){
      return res.status(200).json({ status: 200, result: "Success"})
    }
  }
  catch (err) {
    return res.status(500).json({ status: 500, result: err})
  }
  
});

module.exports = router;
