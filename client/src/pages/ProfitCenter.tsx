import React, { useState } from 'react'
import DatepickerFrom from "tailwind-datepicker-react"
import DatepickerTo from "tailwind-datepicker-react"
import axios from '../utils/request'
import 'react-datepicker/dist/react-datepicker.css';
import Loading from '../shared/components/Loading'
import HeadOfficeTbl from '../components/ProfitCenter/HeadOfficeTbl';
import BcoTbl from '../components/ProfitCenter/BcoTbl';
import BranchesTbl from '../components/ProfitCenter/BranchesTbl';

const ProfitCenter = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const options = {
        
        autoHide: true,
        maxDate: new Date(),
        minDate: new Date("2008-01-01"),
        theme: {
            background: "bg-white",
            todayBtn: false,
            clearBtn: false,
            disabledText: "bg-gray-100",
        },
        icons: {
            // () => ReactElement | JSX.Element
            prev: () => <span>←</span>,
            next: () => <span>→</span>,
        },
        defaultDate: new Date("2022-12-28"),
        language: "en",
    }

    const [ fromVal, setFromVal ] = useState<string>("2022-12-28")
    const [ toVal, setToVal ] = useState<string>("2022-12-29")

    const [fromShow, setFromShow] = useState<boolean>(false)
    const [toShow, setToShow] = useState<boolean>(false)

    const [ hoData, sethoData ] = useState<TpcHeadOffice[]>([])
    const [ bcoData, setBcoData ] = useState<TpcBCO[]>([])
    const [ branchesData, setBranchesData ] = useState<TpcBranches[]>([])

    const [ searchValue, setSearchValue ] = useState<string>('taberu-san')
	
    const handleFromVal = (selectedDate: Date) => {
		const formatD = selectedDate.toISOString().split('T')[0]
        setFromVal(formatD)

        // console.log(formatD);
	}

    const handleToVal = (selectedDate: Date) => {
		const formatD = selectedDate.toISOString().split('T')[0]
        setToVal(formatD)
        // console.log(formatD);
	}

	const fromHandleClose = (state: boolean) => {
		setFromShow(state)
	}

    const toHandleClose = (state: boolean) => {
		setToShow(state)
	}

    const [ categVal, setCategVal ] = useState<string>('headoffice')
    const [ showHeadOfficeCompo, setShowHeadOfficeCompo ] = useState<boolean>(false)
    const [ showBCOCompo, setShowBCOCompo ] = useState<boolean>(false)
    const [ showBranchesCompo, setShowBranchesCompo ] = useState<boolean>(false)
    
    const profitCenter = [
        {
            value: 'headoffice',
            label: 'Head Office (3rd flr)'    
        },
        {
            value: 'bco',
            label: 'BCO'    
        },
        {
            value: 'branches',
            label: 'Office Branches'    
        },
        {
            value: 'ecshop',
            label: 'EC Shop'    
        },
    ]
    
    const fetchHeadOffice = async () => {

        setShowHeadOfficeCompo(true)
        setShowBCOCompo(false)
        setShowBranchesCompo(false)
    
        try {
            const res = await axios.get(`/profitcenter/headoffice/${fromVal}/${toVal}/${searchValue}`);
            sethoData(res.data)
            if(res.data.length > 0){
                setLoading(false);
            }

        } catch (err) {
            console.log(err)
        }
    }

    const fetchBCO = async () => {

        setShowHeadOfficeCompo(false)
        setShowBCOCompo(true)
        setShowBranchesCompo(false)
    
        try {
            const res = await axios.get(`/profitcenter/bco/${fromVal}/${toVal}/${searchValue}`);
            setBcoData(res.data)
            if(res.data.length > 0){
                setLoading(false);
            }

        } catch (err) {
            console.log(err)
        }
    }


    const fetchBranches = async () => {

        setShowHeadOfficeCompo(false)
        setShowBCOCompo(false)
        setShowBranchesCompo(true)
    
        try {
            const res = await axios.get(`/profitcenter/branches/${fromVal}/${toVal}`);
            setBranchesData(res.data)
            if(res.data.length > 0){
                setLoading(false);
            }

        } catch (err) {
            console.log(err)
        }
    }

    const searchData = async (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        console.log(searchValue.length);
        if(searchValue !== 'taberu-san' && searchValue.length <= 2){
            alert('Search keyword should be more than 2 letters!')
            return false
        }

        console.log('Fetching data from '+categVal+', dates between '+fromVal+' & '+toVal)+' w/ search value of: "'+searchValue+'"';
        setLoading(true);

        switch(categVal) {
            case 'headoffice':
                fetchHeadOffice()
                break;
            case 'bco':
                fetchBCO()
                break;    
            case 'branches':
                fetchBranches()
                break;
        }
    }

    return (
        <div className="profitcenter">

            
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Profit Center</h1>
                
                {loading && <Loading />}
                    
                <div className="bg-white shadow-lg rounded-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-10 py-5">
                        <div className="bg-white col-span-1 mt-5 rounded-lg">
                            <div className="">
                                <label className="block">
                                    <div className="">
                                        <span className="text-gray-700">Select Category</span>
                                    </div>

                                    <select onChange={(e) => setCategVal(e.target.value)} className="mt-1 w-10/12 block border border-gray-300 px-4 py-2 rounded-md shadow-sm">
                                        {
                                            profitCenter.map((val, index) => (
                                                <option key={index} value={val.value}>{val.label}</option>
                                            ))
                                        }
                                    </select>
                                </label>



                                <div className="block mt-10 w-10/12">
                                    <span className="text-gray-700">From Date</span>  
                                    <DatepickerFrom options={options} onChange={handleFromVal} show={fromShow} setShow={fromHandleClose} />
                                </div>      

                                <div className="block mt-3 w-10/12">
                                    <span className="text-gray-700">To Date</span>  
                                    <DatepickerTo options={options} onChange={handleToVal} show={toShow} setShow={toHandleClose} />
                                </div>   

                                <div className="block mt-3">
                                    <span className="text-gray-700">Search Product/BCO</span>
                                    <br />
                                    <span className="text-gray-400 text-xs ">Leave blank to search all</span>  
                                    <input onChange={(e) => setSearchValue(e.target.value)} className="mt-1 w-10/12 block border border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                </div>   
                                
                                
                                <label className="block mt-5">
                                    <button onClick={(e) => searchData(e)} className="rounded bg-blue-500 text-white py-1 px-2 hover:bg-blue-700">Search</button>
                                </label>

                            </div>
                        </div>  
                        <div className="bg-white col-span-2 mt-5 rounded-lg">
                            <div className="">
                               { showHeadOfficeCompo && <HeadOfficeTbl myData={hoData} /> }
                               { showBCOCompo && <BcoTbl myData={bcoData} /> }
                               { showBranchesCompo && <BranchesTbl myData={branchesData} /> }
                            </div>
                        </div>  
                    </div>
                </div>
           
            </div>
        </div>
    )
}

  
export default ProfitCenter
  