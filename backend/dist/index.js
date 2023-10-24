"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var bodyParser = require('body-parser');
var cors = require('cors');
const port = 3001;
const jobsRouter = require('./routes/jobsRouter');
const app = (0, express_1.default)();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/', (req, res) => {
    res.send("SERVER REQUEST SUCCESSFUL.");
});
app.use('/jobs', jobsRouter);
app.listen(port, () => {
    console.log(`SERVER IS RUNNING ON ${port} !.......`);
});
