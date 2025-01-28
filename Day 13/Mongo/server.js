const express = require("express");
const server = express();

require("dotenv").config();
const mongoose = require("mongoose");
const mongo_uri = process.env.mongo_uri;

mongoose
  .connect(mongo_uri)

  .then(() => {
    console.log("MongoDB Atlas connected");
  })
  .catch((error) => {
    console.error("Connection error: " + error);
  });

// Assign a port number
const port = 7008;

const items = [
  { id: 1, name: "jeans" },
  { id: 2, name: "shirts" },
  { id: 3, name: "kurti" },
];

const productSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Product name
    price: { type: Number, required: true } // Product price
});

// Default route
server.get("/", (req, res) => {
  res.end("server is running");
});

// GET all products
server.get("/product", (req, res) => {
  res.json(items);
});

// POST to add a new product
server.post("/product", (req, res) => {
  const newitem = { id: items.length + 1, name: req.body.name };
  items.push(newitem);
  res.status(201).json(newitem);
});

// DELETE a product by ID
server.delete("/product/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const index = items.findIndex((item) => item.id === itemId);

  if (index !== -1) {
    const deletedItem = items.splice(index, 1); // Remove the item from the array
    res.status(200).json({ message: "Item deleted successfully", deletedItem });
  } else {
    res.status(404).json({ message: "Item not found" });
  }
});

// Start the server
server.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);