const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Add middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('Connected to MongoDB'))
// .catch(err => console.error(err))

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
    Server listening on port ${PORT}.
    GraphQL API ready at http://localhost:${PORT}/graphql
  `);
});
