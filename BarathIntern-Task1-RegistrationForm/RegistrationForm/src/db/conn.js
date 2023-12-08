const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:27017/Registration", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true

// }).then(() => {
//     console.log(`connection successful`);
// }).catch((e) => {
//     console.log(`no connection`);
// })
mongoose.connect("mongodb://127.0.0.1:27017/Registration", {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`Error connecting to MongoDB:`, e);
})
