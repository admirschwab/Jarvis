/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "stats",
	description: "Details zum Bot",
	async run(message, args, client) {

		message.channel.send(`Entwickler: **https://admirschwab.de ** \nName: **${client.user.username}** \nVersion: **1.2.0** \nPrefix: **!**`);

	}
});