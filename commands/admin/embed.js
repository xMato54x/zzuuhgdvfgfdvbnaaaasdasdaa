const commando = require('discord.js-commando')
const discord = require('discord.js')


class EmbedCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'embed',
            group: 'admin',
            memberName: 'embed',
            description: 'Embed Command'          
        });
    }
    async run(message, args)
    {
     if(!message.member.hasPermission("ADMINISTRATOR") && message.author.id !== "348495895261609986") return message.channel.send("Ti nemas dozvolu za to") 

        {          
            let words = args.split(' ');
            let desc = words.slice(0).join(' ');

            if(!desc)
            {
                var error1 = new discord.RichEmbed()
                .addField("Koristi:", ".embed [poruka]")
                .setColor("#0c7fe4")
            message.channel.send(error1)      
                return;
            }
            else 
            {
            message.delete();
            var thatmessage = new discord.RichEmbed()
            .setDescription("" + (desc))
            .setColor("#0c7fe4")     
            .setTimestamp()
        message.channel.send(thatmessage)         
            }  
        }
    }    
}

module.exports = EmbedCommand;
    

