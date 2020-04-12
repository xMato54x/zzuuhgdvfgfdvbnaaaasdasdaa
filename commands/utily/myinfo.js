const discord = require('discord.js');
const commando = require('discord.js-commando')

class MyInfoCommand extends commando.Command

{
    constructor(client)
    {
        super(client,{
            name: 'userinfo',
            group: 'utily',
            memberName: 'userinfo',
            description: 'My Info Command'          
        });
    }

async run(message, args)
    {
    var myInfoEmbed = new discord.RichEmbed()
    .setColor("#0c7fe4")
    .addField(":crown: **Tvoje ime**", message.member)
    .addField(":newspaper2: **Tvoj ID**", `${message.member.id}`)
    .addField(":pig: **Tvoj Avatar**", "Ovdje je tvoj avatar")
    .setImage(message.author.avatarURL)
    .setFooter("© Second World")
    var dm = new discord.RichEmbed()
    .setDescription(" » Hej `" + message.author.tag + "`, svoje informacije dobio si u **DM!**")
    .setColor("#ff6b6b")    
    message.channel.send(dm)      
    message.author.send(myInfoEmbed);
}}

module.exports = MyInfoCommand;
