const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from a specified directory (e.g., 'public')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('HTML Exercises Server Running');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});