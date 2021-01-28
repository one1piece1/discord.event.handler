const client = require('../index')

client.on('ready', () => {
    console.log(`${client.user.username} ✅`)
    
    const arrayOfStatus = [
    `${client.guilds.cache.size} Servidores`,
    `${client.users.cache.size} Utilizadores`,
    `${client.channels.cache.size} canais`,
    `${client.user.tag} Discord bot!`,
    `Dev by Prolyn3`
];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];
        console.log(status);
        client.user.setActivity(status)
        index++;
     }, 5000);
})



