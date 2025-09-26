const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const contactRoutes = require("./routes/contactRoutes");

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use("/api", contactRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log("MongoDB connected");
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
  );
})
.catch(err => console.error(err));

