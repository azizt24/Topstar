const TopStarModel = require("../models/TopStarModel");
const asyncHandler = require("../middleware/asyncHandler");
const ErrorResponse = require("../utils/ErrorResponse");
// ----------------------------------------------------------------
//                          Methods
// ----------------------------------------------------------------
// @desc      Get all products
// @route     GET /api/v1/products
// @route     GET /api/v1/shops/:shopId/products
// @access    Public

exports.getAllProducts = asyncHandler(async (req, res, next) => {
  const products = await TopStarModel.find();
  res
    .status(200)
    .json({ success: true, productsCount: products.length, data: products });
});

// ----------------------------------------------------------------
// @desc      Get single product
// @route     GET /api/v1/products/:id
// @route     GET /api/v1/shops/:shopId/products/:id
// @access    Public

exports.getProductById = asyncHandler(async (req, res, next) => {
  const product = await TopStarModel.findById(req.params.id);

  if (!product) {
    return next(
      new ErrorResponse(
        `Product that ends with '${req.params.id}' was not found`,
        404
      )
    );
  }

  res.status(200).json({
    success: true,
    data: product,
  });
});

// ----------------------------------------------------------------
