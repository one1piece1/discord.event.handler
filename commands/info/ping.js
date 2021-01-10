const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Retorna latência e ping dO API',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`WebSocket ping é0 ${client.ws.ping}MS\nMessage edit ping é ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            await message.channel.send(embed)
            msg.delete()

    }
}
