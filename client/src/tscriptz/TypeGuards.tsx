type Entity = Person | Company

interface Person {
    type: string
    name: string
    age: number
}

interface Company {
    type: string
    name: string
    numberOfEmployees: number
}

type compoProps = {
    dataProps: Entity
}

function isPersonGood(entity: Entity) : entity is Person {
    return entity.type === 'person'
}

// const GoodEntityInfo: React.FC<{ entity: Entity }> = ({ entity }) => {
//     if(isPersonGood(entity)){
//         return (
//             <div className="bg-blue-500 p-4 font-bold">
//                 <h2>{entity.name}</h2>
//                 <p>Age: {entity.age}</p>
//             </div>
//         )
//     }else{
//         return (
//             <div className="bg-blue-500 p-4 font-bold">
//                 <h2>{entity.name}</h2>
//                 <p>Employees: {entity.numberOfEmployees}</p>
//             </div>
//         )
//     }
// }


const typeGuards = ({ dataProps } : compoProps) => {

    console.log(dataProps);

    if(isPersonGood(dataProps)){
        return (
            <div className="bg-blue-500 p-4 font-bold">
                <h2>{dataProps.name}</h2>
                <p>Age: {dataProps.age}</p>
            </div>
        )
    }else{
        return (
            <div className="bg-blue-500 p-4 font-bold">
                <h2>{dataProps.name}</h2>
                <p>Employees: {dataProps.numberOfEmployees}</p>
            </div>
        )
    }

    // return (
    //     <div className="profitcenter">
    //         <h4>Discriminated Unions (Shape)</h4>
    //     </div>
    // )
}

  
export default typeGuards
  