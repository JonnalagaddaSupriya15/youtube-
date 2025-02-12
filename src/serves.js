const express = require('express');
const { PORT, connectToDatabase } = require('./config');

const app = express();

// Connect to the database
connectToDatabase();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
