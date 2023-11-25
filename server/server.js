// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config({ path: "./config/.env" });
// const port = process.env.PORT || 3000;
// const app = express();
// app.use(express.json());
// app.use('/products')


// app.listen(port, () => {
//   console.log(`server running on  port ${port}`);
  
// });
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

const products = require('./routers/productsRoutes.js');
const auth = require('./routers/authRoutes.js');

const errorHandler = require('./middleware/errorHandler.js');

const connectDB = require('./config/db.js');

dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Topstar API'
  });
});

app.use('/api/v1/products', products);
app.use('/api/v1/auth', auth);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, function() {
  console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold);
});

process.on('unhandledRejection', function(err, promise) {
  console.log(`Error: ${err.message}`.red);
  server.close(() => process.exit(1));
});
