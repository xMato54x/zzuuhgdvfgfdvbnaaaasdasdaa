const discord = require('discord.js')
const commando = require('discord.js-commando')

class BanCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'ban',
            group: 'admin',
            memberName: 'ban',
            description: 'Rank Command'          
        });
    }

    async run(message, args)
    {

        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "348495895261609986")
        {
        var error1 = new discord.RichEmbed()
        .setTitle("**GRESKA:**")
        .setDescription("Ti nemas dozvolu za to.")
        .setColor("#0c7fe4")
        message.channel.send(error1)
        return;
        }


        let bannedUser = message.guild.member(message.mentions.users.first());


        if(!bannedUser)
        {
            var error2 = new discord.RichEmbed()
            .addField("Koristi:", ".ban [@Member] [Razlog]")
            .setColor("#0c7fe4")
        message.channel.send(error2)
            return;
        }


        if(!bannedUser.bannable) return message.channel.send("Ja ne mogu pronaci tog membera")

        let words = args.split(' ');
        let reason = words.slice(1).join(' ');


        if(!reason) reason = "Razlog nije naveden";
        message.guild.member(bannedUser).ban(reason) 
        

        var ban = new discord.RichEmbed()
        .addField("📌 **INFORMACIJE BANA**", "\nStaff: " + message.author + "\nMember: " + bannedUser + "\nRazlog: **" + reason + "**")
        .setColor("#0c7fe4")
        .setFooter("© Second World")   
        message.guild.channels.find(channel => channel.name === 'logs').send(ban)


        var banmsg = new discord.RichEmbed()
        .addField(":pushpin: **INFORMACIJE BANA**", bannedUser + " je banan!\nRazlog: **" + reason + "**")
        .setColor("#0c7fe4")
        .setFooter("© Second World")   
        message.channel.send(banmsg) 

    }   
}

module.exports = BanCommand;