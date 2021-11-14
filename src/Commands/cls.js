/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "cls",
	description: "Cleart den Chat",
	async run(message, args, client) {

        let messages = message.content.split(" ").slice(1).join("");
        message.delete();

        if(isNaN(messages)) return message.reply("Das sind keine Zahlen sondern Buchstaben").then(message=>message.delete({timeout:5000}));
        message.channel.bulkDelete(messages);
	}
});