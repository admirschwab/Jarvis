/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "react",
	description: "Reagiert automatisch mit 👍 auf deine Nachricht",
	permission: "ADMINISTRATOR",

	async run(message, args, client) {

		let text = message.content.split(" ").slice(1).join("");
        message.delete();

        message.channel.send(text).then(message => {
            message.react("👍");
        })

	}
});
