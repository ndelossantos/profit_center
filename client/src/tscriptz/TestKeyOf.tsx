import { useEffect, useState } from 'react'

interface ProbUser {
    name: string
    lname: string
    age: number
    siblings: Array<{name:string, children:number}>
}

type typedData = {
    dataProps: ProbUser
}

const TestKeyof = ({ dataProps } : typedData) => {

    console.log(dataProps);

    // const user: User = { name: "John", age: 30 };

    // const [ namer, setNamer ] = useState<string>('')

    // const getValue = <T, K extends keyof T>(obj: T, key: K) => {
        // console.log(obj[key]);
        // return obj[key];
        // setNamer(obj[key])
    // }



    return (
        <div className="profitcenter">
            <h4>test Key Of</h4>
            {/* <p>{namer}</p> */}
        </div>
    )
}

  
export default TestKeyof
  