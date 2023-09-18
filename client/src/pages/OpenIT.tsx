import { useEffect, useState } from "react"
import axios from '../utils/request'

type Tcountries = {
    name: { common: string }
    population: number
    region: string
    flag: string
}

const OpenIT = () => {

    const [ countries, setCountries ] = useState<Tcountries[]>([])
    const [ selCountry, setSelCountry ] = useState('')
    const [ selRegion, setSelRegion ] = useState('')
    const [ selPopu, setSelPopu ] = useState('')
    const [ selCapital, setSelCapital ] = useState('')

    const loadcountries = async () => {
        try {
            const res = await axios.get('https://restcountries.com/v3.1/all');
            console.log(res);
            setCountries(res.data.slice(0,10))
        } catch (err) {
            console.log(err)
        }
        console.log('set countries:');
        console.log(countries);
    }

    const getCountryInfo = (e:React.MouseEvent<HTMLButtonElement>, data) => {
        e.preventDefault()
        console.log(data);
        setSelCountry(data.name.common)
        setSelRegion(data.region)
        setSelPopu(data.population)
        setSelCapital(data.capital)
    }

    useEffect(() => {
        loadcountries()
    },[]) 

    return (
        <div>
        <div className="openit">
            <table className="table w-full">
                <thead className="bg-gray-50">
                    <th>Name</th>
                    <th>Flag</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        countries.length > 0 &&
                        countries.map((val, key) => (
                            <tr key={key}>
                                <td className="text-center">
                                    {val.name.common}
                                    
                                </td>
                                <td className="text-center">
                                    {val.flag}
                                </td>
                                {/* <td className="text-center">
                                    {val.region}
                                </td> */}
                                {/* <td className="text-center">
                                    {val.population}
                                </td> */}
                                <td className="text-center">
                                    <button onClick={(e) => getCountryInfo(e, val)} className="bg-blue-500 px-2 py-2 rounded-lg hover:bg-slate-700">
                                        <span className="text-white">View</span>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <br />
        <br />
        <br />
        
        <div>
            <table className="table w-full">
                <thead className="bg-gray-50">
                    <th>Selected country</th>
                    <th>Region</th>
                    <th>Population</th>
                    <th>Capital</th>
                </thead>
                <tbody>
                    <td className="text-center">{selCountry}</td>
                    <td className="text-center">{selRegion}</td>
                    <td className="text-center">{selPopu}</td>
                    <td className="text-center">{selCapital}</td>
                </tbody>
            </table>
            {/* Country: {selCountry}<br />
            Region: {selRegion}<br />
            Population: {selPopu}<br />
            Capital: {selCapital}<br /> */}
        </div>
        
    </div>
    )
}

  
export default OpenIT
  