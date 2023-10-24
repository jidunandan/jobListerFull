import { NextFunction, Request, Response } from "express";

const express = require('express');
const jobRouter = express.Router();
const jobsDB = require('../dbServices/jobsDB')
const JobController = require('../controller/JobController');
const jobController = new JobController();

jobRouter.get('/all', async function (req: Request, res: Response, next: NextFunction) {
    try {
        let resp = await jobsDB.getAllJobs();
        res.status(200).json(resp);
    } catch (err: any) {
        console.error(`Error while getting jobs `, err?.message);
        next(err);
    }
})

jobRouter.post('/apply', async function (req: Request, res: Response, next: NextFunction) {
    try {
        let userId = req?.body?.userId;
        let jobId = req?.body?.jobId;
        let response = await  jobController.apply(userId,jobId);
        res.status(200).json({ response});
    } catch (err: any) {
        console.error(`Error while Applying `, err?.message);
        next(err);
    }
})

module.exports = jobRouter;
