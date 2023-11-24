const express = require("express");
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use('/products')


app.listen(port, () => {
  console.log(`server running on  port ${port}`);
  
});
