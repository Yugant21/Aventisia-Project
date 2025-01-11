import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table';
import dots from '../assets/Outline-dots-vertical.png';

const SortableHeaderCell = ({ column }) => {
    const { getHeaderProps, getSortByToggleProps, isSorted, isSortedDesc } = column;

    return (
        <th
            {...getHeaderProps(getSortByToggleProps())}
            className="px-4 py-3 text-gray-600 font-medium cursor-pointer whitespace-nowrap"
        >
            <div className="flex items-center">
                <span>{column.render('Header')}</span>
                {isSorted ? (
                    isSortedDesc ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 ml-1 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 ml-1 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    )
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 ml-1 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                )}
            </div>
        </th>
    );
};

const Table = ({ data, columns }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        previousPage,
        nextPage,
        gotoPage,
        pageCount,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 10 },
        },
        useSortBy,
        usePagination
    );

    return (
        <>
            <table {...getTableProps()} className="w-full text-left table-auto border-collapse border border-gray-200">
                <thead>
                    {headerGroups.map((headerGroup, groupIndex) => (
                        <tr
                            key={groupIndex}
                            {...headerGroup.getHeaderGroupProps()}
                            className="bg-gray-50"
                        >
                            {headerGroup.headers.map((column) => (
                                <SortableHeaderCell key={column.id} column={column} />
                            ))}
                            <th className="px-4 py-3 text-gray-600 font-medium whitespace-nowrap">Action</th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        const { key: rowKey, ...rowProps } = row.getRowProps();
                        return (
                            <tr key={rowKey} {...rowProps} className="border-t border-gray-200 hover:bg-gray-50">
                                {row.cells.map((cell) => {
                                    const { key: cellKey, ...cellProps } = cell.getCellProps();
                                    return (
                                        <td key={cellKey} {...cellProps} className="px-4 py-3">
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                                <td className="px-4 py-3 text-gray-600 cursor-pointer whitespace-nowrap">
                                    <img src={dots} alt="Action Menu" />
                                </td>
                            </tr>
                        );
                    })}
                    {page.length === 0 && (
                        <tr>
                            <td
                                colSpan={columns.length + 1}
                                className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500"
                            >
                                No data available
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="flex justify-between items-center p-4 mt-4">
                <p className="text-sm text-gray-600">
                    Showing {pageIndex * 10 + 1} to {Math.min((pageIndex + 1) * 10, data.length)} of{' '}
                    {data.length} results
                </p>
                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    > &lt;
                    </button>
                    {[...Array(pageCount).keys()].slice(0, 5).map((pageNumber) => (
                        <button
                            key={pageNumber}
                            onClick={() => gotoPage(pageNumber)}
                            className={`px-3 py-1 rounded-full ${pageIndex === pageNumber
                                ? 'bg-blue-600 text-white'
                                : 'text-blue-600 hover:bg-gray-100'
                                }`}
                        >
                            {pageNumber + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className="px-2.5 py-1 rounded-full bg-blue-100 text-blue-600 font-bold text-xl hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >&gt;
                    </button>
                </div>
            </div>
        </>
    );
};

export default Table;