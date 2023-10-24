
const jobsDB = require('../dbServices/jobsDB')

class JobController {

    constructor() { }

    /**to apply for a job. apart from userId, jobId, we can have resume,cover letter.. */
    public async apply(userId: Number, jobId: Number) {
        let isApplied = await jobsDB.isApplied(userId, jobId);
        //cant apply if already applied for the same job
        if (isApplied) {
            return {
                status: false,
                errMessage: "Already Applied"
            }
        }
        let res = await jobsDB.applyForJob(userId, jobId);
        return {
            status: res
        };
    }


}
module.exports = JobController;