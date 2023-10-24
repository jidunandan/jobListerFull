import express, { Express, Request, Response } from 'express';
var bodyParser = require('body-parser');
var cors = require('cors')
const port = 3001;

const jobsRouter = require('./routes/jobsRouter');

const app: Express = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {
    res.send("SERVER REQUEST SUCCESSFUL.");
});

app.use('/jobs', jobsRouter);

app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON ${port} !.......`)
})

