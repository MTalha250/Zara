var express = require("express");
const router = express.Router();
var collectionController = require("../Controller/CollectionController");
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

router.post(
  "/addCollection",
  upload.single("img"),
  collectionController.create
);
router.get("/collection", collectionController.getAll);

module.exports = router;
