/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "help",
	description: "HILFEEEE",
	async run(message, args, client) {

		const embed = new Discord.MessageEmbed()
			.setColor("#27FF00")
			.setTitle("Hilfe:")
			.setDescription(` 
				**- !ping**
				**- !stats**
				*- more comming soon*n
			`)
			.setTimestamp()
			.setFooter("JARVIS || by Admir Schwab", "https://admirschwab.de/assets/img/admirschwab.png")
				message.channel.send({ embeds: [embed] });

	}
});
