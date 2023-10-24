import {Job} from './types'
interface Props {
    setShowDescription: Function,
    setSelectedJob: Function
}
export const config = {
    columnDefs: (props: Props) => [
        {
            key: "0",
            title: "Company",
            dataIndex: 'companyName',
            fixed:'left',
            render: (company_name: string, record: Job) => {
                return (
                    <div>
                        <img src={record.company_logo} style={{ height: 20, width: 20, marginRight: 10 }} alt=""/>
                        {company_name}
                    </div>
                )
            },
            

        },
        {
            key: "1",
            title: "Job Title",
            dataIndex: 'designation',
        },
        {
            key: "2",
            title: "Description",
            dataIndex: 'description',
            render: (description: String, record: Job) => {
                return <a
                    onClick={() => {
                        props.setShowDescription(description);
                        props.setSelectedJob(record);
                    }}
                >
                    Click to view description
                </a>
            }

        },
        {
            key: "3",
            title: "Category",
            dataIndex: 'jobType',
        },
        {
            key: "4",
            title: "Salary",
            dataIndex: 'salary',
        },
        {
            key: "5",
            title: "Location",
            dataIndex: 'location',
        }
    ]
}