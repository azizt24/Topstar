const express = require("express");
const router = express.Router();
const controller = require("../controller/perfumeController");

router.get("/", controller.getProduct);
router.post("/", controller.addProduct);
router.get("/:id", controller.getProductByID);
router.put("/:id", controller.updateProduct);
router.delete("/:id", controller.deleteProduct);
module.exports = router;