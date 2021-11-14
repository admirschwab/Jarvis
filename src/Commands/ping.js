/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "ping",
	description: "Zeigt den Ping des Bots",
	async run(message, args, client) {

		message.channel.send(`:ping_pong: Mein Ping ist: **${client.ws.ping}ms**`);

	}
});
