const {Client, Message, MessageEmbed} = require("discord.js")

module.exports = {
    name : 'clear',
    aliases : ['purge'],
    description: "Apaga menssagem",

    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {MessageEmbed} args 
     */

    run : async(client, message, args) => {

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("Não tens Premissões para usar este comando")
        }

        const utilizador = message.mentions.members.first();
        const mensagens = message.channel.messages.fetch();

        if (utilizador) {
            const msgUtilizador = (await mensagens).filter(
                (m) => m.author.id === utilizador.id
            );
            
        await message.channel.bulkDelete(msgUtilizador);
        message.channel.send(`As messagens do ${utilizador} foram apagadas.`);
             
        } else { 
            if(!args[0])
            return message.channel.send(
                'Especifique um número de mensagens para excluir, de 1 a 99'
                );
            if(isNaN(args[0])) return message.channel.send('Apenas números são permitidos')
            if(parseInt(args[0]) > 99)
            return message.channel.send(
                'A quantidade máxima de mensagens que posso excluir é 99'
                );
       
            await message.channel
                .bulkDelete(parseInt(args[0]) + 1)
                .catch(err => console.log(err))
       
            message.channel.send('Deleted ' + args[0]  + " messages.")
        }
    },
};
