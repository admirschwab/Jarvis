/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "stats",
	description: "Details zum Bot",
	async run(message, args, client) {

		const embed = new Discord.MessageEmbed()
			.setColor("#FFF000")
			.setTitle("Details:")
			.setDescription("Hier findest du Details zum Discord Bot")
			.addFields(
				{ name: 'Entwickler:', value: 'https://admirschwab.de' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Name', value: 'JARVIS', inline: true },
				{ name: 'Version', value: '1.4.0', inline: true },
				{ name: 'Prefix', value: '!', inline: true },
			)
			.setTimestamp()
			.setFooter("JARVIS || by Admir Schwab", 'https://admirschwab.de/assets/img/admirschwab.png')
				message.channel.send({ embeds: [embed] });

	}
});