const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://talhabinay:talha126@cluster0.qsi266u.mongodb.net/Zara"
  )
  .then(() => console.log("Connection Successfull"))
  .catch((err) => console.log("Connection Error" + err));
