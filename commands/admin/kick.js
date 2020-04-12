const commando = require('discord.js-commando')
const discord = require('discord.js')

class KickCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'kick',
            group: 'admin',
            memberName: 'kick',
            description: 'Kick Command'          
    });
    }

    async run(message, args)
    {
        console.log(args);
        if(!message.member.hasPermission("KICK_MEMBERS") && message.author.id !== "348495895261609986")
        {
        var error1 = new discord.RichEmbed()
        .setTitle("**GRESKA:**")
        .setDescription("Ti nemas dozvolu za to.")
        .setColor("#0c7fe4")
        message.channel.send(error1)
        return;
        }
        
      
      
      let kickedUser = message.guild.member(message.mentions.users.first());
        if(!kickedUser)
        {
            var error1 = new discord.RichEmbed()
            .addField("Koristi:", ".kick [@Member] [Razlog]")
            .setColor("#0c7fe4")
        message.channel.send(error1)
            return;
        }
        if(!kickedUser.kickable) return message.channel.send("Ja ne mogu kickati tog membera")
        let words = args.split(' ');
        let reason = words.slice(1).join(' ');
        if(!reason) reason = "Razlog nije naveden";
        message.guild.member(kickedUser).kick(reason)
        var kick = new discord.RichEmbed()
        .addField(":pushpin: **INFORMACIJE KICKA**", "\nStaff: " + message.author + "\nMember: " + kickedUser + "\nRazlog: **" + reason + "**")
        .setColor("#0c7fe4")
        .setFooter("© Second World")  
        message.guild.member(kickedUser).kick(reason)
        message.guild.channels.find(channel => channel.name === 'logs').send(kick)
        var kickmsg = new discord.RichEmbed()
        .addField(":pushpin: **INFORMACIJE KICKA**", kickedUser + " je kickan!\nRazlog: **" + reason + "**")
        .setColor("#0c7fe4")
        .setFooter("© Second World")   
        message.channel.send(kickmsg) 
            .then(console.log)
            .catch(console.error);
    }   
}

module.exports = KickCommand;
    

    

    

