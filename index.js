import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from a container!",
    service: "my-express-app",
    pod: process.env.POD_NAME || "unknown",
    time: new Date().toISOString()
  });
});

// ✅ Corrected health endpoints
app.get('/healthy', (req, res) => res.status(200).send('OK'));
app.get('/healthyz', (req, res) => res.status(200).send('OK'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
