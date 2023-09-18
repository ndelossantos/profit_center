import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Chatbox from '../components/Chat/Chatbox'

type Tmembers = {
    socketid: string,
    username: string,
    room: string
}

const socket = io('http://localhost:5000')

const Chat = () => {

    const [ usernameVal, setUsernameVal ] = useState<string>('')
    const [ roomVal, setRoomVal ] = useState<string>('')
    const [ roomMembers, setRoomMembers ] = useState<Tmembers[]>([])

    const [ dcShowBtn, setDcShowBtn ] = useState<boolean>(false)

    const joinRoom = () => {

        const usserData = {
            username: usernameVal,
            room: roomVal
        }
        
        if(usernameVal !== "" && roomVal !== ""){
            socket.emit('join_room', usserData)
        }

        setDcShowBtn(true)
        
    }

    // if disconnected, need to refresh socket connection. joining room without refreshing will not work!
    const disconnectRoom = () => {
        socket.disconnect()
        setDcShowBtn(false)
    }

    const disconnectAll = () => {
        socket.emit('disconnect_all', true)
    }

    // socket.on('receivemsg', (data: any) => {
    //     console.log(data);
    // });

    

    useEffect(() => {
        
        socket.on('joined_members', (data: any) => {
            // console.log(data);
            setRoomMembers(data)
            console.log(roomMembers);
        });

    }, [socket])
    
    return (
        <div className="profitcenter">

            
            <div className="p-6">
                <h1 className="text-xl font-bold mb-4">Chat Yo.</h1>
                
                <div className="bg-white shadow-lg rounded-lg">

                    <div className="grid grid-cols-3 gap-10 px-10 py-5">
                        <div className="bg-white col-span-1 mt-5 rounded-lg">
                            <div className="col-span-1">
                               
                                <div className="block mt-3">
                                    <span className="text-gray-700">Username</span>
                                    {/* <span className="text-gray-400 text-xs ">Leave blank to search all</span>   */}
                                    <input onChange={(e) => setUsernameVal(e.target.value)} className="mt-1 w-10/12 block border border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                </div> 

                                <div className="block mt-3">
                                    <span className="text-gray-700">Room</span>
                                    {/* <span className="text-gray-400 text-xs ">Leave blank to search all</span>   */}
                                    <input onChange={(e) => setRoomVal(e.target.value)} className="mt-1 w-10/12 block border border-gray-300 px-4 py-2 rounded-md shadow-sm" />
                                </div>   
                                
                                <div className="flex">
                                    {/* <div className="block mt-5">
                                        <button onClick={joinRoom} className="rounded bg-blue-500 text-white py-1 px-2 hover:bg-blue-700">Join Room!</button>
                                    </div> */}
                                    {
                                        dcShowBtn === false ? 
                                            <div className="block mt-5">
                                                <button onClick={joinRoom} className="rounded bg-blue-500 text-white py-1 px-2 hover:bg-blue-700">Join Room!</button>
                                            </div>
                                        :     
                                        <div className="block mt-5">
                                            <button onClick={disconnectRoom} className="rounded bg-red-600 text-white py-1 px-2 hover:bg-red-800">Disconnect!</button>
                                        </div>
                                    }
                                    
                                </div>
                                
                                <br />
                                <div className="block mt-5">
                                    <button onClick={disconnectAll} className="rounded bg-red-600 text-white py-1 px-2 hover:bg-red-800">Reset Connections!</button>
                                </div>

                            </div>

                            {
                                roomMembers.map((val, i) => (
                                    <div key={i}>
                                        <p>{val.username}</p>
                                    </div>
                                ))
                            }
                              
                        </div>
                        <div className="col-span-2">
                            <Chatbox socketConf={socket} username={usernameVal} room={roomVal} />
                        </div>
                    </div>
                        
                </div>
            </div>
        </div>
    )
}

  
export default Chat
  