"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const jobRouter = express.Router();
const jobsDB = require('../dbServices/jobsDB');
const JobController = require('../controller/JobController');
const jobController = new JobController();
jobRouter.get('/all', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let resp = yield jobsDB.getAllJobs();
            res.status(200).json(resp);
        }
        catch (err) {
            console.error(`Error while getting jobs `, err === null || err === void 0 ? void 0 : err.message);
            next(err);
        }
    });
});
jobRouter.post('/apply', function (req, res, next) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let userId = (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.userId;
            let jobId = (_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.jobId;
            let response = yield jobController.apply(userId, jobId);
            res.status(200).json({ response });
        }
        catch (err) {
            console.error(`Error while Applying `, err === null || err === void 0 ? void 0 : err.message);
            next(err);
        }
    });
});
module.exports = jobRouter;
