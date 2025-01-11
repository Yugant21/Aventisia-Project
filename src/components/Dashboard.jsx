import React, { useState, useMemo } from 'react';
import search from '../assets/Search.png';
import filter from '../assets/Filter.png';
import calender from '../assets/Group.png';
import Table from './Table';
import Form from './Form.jsx'; 

const dummyData = [];

for (let i = 1; i <= 30; i++) {
    const modelName = `Model ${i}`;
    const modelType = ['Extraction', 'Classification', 'Regression', 'Clustering'][i % 4];
    const description = `Description for Model ${i}`;
    const createdOn = '29/02/2024';
    const lastTrainedOn = i % 2 === 0 ? '29/02/2024' : '01/03/2024';
    const status = 'Active';
    const id = i;
    dummyData.push({
        id,
        modelName,
        modelType,
        description,
        createdOn,
        lastTrainedOn,
        status,
    });
}

const Dashboard = () => {
    const [data, setData] = useState(dummyData);
    const [searchQuery, setSearchQuery] = useState('');

    const columns = useMemo(
        () => [
            {
                Header: 'Model Name',
                accessor: 'modelName',
            },
            {
                Header: 'Model Type',
                accessor: 'modelType',
            },
            {
                Header: 'Description',
                accessor: 'description',
            },
            {
                Header: 'Created On',
                accessor: 'createdOn',
            },
            {
                Header: 'Last Trained On',
                accessor: 'lastTrainedOn',
            },
            {
                Header: 'Status',
                accessor: 'status',
                Cell: ({ value }) => (
                    <span className='px-6 py-2 rounded-md text-sm bg-green-100 text-green-800'>{value}</span>
                ),
            },
        ],
        []
    );


    const filteredData = useMemo(() => {
        return data.filter(item =>
            item.modelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.modelType.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [data, searchQuery]);


    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="col-span-9 p-6 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Model Library</h2>
                    <button onClick={() => setIsModalOpen(true)} className="bg-[#4F46E5] text-white px-4 py-2 rounded-lg hover:bg-blue-600">+ Create New Model</button>
                </div>

                <Form isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

                <div className="flex items-center justify-between bg-white">
                    <div className="relative w-[60%]">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <img className="h-5 w-5 text-gray-400" src={search} alt="Search" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search by Name, ID, Description"
                            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                            value={searchQuery}
                            onChange={e => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
                            <img src={filter} alt="Filter" className="mr-2" />
                            Filters
                        </button>
                        <button className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200">
                            <img src={calender} alt="Calender" className="mr-2" />
                            April 11 - April 24
                        </button>
                    </div>
                </div>

                <div className="mt-4">
                    <Table data={filteredData} columns={columns} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;