var express = require("express");
const router = express.Router();
var productController = require("../Controller/ProductController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/addProduct", upload.array("imgs", 4), productController.create);
router.get("/products", productController.getAll);
router.delete("/delete/:id", productController.delete);
router.put("/update/:id", upload.array("imgs", 4), productController.update);
module.exports = router;
