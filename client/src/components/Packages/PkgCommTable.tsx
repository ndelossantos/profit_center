import React, {useState} from "react";
import ProdModal from "../Packages/modals/prodmodal";
import axios from '../../utils/request'

interface MyComponentProps {
    myData: PkgCommonType[];
}

const PkgCommTable = ({ myData } : MyComponentProps) => {

    console.log(myData);
    const [ showModal, setShowModal ] = useState<boolean>(false)
    const [ commData, setCommData ] = useState<PkgCommonType>({} as PkgCommonType)
    const [ prodData, setProdData ] = useState<TprodTable[]>([])

    
    const openModalData = async (e:React.MouseEvent<HTMLButtonElement>, commD:PkgCommonType) => {
        e.preventDefault()

        try {
            const res = await axios.get(`/pkgproducts/${commD.pkg_comm_id}`);
            setShowModal(true)
            setCommData(commD)
            setProdData(res.data)
            // console.log(mainPkgData);
        } catch (ex) {
            console.log(ex);
        }
        
    }

    const clickFromModal = () => {
        console.log('btn from modal')
        setShowModal(false)
    }

    return (
        <div className="pkgcommtable">
            <ProdModal propCommData={commData} propProdData={prodData} showModal={showModal} onClick={clickFromModal}  />
            <div className="sm:-mx-6 lg:-mx-8">
            {/* <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg"> */}
                <table className="table w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                DRB
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                BP
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                CP
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Action
                            </th>
                        {/* <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th> */}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {
                            myData.map((val, index) => (
                                <tr key={index}>
                                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {val.pkg_comm_name}
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            { val.pkg_comm_drb }
                                        </div>
                                    </td>
                                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            { val.pkg_comm_bp }
                                        </div>
                                    </td>
                                    <td className="text-sm px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">
                                            { val.pkg_comm_cp }
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                        <button onClick={(e) => openModalData(e, val)} className="rounded bg-blue-600 text-white px-2 py-2 hover:bg-blue-900">
                                            Prod
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                
                
                
            {/* </div>
        </div> */}
    </div>

        </div>
    )
}

  
export default PkgCommTable
  