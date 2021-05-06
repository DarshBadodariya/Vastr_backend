require('dotenv').config()
const mongoose = require('mongoose');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const User = require("./models/user");


const authRoutes = require("./routes/auth");
<<<<<<< Updated upstream
const userRoutes = require("./routes/user");
=======
const userprofile = require("./routes/userprof");
>>>>>>> Stashed changes
const productRoutes = require("./routes/product");

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(() =>{
    console.log("DB CONNECTED")
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());


app.use("/api", authRoutes);
app.use("/api/userprof", userprofile);
app.use("/api/products", productRoutes);


const port = process.env.PORT || 4001;
//Starting a server 
app.listen(port, () =>{
    console.log(`app is running at ${port}`);
})
