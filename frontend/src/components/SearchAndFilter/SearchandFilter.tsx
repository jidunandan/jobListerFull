import { SearchOutlined } from '@ant-design/icons';
import { Input, Button, Select } from 'antd';
import { Row, Col } from 'antd'
import { useState } from 'react';
import './searchAndFilter.css'

const { Option } = Select;
interface Props {
    companyList: Array<any>,
    handleSearch: Function,
    categories: Array<any>,
}
const SearchandFilter = (props: Props) => {
    const { companyList,
        handleSearch, categories
    } = props;
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [filterCompany, setFilterCompany] = useState(null)
    const [categoryFilter, setCategoryFilter] = useState<any>(null);

    return (
        <div>
            <div className="search-text">
                Search for jobs
            </div>
            <div className="form-container">
                <Row className='search-form-row'>
                    <Col span={24}>
                        <Input
                            id="searchBox"
                            allowClear
                            className="search-field"
                            type="text"
                            placeholder='Enter job title or description'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} />
                    </Col>
                </Row>
                <div className="filters-text">
                    Filters
                </div>
                <Row className='search-form-row'>
                    <Col span={12}>
                        <Select
                            id="filterCompany"
                            className="filter-company"
                            showSearch
                            placeholder="Filter by company"
                            allowClear
                            onChange={(value) => { setFilterCompany(value) }}
                            value={filterCompany} >
                            {companyList.map((item: any, index: any) => {
                                return <Option key={index} value={item}>{item}</Option>
                            })}
                        </Select>
                    </Col>

                    <Select

                        allowClear
                        className='filter-category'
                        placeholder="Filter by category"
                        onChange={(value) => { setCategoryFilter(value) }}
                        value={categoryFilter}
                        maxTagCount='responsive'
                    >
                        {categories.map((item: any, index: any) => {
                            return <Option key={index} value={item}>{item}</Option>
                        })}
                    </Select>
                </Row>
                <Row className='search-form-row'>
                    <Col span={24}>
                        <Button
                            className='search-button'
                            shape="round"
                            icon={<SearchOutlined />}
                            type="primary"
                            onClick={() => { handleSearch(searchTerm, filterCompany, categoryFilter) }}>
                            Search
                        </Button>
                    </Col>

                </Row>
            </div>

        </div>
    )
}

export default SearchandFilter;