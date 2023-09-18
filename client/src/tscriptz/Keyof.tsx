import { useEffect, useState } from 'react'

interface User {
    name: string;
    age: number;
}

type dProps = {
    dataProps: User
}

const Keyof = ({ dataProps } : dProps) => {

    console.log(dataProps);

    // const user: User = { name: "John", age: 30 };

    const [ namer, setNamer ] = useState<string>('')

    const getValue = <T, K extends keyof T>(obj: T, key: K) => {
        // console.log(obj[key]);
        return obj[key];
        // setNamer(obj[key])
    }

    

    // console.log(getValue(dataProps, "name")); // "John"
    // console.log(getValue(user, "gender"));  // error
    
    useEffect(() => {
        setNamer(getValue(dataProps, "name"))
    }, [])

    return (
        <div className="profitcenter">
            <h4>Key Of</h4>
            <p>{namer}</p>
        </div>
    )
}

  
export default Keyof
  