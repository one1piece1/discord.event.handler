  
const client = require('../index.js');
const { promisify } = require('util');
const wait = promisify(setTimeout);
let invites;
const id = '000000000000000000'; // Id do Servidor

client.on('ready', async() => {
    await wait(2000);

    client.guilds.cache.get(id).fetchInvites().then(inv => {
        invites = inv;
    })
})

client.on('guildMemberAdd', async(member) => {
    if(member.guild.id !== id) return;

    member.guild.fetchInvites().then(gInvites => {
        const invite = gInvites.find((inv) => invites.get(inv.code).uses < inv.uses);
        const channel = member.guild.channels.cache.get('000000000000000000'); // Canal onde envia
      
        channel.send(`${member} Foi convidado por ${invite.inviter} e o codigo era: ${invite.code}`);
    })
})
