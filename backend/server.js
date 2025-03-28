const express = require('express');
const app = express();
const port = 5000;

// Simple API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the back-end!' });
});

app.listen(port, () => {
  console.log(`Back-end server running at http://localhost:${port}`);
});
