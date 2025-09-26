const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoutes");
const connectDB = require("./db"); // import db.js

dotenv.config();
const app = express();

// ✅ Enable CORS
app.use(
  cors({
    origin: ["http://localhost:5173", "https://your-frontend-domain.com"], // frontend URLs
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Handle preflight requests
app.options("*", cors());

// JSON parser
app.use(express.json());

// Routes
app.use("/api", contactRoutes);

// Connect DB and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
