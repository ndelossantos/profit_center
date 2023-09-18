const Loading = () => {

    return (
        <div className="loading-screen">
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
                <div className="p-5 rounded-lg">
                    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
                    <p className="mt-4 text-gray-500">Wait lang sir!!!...</p>
                </div>
            </div>
        </div>
    )
}

  
export default Loading
  