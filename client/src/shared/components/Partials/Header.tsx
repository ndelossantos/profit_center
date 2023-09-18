import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div>
            <nav className="bg-blue-500">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <h5 className="text-white">EC INFOZ</h5>
                        </div>
                        <div className="flex items-center justify-between md:hidden">
                            <button type="button" className="text-gray-500 hover:text-white focus:outline-none focus:text-white" aria-label="Toggle menu">
                                BTN
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {/* Navigation links */}
                                <Link to="/">
                                    <span className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</span>
                                </Link>
                                <Link to="/profitcenter">
                                    <span className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Profit Center</span>
                                </Link>
                                <Link to="/packages">
                                    <span className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Packages</span>
                                </Link>
                                <Link to="/chat">
                                    <span className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Chat</span>
                                </Link>
                                <Link to="/tspractice">
                                    <span className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">TS practice</span>
                                </Link>
                                <Link to="/openit">
                                    <span className="text-gray-100 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Open IT</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

  
export default Header
  