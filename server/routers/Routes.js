const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/perfumeController");

router.route("/").get(getAllProducts);
router.route("/:id").get(getProductById);

module.exports = router;
