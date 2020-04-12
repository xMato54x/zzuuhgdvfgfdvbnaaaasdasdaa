var express = require('express');
var app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
})
app.listen(process.env.PORT);

const Commando = require('discord.js-commando');
const discord = require('discord.js');

const TOKEN = 'Njk3NTIwMDA5MTQ0MTcyNTc1.XpCDJw._ULmkpL5LBngqYQ6UykKURXZvYA'
const TOKEN2 = 'Njk3NTIwMDA5MTQ0MTcyNTc1.XpCDJw._ULmkpL5LBngqYQ6UykKURXZvYA'

const bot = new Commando.Client({
    commandPrefix: ".",
    owner: '348495895261609986',
    disableEveryone: true,
    unknownCommandResponse: false
});



bot.on("message", message => {
     

if (!message.member.hasPermission("ADMINISTRATOR")&& message.author.id !== "348495895261609986")
  {
if (message.content.includes("discord.gg/")) {
    message.reply("Nemoj reklamirati discord servere"); 

    message.delete();

  }

}});




const invites = {};

const wait = require('util').promisify(setTimeout);

bot.on('ready', () => {
  wait(1000);

  bot.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  })});

bot.registry.registerGroup('funny', 'Funny');
bot.registry.registerGroup('admin', 'Admin');
bot.registry.registerGroup('utily', 'Utily');
bot.registry.registerCommandsIn(__dirname + '/commands');


global.servers = {};

bot.on('ready', () => {
    setInterval(() => {
        bot.user.setActivity("Second World", {type: 'PLAYING'}); 
    }, 20000);
});

bot.on('ready', () => {
    setInterval(() => {
        bot.user.setActivity(".help", {type: 'PLAYING'}); 
    }, 4000);
});

bot.on('ready', () => {
    setInterval(() => {
        bot.user.setActivity(".commands", {type: 'PLAYING'}); 
    }, 60000);
});



bot.on("guildMemberAdd", member => {
    var join = new discord.RichEmbed()
    .setTitle("**:tada:NOVI MEMBER**")        
    .setColor("#0c7fe4")
        .addField("Hvala sto si usao na server", "Dobrodosao" + member + ` na **:earth_asia: | Second World**\nProcitaj pravila pogledaj informacije i uzivaj na serveru! :slight_smile:\nTi si nas ` + member.guild.memberCount.toString() + ` member`)
        .setThumbnail(member.user.avatarURL)
    let welcomeChannel = member.guild.channels.get("694986919645544479")
    welcomeChannel.send(join) 
    return;
  
});



bot.on('guildCreate', (guild) => {
    let channels = guild.channels
    channels = channels.filter(channel => channel.type === "text")
    let defaultChannel = channels.first()
    if (defaultChannel && defaultChannel.send)

    var embed = new discord.RichEmbed()
    .setTitle(guild.name)
    .setColor("#0c7fe4")
    .setDescription("Pozdrav, hvala " + guild.owner + " za dodavanje mene na server\nBota je napravio : **Menbet™**\nZa pomoc napisi: **.help**")
    .setTimestamp()
    defaultChannel.send(embed)
})

bot.login(TOKEN2)

console.log(`Bot je uspjesno spojen i radi na svim serverima`);

    