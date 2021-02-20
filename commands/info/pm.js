const {client, Message, MessageEmbed } = require("discord.js");

module.exports = {
    name: "pm",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) 
            return message.reply("Não tens Premissões para usar este comando")

        const user = 
        message.mentions.users.first() || 
        message.guild.members.cache.get(args[0])?.user;

         const str = args.slice(1).join(" ")
        if(message.content.includes('-bot')) {
            user.send(str.replace("-bot", ""));
        } else {
            user.send(`${message.author.tag}: ${str}`)
        }
    }
}