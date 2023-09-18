import { useEffect, useState, useRef } from "react"
import { Socket } from "socket.io-client"

interface SocketProps {
    socketConf: Socket
    username: string
    room: string
}

type TmessageData = {
    room: string,
    author: string,
    message: string,
    time: string
}



const Chatbox = ({ socketConf, username, room }: SocketProps) => {

    const [ currentMessage, setCurrentMessage ] = useState<string>('')
    const [ messageList, setmessageList ] = useState<TmessageData[]>([])
   
    const handleKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            sendMessage()
        }
    }

    const sendMessage = async () => {
        
        if(currentMessage !== ''){
            const timeval = new Date(Date.now()).getHours()+':'+new Date(Date.now()).getMinutes()
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: timeval
            }

            await socketConf.emit('send_message', messageData)
            setmessageList([...messageList, messageData])

            setCurrentMessage('')
        }
    }

    const chatContainerRef = useRef(null);

    const scrollToBottom = () => {
        console.log('applied scroll?');
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        socketConf.on('receive_message', (data) => {
            setmessageList([...messageList, data])
        })

        scrollToBottom()

        return () => {
            // Clean up function
            socketConf.disconnect();
          };

    }, [socketConf, messageList])

    return (
        <div className="chatbox">
            <div className="room text-center">
                <span className="text-xs text-gray-500">Room:&nbsp;&nbsp;</span>
                <span className="">{room}</span>
            </div>
            {/* <div className="block mt-3">
                <span className="text-gray-700">Enter Message:</span>
                <input onChange={(e) => setCurrentMessage(e.target.value)} onKeyDown={handleKeyDown} className="mt-1 w-10/12 block border border-gray-300 px-4 py-2 rounded-md shadow-sm" />
            </div>    */}

            {/* <div className="block mt-5">
                <button onClick={sendMessage} className="rounded bg-blue-500 text-white py-1 px-2 hover:bg-blue-700">Send Message</button>
            </div> */}
            <div className="flex flex-col max-h-96">
                <div className="flex-1 bg-gray-100 p-4 flex flex-col-reverse">
                    
                    <div ref={chatContainerRef} className="flex flex-col space-y-2 h-64 overflow-y-scroll scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                    {
                        messageList.length > 0 ?
                            messageList.map((val, i) => (
                                <div key={i} className={`flex ${val.author !== username ? 'tems-start' : 'items-end justify-end'}`}>
                                    
                                    <div className="grid grid-cols-1">
                                        <div className="col-span-1">
                                            <span className="text-xs">{val.author}</span>
                                        </div>
                                        <div className={`col-span-1 rounded-md p-2 ${val.author !== username ? 'bg-white' : 'bg-blue-500'}`}>
                                            <span className={`${val.author !== username ? 'text-gray-700' : 'text-white'}`}>{val.message}</span>
                                        </div>
                                        <div className="col-span-1">
                                            <span className="text-xs">{val.time}</span>
                                        </div>
                                    </div>

                                </div>
                            ))
                        : ''    
                    }
                    </div>
                </div>
                <div className="p-4 border-t bg-gray-200">
                    {/* Input box */}
                    <input
                    type="text"
                    className="border rounded-md px-4 py-2 w-full"
                    placeholder="Type a message..."
                    onChange={(e) => setCurrentMessage(e.target.value)} onKeyDown={handleKeyDown}
                    value={currentMessage}
                    />
                </div>
            </div>

        </div>
    )
}

  
export default Chatbox
  