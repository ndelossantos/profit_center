import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'


interface MyComponentProps {
    propCommData: PkgCommonType;
    propProdData: TprodTable[]
    showModal: boolean;
    onClick: () => void;
}


export default function ProductModal({ propCommData, propProdData, showModal, onClick }: MyComponentProps) {
    
    console.log('--modal compo--')
    console.log(propProdData);

    // const [ isOpen, setIsOpen ] = useState<boolean>(showModal);
   
    // const fetchPkgComm = async (commid:number) => {
    //     const mainres = await fetch(`http://localhost:8000/package_common/comm/${commid}`, {cache:'no-store'})
    //     const res = await mainres.json()
    //     setSingleProdData(res.resp)
    //     console.log(res.resp);
    // }

    // useEffect(() => {
    //     fetchPkgComm(propCommId)
    // }, [propCommId])

  
    const closeModal = () => {
        // setIsOpen(false)
    }         

    return (
        
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Information
                </Dialog.Title>
                <div className="mt-2">
                    <div className="mt-6 px-3 py-5">
                        <ul>
                            <li><p className="text-zinc-600">{propCommData.pkg_comm_remarks1}</p></li>
                            <li className="mt-3"><p className="text-zinc-600">{propCommData.pkg_comm_remarks2}</p></li>
                        </ul>
                    </div>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Edit</span>
                            </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                propProdData.map((val, index) => (
                                    <tr key={index}>
                                        <td><p className="ml-5">{val.pkg_prod_name}</p></td>
                                        <td className="text-center">{val.pkg_prod_qty}</td>
                                        <td className="text-center">{val.pkg_prod_total}</td>
                                    </tr>
                                ))
                            }
                            {/* {
                                propProdData.map((val) => (
                                    <tr key={val.}>
                                        <td><p className="ml-5">{val.pkg_prod_product}</p></td>
                                        <td className="text-center">{val.pkg_prod_qty}</td>
                                        <td className="text-center">{val.pkg_prod_total}</td>
                                    </tr>
                                ))
                            } */}
                        </tbody>
                    </table>
                    <div className="mt-10 px-10">
                        <div className="text-right">
                            {/* <p>SRP:&nbsp;{propCommData.pkg_comm_prod_srp}</p>
                            <p>DP:&nbsp;{propCommData.pkg_comm_prod_drp}</p> */}
                        </div>
                    </div>        
                </div>
                <div className="mt-4">
                  <button
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={onClick}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}