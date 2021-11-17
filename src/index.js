/** @format */

console.clear();

const Client = require("./Structures/Client.js");
const Command = require("./Structures/Command.js");
const config = require("./Data/config.json");

const client = new Client();
const fs = require("fs");

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

	client.user.setActivity("Mainframe || by Admir", {type:"PLAYING"});
});

client.on("messageCreate", message => {

	if (message.author.bot) return;
	if (!message.content.startsWith(config.prefix)) return;

	const args = message.content.substring(config.prefix.length).split(/ +/);
	const command = client.commands.find(cmd => cmd.name == args[0]);

	if (!command) return message.reply(`Der Command **!${args[0]}** existiert nicht :satellite:`);
	
	//Permission
	const permission = message.member.permissions.has(command.permission, true);

	if (!permission) return message.reply(`Du hast keine Berechtigung für den Command: \`${command.permission}\` `)

	command.run(message, args, client);

});

client.login(config.token);
