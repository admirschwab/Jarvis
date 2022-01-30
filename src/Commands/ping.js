/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "ping",
	description: "Zeigt den Ping des Bots",
	permission: "SEND_MESSAGES",
	
	async run(message, args, client) {

		const firstMessageTimestamp = message.createdTimestamp;
		const loadingMessage = await message.channel.send("Loading...");
		loadingMessage.delete();
		
			const secondMessageTimestamp = loadingMessage.createdTimestamp;
			const ping = secondMessageTimestamp - firstMessageTimestamp; 

			const embed = new Discord.MessageEmbed()
				.setColor("#27FF00")
				.addFields(
					{ name: 'API Ping:', value: `${client.ws.ping}ms`, inline: true },
					{ name: 'Client Ping:', value: `${ping}ms`, inline: true }
				)
				.setTimestamp()
				.setFooter("JARVIS || by Admir Schwab", "https://admirschwab.de/assets/img/admirschwab.png")
					message.channel.send({ embeds: [embed] });

	}
});
