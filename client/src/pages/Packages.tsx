import React, { ChangeEvent, useEffect, useState } from "react"
import PackageTbl from '../components/Packages/PkgCommTable'
import { Link } from "react-router-dom"
import axios from '../utils/request'


const Packages = () => {

    const [ disabledSub, setDisabledSub ] = useState<boolean>(true)
    
    const [ mainPkgData, setMainPkgData ] = useState<TpkgMain[]>([])
    const [ subPkgData, setSubPkgData ] = useState<TpkgSub[]>([])
    const [ commPkgData, setCommPkgData ] = useState<PkgCommonType[]>([])
   
    const fetchPkgMain = async () => {
        const mainres = await axios.get('/packages/pkgmain')
        setMainPkgData(mainres.data)
    }

    const handleMainCat = async (e:ChangeEvent<HTMLSelectElement>) => {
        const val = e.target.value
    
        const subres = await axios.get(`/packages/pkgsub/${val}`)
        setSubPkgData(subres.data)
        
        // get 1st sub to auto populate the comm
        const firstSub = subres.data[0].pkg_sub_id
        populateCommon(firstSub)
        
        if(subres.data.length > 0){
            setDisabledSub(false)
        }else{
            setDisabledSub(true)
        }
    }

    const handleSubCat = async (e:ChangeEvent<HTMLSelectElement>) => {
        const subid = e.target.value
        populateCommon(subid)
    }

    const populateCommon = async (subId:string) => {
        // setDisabledComm(false)
        
        const commres = await axios.get(`/packages/pkgcomm/sub/${subId}`)
        console.log(commres);
        setCommPkgData(commres.data)
    }


    useEffect(() => {
        fetchPkgMain()
    }, [])


    const searchBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

    return (

        <div className="profitcenter">
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Packages Dashboard</h1>
                <div className="bg-white shadow-lg rounded-lg">
                    <div className="float-right mt-10">
                        <Link to="/packages/create" className="rounded bg-blue-500 hover:bg-blue-700 text-white px-2 py-2">Create</Link>
                    </div>
                    <br />
            
                    <div className="container mx-auto py-6">
                        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-20">
                        
                            <div className="xl:col-span-1 lg:col-span-2 sm:px-10 px-10">
                                <h4 className="text-1xl font-bold">Information</h4>
                                {/* MAIN */}
                                <label className="block mt-5">
                                    <span className="text-gray-700">Main Category</span>
                                    <select onChange={handleMainCat} className="mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm">
                                        <option value={0}>-- Select --</option>
                                        {
                                        mainPkgData.length > 0 &&
                                        mainPkgData.map((val) => (
                                            <option key={val.pkg_main_id} value={val.pkg_main_id}>{val.pkg_main_name}</option>
                                        ))
                                        }
                                    </select>
                                </label>

                                {/* SUB */}
                                <label className="block mt-3">
                                    <span className="text-gray-700">Sub Category</span>
                                    <select onChange={handleSubCat} disabled={disabledSub} className={`${disabledSub ? 'bg-gray-300' : ''} mt-1 block w-full border border-gray-300 px-4 py-2 rounded-md shadow-sm`}>
                                        {
                                        subPkgData.length > 0 &&
                                        subPkgData.map((val) => (
                                            <option key={val.pkg_sub_id} value={val.pkg_sub_id}>{val.pkg_sub_name}</option>
                                        ))
                                        }
                                    </select>
                                </label>

                                <div className="mt-10">
                                    <button onClick={searchBtn} className="bg-blue-500 text-white rounded py-2 px-2">Search</button>
                                </div>
                            </div>

                            <div className="xl:col-span-3 lg:col-span-2 sm:px-10 px-2 mt-10">
                                {/* <PackageTbl /> */}
                                <PackageTbl myData={commPkgData} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

  
export default Packages
  