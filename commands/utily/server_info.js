const discord = require('discord.js');
const commando = require('discord.js-commando')

class ServerInfoCommand extends commando.Command

{
    constructor(client)
    {
        super(client,{
            name: 'serverinfo',
            group: 'utily',
            memberName: 'serverinfo',
            description: 'Server Info Command'          
        });
    }

async run(message, args)
    {
        function checkMembers(guild) {
            let memberCount = 0;
            guild.members.forEach(member => {
              if(!member.user.bot) memberCount++;
            });
            return memberCount;
          }
          function checkBots(guild) {
            let botCount = 0;
            guild.members.forEach(member => {
              if(member.user.bot) botCount++;
            });
            return botCount;
          }    
    let icon = message.guild.iconURL;
    var serverEmbed = new discord.RichEmbed()
    .setColor("#0c7fe4")
    .setThumbnail(icon)
    .addField(":crown: **Ime servera**", message.guild.name, true)
    .addField(":crown: **Owner servera**", `${message.guild.owner}`, true)
    .addField(":hammer_pick: **Server napravljen**", message.guild.createdAt)
    .addField(":star: **Ti si usao**", message.member.joinedAt)
    .addField(":fire:**Ukupno membera**", message.guild.memberCount + " Membera", true)
    .addField(":man: **Memberi**", `${checkMembers(message.guild)} Membera`, true)
    .addField(":robot: **Botovi**", `${checkBots(message.guild)} Botova`, true)
    .setFooter("© Second World")


    var dm = new discord.RichEmbed()
    .setDescription(" » Hej `" + message.author.tag + "`, vise o serveru dobio si u **DM!**")
    .setColor("#ff6b6b")    
    message.channel.send(dm)  
    message.author.send(serverEmbed);
}}

module.exports = ServerInfoCommand;
