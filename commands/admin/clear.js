const commando = require('discord.js-commando')
const discord = require('discord.js')

class ClearCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'clear',
            group: 'admin',
            memberName: 'clear',
            description: 'Clear Command'          
        });
    }

    async run(message, args)
    {

let words = args.split('');
let number = words.slice(0).join(''); 

     if(!message.member.hasPermission("MANAGE_MESSAGES") && message.author.id !== "348495895261609986")
{
var error1 = new discord.RichEmbed()
.setTitle("**GRESKA:**")
.setDescription("Ti nemas dozvolu za to")
.setColor("#0c7fe4")
message.channel.send(error1)
return;
}
if(!number)
{
    var error2 = new discord.RichEmbed()
    .addField("Koristi", ".clear [broj poruka]")
    .setColor("#0c7fe4")
    message.channel.send(error2)
    return;
}
else
{
message.delete();
message.channel.bulkDelete(number).then(() => {
  message.channel.send(`Ja sam obrisao ${number} poruka-e.`).then(msg => msg.delete(5000));
});
}}
}

module.exports = ClearCommand;