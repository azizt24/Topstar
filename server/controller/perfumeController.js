const Product = require('../models/Product.js');
import Products from './../../client/vite-Topstar/src/pages/products/Products';

const Products = [{
id: 1,
title: "Bleu De Chanel ",
Image: "https://cdn.homeshopping.pk/product_images/g/390/IMG-20200608-WA0007_1024x1024__52111_zoom.jpg",
content: "Price : 500 ",
},
{
id: 2,
title: "Gucci OUD",
Image: "https://taxfreebeauty.co.il/wp-content/uploads/2021/11/1575289609181118-540x600-1-wpp1640612970657.jpg",
content: "Price : 500 ",
},
{
id: 3,
title: "COCO Chanel",
Image: "data:image/jpeg;base64,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",
content: "Price : 500 ",
},
{
  id: 4,
  title: "Dior Jadore",
  Image: "https://www.fragranceoutlet.com/cdn/shop/products/Christian-Dior-Jadore-Women-Eau-de-Parfum-Spray-2.5-Best-Price-Fragrance-Parfume-FragranceOutlet.com-DETAILS_1024x1024.jpg?v=1568697084",
  content: "Price : 500 ",
  },
  {
    id: 5,
    title: "HUGO Boss",
    Image: "https://static.beautytocare.com/cdn-cgi/image/width=1600,height=1600,f=auto/media/catalog/product//h/u/hugo-boss-boss-bottled-bottled-parfum-50ml_1.jpg",
    content: "Price : 500 ",
    },
    {
      id: 6,
      title: "HUGO femmi",
      Image: "https://perfumeheart.com.cy/assets/images/products/405/hugobossfemmeboxx.jpg",
      content: "Price : 500 ",
      },
      {
        id: 7,
        title: "Dior Sauvage",
        Image: "https://i.makeupstore.co.il/r/ri/rixj16hg0yfo.jpg",
        content: "Price : 500 ",
        },
        {
          id: 8,
          title: "Burberry Women",
          Image: "https://i5.walmartimages.com/seo/Burberry-Classic-Eau-De-Parfum-Perfume-for-Women-3-3-oz_9ce60826-1ffa-4f76-beed-c248a895fb0c_1.5f4159ff5cb7763cfe111643f1d61043.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
          content: "Price : 500 ",
          },
]

// Controller methods
const perfumeController = {
  // Get all products
  getProducts: asyncHandler(async (req, res, next) => {
    res.status(200).json({
      success: true,
      count: Products.length,
      data: Products,
    });
  }),

  // Get product by ID
  getProductByID: asyncHandler(async (req, res, next) => {
    const productId = parseInt(req.params.id);
    const product = Products.find((prod) => prod.id === productId);
    if (!product) {
      return next(new ErrorResponse(`Product with ID ${req.params.id} not found`, 404));
    }
    res.status(200).json({
      success: true,
      data: product,
    });
  }),

  // Add a product
  addProduct: asyncHandler(async (req, res, next) => {
    const newProduct = req.body;
    Products.push(newProduct);
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  }),

  // Update a product
  updateProduct: asyncHandler(async (req, res, next) => {
    const productId = parseInt(req.params.id);
    let updatedProduct = Products.find((prod) => prod.id === productId);
    if (!updatedProduct) {
      return next(new ErrorResponse(`Product with ID ${req.params.id} not found`, 404));
    }
    updatedProduct = { ...updatedProduct, ...req.body };
    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  }),

  // Delete a product
  deleteProduct: asyncHandler(async (req, res, next) => {
    const productId = parseInt(req.params.id);
    const index = Products.findIndex((prod) => prod.id === productId);
    if (index === -1) {
      return next(new ErrorResponse(`Product with ID ${req.params.id} not found`, 404));
    }
    Products.splice(index, 1);
    res.status(200).json({
      success: true,
      data: {},
    });
  }),
};

module.exports = perfumeController;
