import express from 'express';

const app: express.Application = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, err => {
    console.log(`Server is listening on ${port}`);
});