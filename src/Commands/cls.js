/** @format */

const Command = require("../Structures/Command.js");

module.exports = new Command({
	name: "cls",
	description: "Cleart Nachrichten aus dem Chat",
        permission: "ADMINISTRATOR",

        async run(message, args, client) {
                const amount = args[1];

                if(!amount || isNaN(amount))
                        return message.reply(`${amount} ist keine Zahl`);
                
                
                const amountParsed = parseInt(amount);

                if(amountParsed > 100)
                        return message.reply(`Du kannst nicht mehr als 100 Nachrichten auf einmal löschen`);
                
                message.channel.bulkDelete(amountParsed);

                const msg = await message.channel.send(
                        `Es wurden ${amountParsed} Nachrichten gelöscht`
                );

                setTimeout(() => msg.delete(), 5000);

        }

});