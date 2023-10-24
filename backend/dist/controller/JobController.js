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
const jobsDB = require('../dbServices/jobsDB');
class JobController {
    constructor() { }
    /**to apply for a job. apart from userId, jobId, we can have resume,cover letter.. */
    apply(userId, jobId) {
        return __awaiter(this, void 0, void 0, function* () {
            let isApplied = yield jobsDB.isApplied(userId, jobId);
            //cant apply if already applied for the same job
            if (isApplied) {
                return {
                    status: false,
                    errMessage: "Already Applied"
                };
            }
            let res = yield jobsDB.applyForJob(userId, jobId);
            return {
                status: res
            };
        });
    }
}
module.exports = JobController;
