const discord = require("discord.js");
const commando = require('discord.js-commando') 

class ReportCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'report',
            group: 'utily',
            memberName: 'report',
            description: 'Report Command'          
        });
    }

    async run(message, args)
    {
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser)
        {
        var error2 = new discord.RichEmbed()
        .addField("Koristi:", ".report [@Member] [Razlog]")
        .setColor("#0c7fe4")
        message.channel.send(error2)
        return;
       }
        if(rUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Ti ne mozes reportati tog membera")
        let words = args.split(' ')
        let rreason = words.slice(1).join(' ')
        if(!rreason) rreason = 'Razlog nije naveden'
    
        let reportEmbed = new discord.RichEmbed()
        .setColor("#0c7fe4")
        .addField("**:name_badge: INFORMACIJE REPORTA**", "Reportan member: **" + rUser + "**\nReportan od: **" + message.author + "**\nKanal: **" + message.channel + "**\nRazlog: **" + rreason + "**")       
        message.guild.channels.find(channel => channel.name === 'logs').send(reportEmbed)

        var success = new discord.RichEmbed()
        .addField(":name_badge: **USPJESNO REPORTAN**", "Reportan member: " + rUser + "\nRazlog: **" + rreason + "**")
        .setColor("#0c7fe4")
        .setFooter("© Second World")
        message.channel.send(success)  
    
    }
}

module.exports = ReportCommand