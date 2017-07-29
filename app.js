var io = require('socket.io-client');
var socket = io.connect('wss://streamer.cryptocompare.com', {reconnect: true});

socket.on('connect', function (socket) {
    console.log('Connected!');
    console.log(socket)
});
socket.emit('SubAdd',{subs: ['0~Poloniex~BTC~USD']})

socket.on("m", function(message){

	console.log(message);

});
