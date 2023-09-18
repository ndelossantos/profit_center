import RootLayout from "./shared/components/Layouts/RootLayout"
import { Routes, Route } from 'react-router-dom'  
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import CarsPage from "./pages/Cars"
import CarPage from "./pages/Car" 
import NotFoundPage from "./pages/NotFound"
import ProfitCenter from "./pages/ProfitCenter"
import Packages from "./pages/Packages"
import PackagesCreate from "./pages/PackagesCreate"
import Chat from "./pages/Chat"
import Tspractice from "./pages/Tspractice"
import OpenIT from "./pages/OpenIT"

const App = () => {

  return (
    <div className="App">
        <Routes>
            <Route element={<RootLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/cars" element={<CarsPage />} />
                <Route path="/cars/:id" element={<CarPage />} />
                <Route path="/profitcenter" element={<ProfitCenter />} />
                <Route path="/packages" element={<Packages />} />
                <Route path="/packages/create" element={<PackagesCreate />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/tspractice" element={<Tspractice />} />
                <Route path="/openit" element={<OpenIT />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </div>
  )
}

export default App
 