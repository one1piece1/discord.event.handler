const { Message } = require('discord.js')

module.exports = {
    name: "nuke",
/**
 * 
 * @param {*} client 
 * @param {Message} message 
 * @param {*} args 
 */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) 
        return message.reply('"Não tens Premissões para usar este comando"');
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) 
        return message.reply('Preciso permissões MANAGE_CHANNELS para poder usar este comando!!');

        await message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.position);
            message.channel.delete();

            ch.send('Esta Canal foi Nuked')
        })
    }
}