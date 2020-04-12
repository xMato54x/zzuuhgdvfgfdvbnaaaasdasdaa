const commando = require('discord.js-commando');
const discord = require('discord.js');

class AboutCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'about',
            group: 'utily',
            memberName: 'about',
            description: 'About Me'  
        });
    }

    async run(message, args)
    {
        var about = new discord.RichEmbed()
            .addField(":tools: **Bot Developer** :tools:", "Menbet™")
            .addField(":crown: **Ime bota** :crown:", "Second World")
            .addField(":calendar: **Bot napravljen** :calendar:", "9/4/2020")
            .addField(":link:  **Prefix bota** :link:", "Trenutni prefix bota je '**.**'")
            .setColor("#0c7fe4")
        
        var dm = new discord.RichEmbed()
        .setDescription(" » Hej `" + message.author.tag + "`, vise o botu dobio si u **DM!**")
        .setColor("#ff6b6b")    
        message.channel.send(dm)         
        message.author.send(about)   
    }
}

module.exports = AboutCommand;
    

    

    

