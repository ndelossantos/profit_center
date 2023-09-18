// BOL *** Functional read only approach (Advanced type)

// add export (export type) to import to all compo, or add to .d.types
type ReadonlyProps<T> = {
    readonly [P in keyof T]: T[P]
}

interface RoProps {
    name: string,
    age: number
}

interface MyComponentProps {
    dataProps: RoProps;
}

type ReadOnlyComponents = ReadonlyProps<MyComponentProps>
// EOL ***

// BASIC APPROACH
// interface RoProps {
//     readonly name: string,
//     readonly age: number
// }

// interface MyComponentProps {
//     readonly dataProps: RoProps;
// }

const ReadOnly = ({ dataProps } : ReadOnlyComponents) => {
   
    return (
        <div className="profitcenter">
            <h4>READ-ONLY</h4>
            {dataProps.name} is {dataProps.age} years old.
        </div>
    )
}

  
export default ReadOnly
  