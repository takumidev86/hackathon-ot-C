'use strict';

module.exports = function (server) {

    const socketIo = require('socket.io')(server, { wsEngine: 'ws' });
    const io = socketIo.listen(server);

    io.sockets.on('connection', function (socket) {
        // 投稿モジュールの呼出
        require('./publish')(socket, io);

        // 入室モジュールの呼出
        require('./enter')(socket);

        // 退室モジュールの呼出
        require('./exit')(socket);

        require('./memo')(socket);

        require('./sign_up')(socket,io);

        require('./sign_in')(socket, io);

        require('./make_db')(socket, io);
    });
};
