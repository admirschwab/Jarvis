/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "ping",
	description: "Zeigt den Ping des Bots",
	async run(message, args, client) {

		const embed = new Discord.MessageEmbed()
		.setColor("#27FF00")
		.setTitle("Pong")
		.setDescription(`:ping_pong: Der Ping beträgt: **${client.ws.ping}ms**`)
		.setTimestamp()
		.setFooter("JARVIS || by Admir Schwab", "https://admirschwab.de/assets/img/admirschwab.png")
			message.channel.send({ embeds: [embed] });

	}
});
