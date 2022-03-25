/** @format */

console.clear();

const Client = require("./Structures/Client.js");
const Command = require("./Structures/Command.js");
const config = require("./Data/config.json");

const Discord = require("discord.js");

const onlineMessageChannel = ("911948737398599690");

const userMessages = new Map();
const maxMessages = 1;
const messageCooldown = 2000;

const client = new Client();
const fs = require("fs");
const { channel } = require("diagnostics_channel");

fs.readdirSync("./src/Commands")
	.filter(file => file.endsWith(".js"))
	.forEach(file => {
		/**
		 * @type {Command}
		 */
		const command = require(`./Commands/${file}`);
		console.log(`Command ${command.name} loaded`);
		client.commands.set(command.name, command);
	});



client.on("ready", () => {
	console.log(" ");
	console.log("JARVIS ist Online :)");

	const online = client.channels.cache.find(channel => channel.id === onlineMessageChannel);
	const embed = new Discord.MessageEmbed()
		.setColor("#27FF00")
		.setDescription(`**${client.user.username}** ist Online :)`)
			online.send({ embeds: [embed] });

	client.user.setActivity(`Mainframe auf ${client.guilds.cache.size} Servern`, {type:"PLAYING"});
});



client.on("messageCreate", message => {

	if (message.author.bot) return;
	if (!message.content.startsWith(config.PREFIX)) return;

	//cooldown begin

	if(userMessages.has(message.author.id) && userMessages.get(message.author.id).length >= maxMessages)  {
		const embed = new Discord.MessageEmbed()
		.setColor("#FF0000")
		.setTitle("Cooldown!!!")
		.setDescription("Achtung! Du Sendest zu Schnell zu Viele Nachrichten...")
			message.channel.send({ embeds: [embed] });
		return;
	}

	if(!userMessages.has(message.author.id)) {
		userMessages.set(message.author.id, [ setTimeout(() => userMessages.delete(message.author.id), messageCooldown) ]);
	}
	else {
		clearTimeout(userMessages.get(message.author.id)[userMessages.get(message.author.id).length-2]); 
		userMessages.get(message.author.id).push( setTimeout(() => userMessages.delete(message.author.id), messageCooldown) )
	}

	//cooldown ende	



	//command gibt es nicht

	const args = message.content.substring(config.PREFIX.length).split(/ +/);
	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) {
		const embed = new Discord.MessageEmbed()
			.setColor("#FF0000")
			.setDescription(`Der Command \`${args[0]}\` existiert nicht 🛰`)
				message.channel.send({ embeds: [embed] });
				return;
	}
	
	//Permission

	const permission = message.member.permissions.has(command.permission, true);

	if (!permission) {
		const embed = new Discord.MessageEmbed()
			.setColor("#FF0000")
			.setDescription(`Du hast keine Berechtigung für diesen Command | Dir fehlen die Rechte: \`${command.permission}\` 🛑`)
				message.channel.send({ embeds: [embed] });
				return;
	}

	command.run(message, args, client);

	//permission ende

});

//token
client.login(config.TOKEN);

