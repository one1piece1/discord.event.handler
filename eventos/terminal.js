const {Client, Message, MessageEmbed } = require('discord.js');
const child = require('child_process');

module.exports = {
    name: "terminal",

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {

        const prolyn3 = '<@>' // <@ id Dono do BOT   >

        if(message.author.id !== '179125316420239360') // ID do dono do BOT
        return message.reply(` Só o ${prolyn3} tem acesso a este Comando!`) 

        const comando = args.join(" ");
        if(!comando) return message.reply('Tens de Especificar um comando');

        child.exec(comando, (err, res) => {
            if (err) return console.log(err);

            const embed = new MessageEmbed()
            .setColor('GOLD')  // COR DO Embed
            .setTitle('DISCORD BOT TERMINAL')
            .setDescription(res.slice(0, 2000), {code: "js"});
            message.channel.send(embed)
            
        })

    },

}