import express from 'express';
import path from 'path';
const app = express();


app.all('*', (req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Pragma', 'no-cache');
  next();
});

app.set('etag', false);
app.use(express.static(path.join(__dirname)))

app.listen(3001, () => {
  console.log(`Running on Port 3001`);
});

export default app;