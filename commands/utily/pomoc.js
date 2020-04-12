const commando = require('discord.js-commando');
const discord = require('discord.js');

class HelpCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'help',
            group: 'utily',
            memberName: 'help',
            description: 'HELP'  
        });
    }
async run(message, args)
    {
        var about = new discord.RichEmbed()
            .addField(":tools: **Prefix**", "Moj trenutni prefix je ''**.**''")
            .addField(":hammer: **Admin Komande**", ".ban, .kick, .say, .dmall, .vote, .embed")
            .addField(":smile: **Zabavne Komande**", ".coinflip, .avatar, .8ball, .dog, .cat, .iq")
            .addField(":trophy: **Ostale Komande**", ".about, .help, .server-info, .my-info, .suggest, .report, .membercount")
            .setColor("#0c7fe4")
            .setFooter("© Second World")
        
        var dm = new discord.RichEmbed()
        .setDescription(" » Hej `" + message.author.tag + "`, komande si dobio u **DM!**")
        .setColor("#ff6b6b")    
        message.channel.send(dm)         
        message.author.send(about)   
    }
}

module.exports = HelpCommand;
    

    

    

