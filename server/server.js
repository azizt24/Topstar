const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");

// ----------------------------------------------------------------
//                  Loading configuration from ENV
// ----------------------------------------------------------------
dotenv.config({ path: "./config/.env" });
const port = process.env.PORT || 3000;

// ----------------------------------------------------------------
//                     Connecting to Database
// ----------------------------------------------------------------
const connectDB = require("./config/db");
const router = require("./routers/Routes");
connectDB();

// ----------------------------------------------------------------
//                     Express App
// ----------------------------------------------------------------
const app = express();
colors.enable();

// ----------------------------------------------------------------
//                     App Use's
// ----------------------------------------------------------------
app.use(express.json());
app.use("/products", router);

const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

// ----------------------------------------------------------------
//                     Server Listening
// ----------------------------------------------------------------
const server = app.listen(port, () => {
  console.log(`\nserver running on  port ${port}`.bgCyan.bold);
});

// --------- Handling unhandled promise rejection  ------------
process.on("Unhandled rejection", (err, promise) => {
  console.log(
    `\nserver unhandled promise rejection, Error: ${err.message}`.bgRed.bold
  );

  //  .....  Closing the connection  .....
  server.close(() => process.exit(1));
});
