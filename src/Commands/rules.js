/** @format */

const Command = require("../Structures/Command.js");

const Discord = require("discord.js");

module.exports = new Command({
	name: "rules",
	description: "rules für deine mom",
	permission: "ADMINISTRATOR",
	
	async run(message, args, client) {

		const embed = new Discord.MessageEmbed()
			.setColor("#FF0000")
			.setTitle("REGELN:")
			.setDescription("1. Luisa ist Herr und Gebieter\n2. Was Herr und Gebieter sagt ist Gesetz und muss befolgt werden\n3. Alphas sind die Stellvertreter des Herrn und man hat ihnen zu gehorchen\n4. Jeder braucht eine/n Sugardaddy/Sugarmommy\n5. Der Erotik Shop muss mindestens einmal die Woche besucht werden\n6. Arme Leute haben nichts zu lachen und sind nicht erwünscht\n7. Humor ist Pflicht ihr hs\n8. 30cm mindestens (strap on geht auch,,, aber nur in Pink)\n9. Es gibt für alle Regeln Zufallskontrollen (besonders für Regel Nummer 8)\n10. Jeden Samstag Abend Pflicht Orgie\n11. Keine Eigenwerbung!!!\n\nPS: Was auf diesem Server passiert wird nicht weitererzählt weil sonst Regierung Stress macht")
			.setTimestamp()
			.setFooter("JARVIS || by Admir Schwab", 'https://admirschwab.de/assets/img/admirschwab.png')
				message.channel.send({ embeds: [embed] });

	}
});