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
const db = require('./db');
/**to retrieve list of all jobs available which are open */
function getAllJobs() {
    return __awaiter(this, void 0, void 0, function* () {
        const rows = yield db.query(`select jobs.id,companyName,employeeSize,designation,designationLevel,location,description,jobType,salary from 
        jobs INNER JOIN company on company.companyId = jobs.companyId WHERE status = 'Open';
        `);
        let data = [];
        if (rows) {
            data = rows;
        }
        return { jobs: data };
    });
}
/**to apply for a specific job */
function applyForJob(user_id, job_id, specific_resume = '', cover_letter = '') {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("asd", user_id, job_id, specific_resume, cover_letter);
        try {
            yield db.query(`INSERT INTO jobapplications(job_id,user_id,specific_resume,cover_letter,applied_at) VALUES(?,?,?,?,default);`, [job_id, user_id, specific_resume, cover_letter]);
            return true;
        }
        catch (err) {
            console.log(err);
            return false;
        }
    });
}
/**check if they already applied for the same job */
function isApplied(user_id, job_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const rows = yield db.query(`select * from jobapplications where user_id = ? and job_id = ?;
        `, [user_id, job_id]);
        let data = false;
        if (rows.length > 0) {
            data = true;
        }
        return data;
    });
}
module.exports = {
    getAllJobs,
    applyForJob,
    isApplied
};
