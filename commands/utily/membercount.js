const discord = require('discord.js');
const commando = require('discord.js-commando')

class MembersCommand extends commando.Command

{
    constructor(client)
    {
        super(client,{
            name: 'membercount',
            group: 'utily',
            memberName: 'membercount',
            description: 'My Info Command'          
        });
    }

async run(message, args)
    {
      
var roleID = "618602359177871377";
var size = message.guild.memberCount;
 
        {
            var MembersEmbed = new discord.RichEmbed()
            .addField(`**:busts_in_silhouette: Memberi**`, `Na serveru je trenutno **${size}** membera. `)
            .setColor("#0c7fe4")
             message.channel.send(MembersEmbed); 
             return;
        }     
      
      
    }}

module.exports = MembersCommand;