/** @format */

const Command = require("../Structures/Command.js");
const config = require("../Data/config.json")

const Discord = require("discord.js");

module.exports = new Command({
	name: "stats",
	description: "Details zum Bot",
	permission: "SEND_MESSAGES",
	
	async run(message, args, client) {

		const embed = new Discord.MessageEmbed()
			.setColor("#FFF000")
			.setTitle("Details:")
			.setDescription("Hier findest du Details zum Discord Bot")
			.addFields(
				{ name: 'Developer:', value: 'https://admirschwab.de' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Name', value: `${client.user.username}`, inline: true },
				{ name: 'Version', value: `${config.ver}`, inline: true },
				{ name: 'Prefix', value: `${config.PREFIX}`, inline: true },
			)
			.setTimestamp()
			.setFooter("JARVIS || by Admir Schwab", 'https://admirschwab.de/assets/img/admirschwab.png')
				message.channel.send({ embeds: [embed] });

	}
});