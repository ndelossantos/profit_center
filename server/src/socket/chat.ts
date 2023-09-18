const socketio = require('socket.io');
// const socketModel = require('../models/socketModel');

function socketIOchat(server: any) {
    // const io = socketio(server);

    const io = require('socket.io')(server, {
        cors: {
          origin: '*',
          methods: ['GET', 'POST'],
        }
    });

    type iConnUsers = {
        socketid: string, 
        username: string, 
        room: string
    }

    type iConnUsersJoinedData = {
        socketid: string, 
        username: string, 
        room: string
    }

    const connMemData = [{}]

    const connectedUsers: { [index: string] : iConnUsers } = {}

    // const connectedUsers: iConnUsers = { socket_id: '', username: '' }
    // const connectedUsers: iConnUsers = {}
    
    io.on('connection', (socket: any) => {
        // console.log('a fkng user connected');
        // handle incoming events
        
        socket.on('join_room', (data: any) => {
            console.log('User: '+data.username+' has joined the room');
            // connectedUsers.push(socket.id)
            connectedUsers[socket.id] = {
                socketid: socket.id,
                username: data.username,
                room: data.room
            }

            let commMem = {
                socketid: socket.id,
                username: data.username,
                room: data.room
            }

            connMemData.push(commMem)

            socket.join(data.room)
            // console.log(connectedUsers);

            socket.to(data.room).emit('joined_members', connMemData)
            // console.log(`User with ID: ${socket.id} joined room: ${data}`);
        })

        socket.on('send_message', (data:any) => {
            socket.to(data.room).emit('receive_message', data)
        })

        socket.on('socket_register', (data: any) => {  
            // delete existing socket and insert both socket table and gcashes, 
            // let regNewSocketData = {
            //     'socketid': socket.id,
            //     'gcashno': data.gcashno
            // }
            
            // connectedUsers[socket.id].gcashno = data.gcashno

     
        });

        // socket.on('disconnect_all', (data: string) => {
        //     const connectedSockets = Object.values(io.sockets.connected)
        //     console.log(connectedSockets);
        // });

        // handle disconnection
        socket.on('disconnect', (data: any) => {
            // console.log(data);
            console.log('user disconnected');
            delete connectedUsers[socket.id];
            // console.log(connectedUsers[socket.id])
        });
    });

    return io;
}

// async function validateRegGcashes(data){
    // const result = await socketModel.validateRegGcashes(data);
    // let sts = result.rowsAffected ? true : false
    // return sts
// }

module.exports = socketIOchat;
