const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'uptime',
    description: 'BOT Uptime',
    run : async(client, message, args) => {

        let Dias = Math.floor(client.uptime / 86400000);
        let Horas = Math.floor(client.uptime / 3600000) % 24;
        let Minutos = Math.floor(client.uptime / 60000) % 60;
        let Segundos = Math.floor(client.uptime / 1000) % 60;

        const embed = new MessageEmbed()
        .setTitle('Bot Uptime')
        .setColor('GOLD')
        .addField('\u200B', `\`Estou Online há\` \`${Dias}Dias\` \`${Horas}Horas\`  \`${Minutos}Minutos\` \`${Segundos}Segundos\``, true)
        .setThumbnail('https://i.imgur.com/7FNbSC2.jpg')

        message.channel.send(embed)
        }
     }
