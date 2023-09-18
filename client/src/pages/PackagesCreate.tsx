import React, { ChangeEvent, useEffect, useState } from "react"
// import { useOutletContext } from "react-router-dom"
import axios from '../utils/request'

const PackagesCreate = () => {

    // const propColor : myColor = useOutletContext()
    // const [bgColor, setBgColor] = useState<string>(propColor.bgcolor)
    const [ disabledSub, setDisabledSub ] = useState<boolean>(true)
    const [ mainPkgData, setMainPkgData ] = useState<TpkgMain[]>([])
    const [ subPkgData, setSubPkgData ] = useState<TpkgSub[]>([])
    
    const fetchPkgMain = async () => {

        try {
            const res = await axios.get("/packages/pkgmain");
            console.log(res);        
            setMainPkgData(res.data)
            // console.log(mainPkgData);
        } catch (ex) {
            console.log(ex);
        }
    }

    const handleMainCat = async (e:ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value
        
        const subres = await axios.get(`/packages/pkgsub/${val}`)
        setSubPkgData(subres.data)
        // console.log(subres);
        if(subres.data.length > 0){
            setDisabledSub(false)
        }else{
            setDisabledSub(true)
        }
    }

    type TinputArr = {
        dom: JSX.Element | null
    }

    const [ inputCount, setInputCount ] = useState<number>(1)
    const [ inputArr, setInputArr ] = useState<TinputArr[]>([])

    const delInput = (e:React.MouseEvent<HTMLButtonElement>, id:string) => {
        e.preventDefault()
       
        const strid: string = 'inp_'+id
        const elementToDelete = document.getElementById(strid)
       
        if (elementToDelete) {
            elementToDelete.remove();
        }
    }
    
    const openModalMain = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log('modal main')
        
    }

    const addProducts = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setInputCount(prevCount => prevCount+1)

        const inp = {
            dom: <div id={`inp_${inputCount}`} className="flex mt-2">
                    <input type="text" className="w-10/12 mt-1  block border border-gray-300 px-4 py-2 rounded-md shadow-sm" placeholder="Product name" />
                    <input type="number" className="w-1/4 mt-1 ml-2 block border border-gray-300 px-4 py-2 rounded-md shadow-sm" placeholder="Qty" />
                    <button className="rounded ml-2 text-white bg-blue-500 hover:bg-blue-700 px-3 btn-sm" onClick={(e) => {delInput(e, inputCount.toString())}}>
                        del
                    </button>
                </div>
        }
        setInputArr(prevInputs => [...prevInputs, inp])
    }

    useEffect(() => {
        fetchPkgMain()
    },[])

  
    return (
        <div className="home">
            <div className="container mx-auto">
                <div className="float-right mr-10 mt-10">
                    <button onClick={openModalMain} className="text-white border-gray-400 bg-blue-500 rounded hover:bg-blue-700 px-1 py-1">
                        + Main
                    </button>
                    <button className="ml-3  text-white border-gray-400 bg-blue-500 rounded hover:bg-blue-700 px-1 py-1">
                        + Sub
                    </button>
                </div>
                <br />
                <br />
                <div className="mt-5 px-2 py-2">
                    {/* PACKAGE */}
                    <h4 className="text-2xl font-bold text-center">Create Package</h4>
                    
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-20 py-10">
                        <div className="bg-white col-span-1 mt-5 rounded-lg">
                            <div className="px-20 py-10">
                                <label className="block">
                                    <div className="">
                                        <span className="text-gray-700">Main</span>
                                    </div>

                                    <select onChange={handleMainCat} className="mt-1 w-full block border border-gray-300 px-4 py-2 rounded-md shadow-sm">
                                        <option value={0}>-- Select --</option>
                                        {
                                            mainPkgData.length > 0 &&
                                            mainPkgData.map((val) => (
                                                <option key={val.pkg_main_id} value={val.pkg_main_id}>{val.pkg_main_name}</option>
                                            ))
                                        }
                                    </select>
                                </label>

                                <label className="block mt-5">
                                    <span className="text-gray-700">Sub Name</span>
                                    <select disabled={disabledSub} className={`${disabledSub ? 'bg-gray-300' : ''} w-full mt-1 block border border-gray-300 px-4 py-2 rounded-md shadow-sm`}>
                                    {
                                        subPkgData.length > 0 &&
                                        subPkgData.map((val) => (
                                        <option key={val.pkg_sub_id} value={val.pkg_sub_id}>{val.pkg_sub_name}</option>
                                        ))
                                    }
                                    </select>
                                </label>

                                <label className="block mt-4">
                                    <span className="text-gray-700">Package Name</span>
                                    <input type="text" className="mt-1 block border w-full border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                </label>

                                <label className="block mt-4">
                                    <span className="text-gray-700">Title</span>
                                    <input type="text" className="mt-1 block border w-full border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                </label>

                                <label className="block mt-4">
                                    <span className="text-gray-700">Remarks 1</span>
                                    <textarea rows={3} className="mt-1 block border w-full border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                </label>

                                <label className="block mt-4">
                                    <span className="text-gray-700">Remarks 2</span>
                                    <textarea rows={3} className="mt-1 block border w-full border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                </label>
                            </div>
                        </div>    
                        <div className="col-span-1 mt-5 bg-white rounded-lg">
                            <div className="px-10 py-10">
                                <div className="grid grid-cols-3 gap-10">
                                    <div className="col-span-1">
                                        <label className="block mt-4">
                                            <span className="text-gray-700">Binary Pts</span>
                                            <input type="text" className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                        </label>
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block mt-4">
                                            <span className="text-gray-700">Comm Pts</span>
                                            <input type="text" className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                        </label>
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block mt-4">
                                            <span className="text-gray-700">Dir Referral</span>
                                            <input type="text" className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                        </label>
                                    </div>
                                </div>
                                

                                

                                
                                <h4 className="text-1xl font-bold mt-5">Package Includes</h4>    
                                <label className="block mt-3">

                                    <span className="text-gray-700">Products</span>
                                    <div className="float-right">
                                        <button onClick={addProducts} className="rounded bg-blue-500 text-white py-1 px-1 hover:bg-blue-700">+ Add Product</button>
                                    </div>
                                    {/* <input type="text" className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm" /> */}
                                    <div className="grid grid-cols-1 mt-10">
                                        <div className="col-span-1">
                                        {
                                            inputArr.map((val, index) => (
                                                <div key={index}>
                                                    {val.dom}
                                                </div>
                                            ))
                                        }
                                        </div>
                                    </div>
                                </label>

                            </div>
                        </div>    
                    </div>            
                </div>


                {/* <div className="py-12">
                    <h2 className="text-2xl font-bold">Information</h2>
                    <div className="mt-8 max-w-md">
                        <div className="grid grid-cols-1 gap-6">
                        <label className="block">
                            <span className="text-gray-700">Search Keyword</span>
                            <input type="text" onChange={(e) => handleInput(e)} className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                        </label>
                        
                        
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

  
export default PackagesCreate
//   