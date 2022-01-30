/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "help",
	description: "HILFEEEE",
	permission: "SEND_MESSAGES",
	
	async run(message, args, client) {

		const embed = new Discord.MessageEmbed()
		.setColor("#27FF00")
		.setTitle("Hilfe")
		.addFields(
			{ name: '!ping', value: 'Zeigt den Ping', inline: true },
			{ name: '!stats', value: 'Infos zum Bot', inline: true },
			{ name: 'more com', value: 'ming soon', inline: true },
		)
		.setTimestamp()
		.setFooter("JARVIS || by Admir Schwab", 'https://admirschwab.de/assets/img/admirschwab.png')
			message.channel.send({ embeds: [embed] });

		}
});
