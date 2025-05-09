const mongoose = require("mongoose");
require('dotenv').config();

// const url = process.env.DATABASE

// mongoose.connect(`${url}`)

mongoose.connect(`mongodb+srv://udayjamgade1:${process.env.PASSWORD}@cluster0.iblngby.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)