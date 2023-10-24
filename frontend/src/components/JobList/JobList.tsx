import React, { useEffect, useState } from 'react'
import { Table, Modal, Button } from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'
import { config } from './config'
import './joblist.css'
import SearchandFilter from '../SearchAndFilter/SearchandFilter'
import { Job } from './types'
import Loader from '../Loader/Loader'
import { APPLY_JOB_URL, FETCH_ALL_JOBS_URL } from '../../constants/apiConstants'
import { TROUBLE_MESSAGE } from '../../constants/constants'


const JobList = () => {
    const [jobs, setJobs] = useState<any>([]);
    const [filteredJobs, setFilteredJobs] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false)

    const [showErrorPopup, setErrorPopup] = useState<boolean>(false);
    const [errMessage,setErrMessage] = useState<any>(TROUBLE_MESSAGE);
    const [showAppliedPopup, setShowAppliedPopup] = useState<boolean>(false);

    const [companyList, setCompaniesList] = useState<any>([]);
    const [description, setShowDescription] = useState<string>('')
    const [categories, setCategories] = useState<any>([])

    const [currentUser, setCurrentUser] = useState<any>({ userId: 1, username: "jidunandan" })
    const [selectedJob, setSelectedJob] = useState<any>(null);
    const columnDefs: any = config.columnDefs({ setShowDescription: setShowDescription, setSelectedJob: setSelectedJob })



    useEffect(() => {
        fetchAllJobs()
    }, [])


    const fetchAllJobs = async () => {
        setLoading(true)
        try {
            const response = await axios.get(FETCH_ALL_JOBS_URL);
            let jobData = response?.data?.jobs;
            jobData.map((job: Job) => job.key = job.id)
            setJobs(jobData);
            setFilteredJobs(jobData);
            if (jobData.length != 0) {
                populateCompanyList(jobData)
                populateCategoryList(jobData)
            }
        } catch (err) {
            setErrorPopup(true);
            setErrMessage(TROUBLE_MESSAGE)
        } finally {
            setLoading(false);
        }
    }


    const handleSearch = async (searchTerm: any, filterCompany: any, categoryFilter: any) => {
        let filtered = [...jobs];
        if (searchTerm) {
            filtered = filtered.filter((item, index) => {
                if (item.designation.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return true;
                }
            })
        }
        if (filterCompany) {
            filtered = filtered.filter((item, index) => {
                if (item.companyName == filterCompany) {
                    return true;
                }
            })
        }
        if (categoryFilter) {
            filtered = filtered.filter((item, index) => {
                if (item.jobType == categoryFilter) {
                    return true;
                }
            })
        }
        setFilteredJobs(filtered)
    }

    const populateCategoryList = (jobData: any) => {
        var unique = [];
        var distinctCategories: any = [];
        for (let i = 0; i < jobData.length; i++) {
            if (!unique[jobData[i].jobType]) {
                distinctCategories.push(jobData[i].jobType);
                unique[jobData[i].jobType] = 1;
            }
        }
        setCategories(distinctCategories)
    }

    const populateCompanyList = (jobData: any) => {
        var unique = [];
        var distinctCompanies: any = [];
        for (let i = 0; i < jobData.length; i++) {
            if (!unique[jobData[i].companyName]) {
                distinctCompanies.push(jobData[i].companyName);
                unique[jobData[i].companyName] = 1;
            }
        }
        setCompaniesList(distinctCompanies)
    }

    

    const onApplyClick = () => {
        setShowDescription('');
        applyJob(selectedJob?.id, currentUser?.userId);
    }

    const applyJob = async (jobId: Number, userId: Number) => {
        setLoading(true)
        try {
            let params = {}
            params = { jobId, userId };
            const response = await axios.post(APPLY_JOB_URL, params);
            if(response?.data?.response?.status){
                setShowAppliedPopup(true);
            } else {
                setErrorPopup(true);
                if(response?.data?.response?.errMessage){
                    setErrMessage(response.data.response.errMessage);
                }else {
                    setErrMessage(TROUBLE_MESSAGE)
                }
            }
        } catch (err) {
            setErrorPopup(true);
            setErrMessage(TROUBLE_MESSAGE);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="job-list">

            <SearchandFilter
                companyList={companyList}
                handleSearch={handleSearch}
                categories={categories}
            />
            {!loading && (<div>
                {filteredJobs.length == 0 ? 'No matches found' :
                    `We found ${filteredJobs.length} job(s) based on your search `}
            </div>)}
            {!loading ?
                <div className='table-container'>
                    <Table
                        className="job-list-table"
                        columns={columnDefs}
                        dataSource={filteredJobs} />
                </div> :
                <Loader message="Please wait while we fetch the jobs" />
            }

            <Modal
                title="Application Error"
                centered
                visible={showErrorPopup}
                onCancel={() => { setErrorPopup(false) }}
                footer={[
                    <Button key="back" onClick={() => setErrorPopup(false)} >
                        Close
                    </Button>]}>

                {errMessage}
            </Modal>
            <Modal
                title="Applied Successfully"
                centered
                visible={showAppliedPopup}
                onCancel={() => { setShowAppliedPopup(false) }}
                footer={[
                    <Button key="back" onClick={() => setShowAppliedPopup(false)} >
                        Close
                    </Button>]}>

                Successfully Applied for the job.
            </Modal>
            <Modal
                title='Description'
                bodyStyle={{ height: '400px', display: 'flex' }}
                centered
                destroyOnClose
                visible={description != ''}
                onCancel={() => setShowDescription('')}
                footer={[
                    <Button key="back" onClick={onApplyClick}>
                        Apply
                    </Button>]}
            >
                <div style={{ height: '100%', overflow: 'auto' }} dangerouslySetInnerHTML={{ __html: description }} />
            </Modal>
        </div>

    )

}
export default JobList;