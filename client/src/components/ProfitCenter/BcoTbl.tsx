import {useState, useEffect} from "react";

interface MyComponentProps {
    myData: TpcBCO[];
}

const BcoTbl = ({ myData } : MyComponentProps) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10

    // Calculate the index range for the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = myData.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(myData.length / itemsPerPage);

    // Handle page change
    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(
            <button
            key={i}
            className={`px-2 py-1 mx-1 text-sm font-medium rounded-md ${
                i === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => handlePageChange(i)}
            >
            {i}
            </button>
        );
        }

        return pageNumbers;
    };

    useEffect(() => {
        console.log('');
    })

    return (
        <div className="pkgcommtable">
            {/* <ProdModal propCommData={commData} propProdData={prodData} showModal={showModal} onClick={clickFromModal}  /> */}
            <div className="sm:-mx-6 lg:-mx-8">
                <table className="table w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                MID
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Full Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product Code
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total Price
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            currentItems.map((val, index) => (
                                <tr key={index}>
                                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            { val.mid }
                                        </div>
                                    </td>
                                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            { val.fullname }
                                        </div>
                                    </td>
                                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            { val.prodcode }
                                        </div>
                                    </td>
                                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            { val.prodname }
                                        </div>
                                    </td>
                                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            { val.totalprice.toLocaleString() }
                                        </div>
                                    </td>
                                   
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <button
                        className="px-4 py-2 mr-2 text-sm font-medium rounded-md bg-blue-500 text-white"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        >
                        Previous
                    </button>

                    {renderPageNumbers()}

                    <button
                        className="px-4 py-2 ml-2 text-sm font-medium rounded-md bg-blue-500 text-white"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        >
                        Next
                    </button>
                </div>
            </div>

        </div>
    )
}

  
export default BcoTbl
  