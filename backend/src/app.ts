import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(function (req, res, next) {
  // I used the host directly for faster develpement
  // I could use ENV variables for productions
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});


app.post('/api/appointment', (req: Request, res: Response) => {
  const data = req.body;
  // validate if field are empty
  // save the data to a database.
  res.status(200).send('success');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
