import { useParams } from "react-router-dom"

const Car = () => {

    const { id } = useParams()

    return (
        <div className="app">
            This is Car #{id}
        </div>
    )
}

  
export default Car
  