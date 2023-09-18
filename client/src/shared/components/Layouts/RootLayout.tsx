import Header from '../Partials/Header'
// import Footer from '../Partials/Footer'
import { Outlet } from 'react-router-dom'


// const RootLayout = ({ children, } : { children: React.ReactNode}) => {
const RootLayout = () => {

  return (
    <div className="root-main bg-gray-100">
        <Header />
        <div className="container mx-auto py-10">
            <Outlet context={{ bgcolor: 'blue' }} />
        </div>
        {/* <Footer /> */}
    </div>
  )
}

export default RootLayout
 