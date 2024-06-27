const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log("\x1b[32m" + 'LOGGED IN AS ' + '<<' + client.user.username + ">>" + "\x1b[0m");
	},
};