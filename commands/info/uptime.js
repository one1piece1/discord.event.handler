const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'uptime',
    description: 'BOT Uptime',
    run : async(client, message, args) => {

        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let minutes = Math.floor(client.uptime / 60000) % 60;
        let seconds = Math.floor(client.uptime / 1000) % 60;

        const embed = new MessageEmbed()
        .setTitle('Bot Uptime')
        .setColor('GOLD')
        .addField('\u200B', `\`Estou Online há\` \`${days}Dias\` \`${hours}Horas\`  \`${minutes}Minutos\` \`${seconds}Segundos\``, true)
        .setThumbnail('https://i.imgur.com/7FNbSC2.jpg')

        message.channel.send(embed)
        }
     }
