/* jshint node: true */

var PeerServer = require('peer').PeerServer;

new PeerServer({
	port: 9000,
	host: '0.0.0.0',
	debug: 3
});

