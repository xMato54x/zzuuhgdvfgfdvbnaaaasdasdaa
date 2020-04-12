const commando = require('discord.js-commando')
const discord = require('discord.js')

class AvatarCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'avatar',
            group: 'funny',
            memberName: 'avatar',
            description: 'Avatar Command'
            

        });
    }

    async run(message, args)
    {
    let uuser = message.guild.member(message.mentions.users.first());
    if(!uuser) 
    {
        var error1 = new discord.RichEmbed()
        .setColor("#0c7fe4")
        .setImage(message.author.avatarURL)
        .setFooter(`${message.author.tag}`)
     message.channel.send(error1)    
        return;
    }
    else
    { 
    var avatar = new discord.RichEmbed()
    .setColor("#0c7fe4")
    .setImage(uuser.user.avatarURL)
    .setFooter(`${uuser.user.tag}`)
 message.channel.send(avatar)    
    return;
    }
  }
}

module.exports = AvatarCommand;
    

    

    

