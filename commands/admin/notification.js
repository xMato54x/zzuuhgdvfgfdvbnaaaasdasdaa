const commando = require('discord.js-commando')
const discord = require('discord.js')

class NotifyCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dmall',
            group: 'admin',
            memberName: 'dmall',
            description: 'Notify Command'          
    });
    }
    async run(message, args)
    {
        if (!message.member.hasPermission("ADMINISTRATOR")&& message.author.id !== "348495895261609986") return message.channel.send("Ti nemas dozvolu za to")

        let words = args.split('');
        let poruka = words.slice(0).join(''); 
        if(!poruka)
        {
            var error1 = new discord.RichEmbed()
            .addField("Koristi:", ".dmall [poruka]")
            .setColor("#0c7fe4")
        message.channel.send(error1);
            return;
        }
        else
        {
            message.guild.members.forEach(member => {
                var msg = new discord.RichEmbed()
                .setTitle("**NOVA OBAVJEST**")
                .addField(`\nPoslano sa:`, `${message.guild.name}`)
                .addField(`Poruka poslana od strane:`, `${message.author}`)
                .addField("OBAVJEST:", `${poruka}`)
                .setColor("#0c7fe4")
                    member.send(msg)})  
        }
message.channel.send("Poruka je poslana u DM kod **" + message.guild.memberCount + "** membera!")
  }
}
module.exports = NotifyCommand; 
