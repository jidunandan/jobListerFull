const db = require('./db');

/**to retrieve list of all jobs available which are open */
async function getAllJobs() {
    const rows = await db.query(
        `select jobs.id,companyName,employeeSize,designation,designationLevel,location,description,jobType,salary from 
        jobs INNER JOIN company on company.companyId = jobs.companyId WHERE status = 'Open';
        `
    );
    let data = []
    if (rows) {
        data = rows;
    }
    return { jobs: data }
}

/**to apply for a specific job */
async function applyForJob(user_id: Number, job_id: Number, specific_resume: any = '', cover_letter: String = '') {
    console.log("asd", user_id, job_id, specific_resume, cover_letter)
    try {
        await db.query(
            `INSERT INTO jobapplications(job_id,user_id,specific_resume,cover_letter,applied_at) VALUES(?,?,?,?,default);`,
            [job_id, user_id, specific_resume, cover_letter]
        );
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }

}
/**check if they already applied for the same job */
async function isApplied(user_id: Number, job_id: Number) {
    const rows = await db.query(
        `select * from jobapplications where user_id = ? and job_id = ?;
        `,[user_id,job_id]
    );

    let data = false;
    if (rows.length > 0 ) {
        data = true;
    }
    return data;
}

module.exports = {
    getAllJobs,
    applyForJob,
    isApplied
}