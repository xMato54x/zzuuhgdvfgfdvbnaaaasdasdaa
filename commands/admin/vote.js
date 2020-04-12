const commando = require('discord.js-commando')
const discord = require('discord.js')

class VoteCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'vote',
            group: 'admin',
            memberName: 'vote',
            description: 'Vote Command'
            

        });
    }

    async run(message, args)
    {

      let words = args.split('');
      let desc = words.slice(0).join('');      
      

  // Permission Verification -- This will only run if a user has a specific permission (optional)
  if (!message.member.hasPermission('ADMINSTRATOR')) return message.channel.send('Ti nemas dozvolu za to');

  // First, we want to check if the user had input
  if (!args[0]) return message.channel.send('Koristi: .vote [Pitanje]');

  // Then, create the embed
  const Voteembed = new discord.RichEmbed()
            .setColor("#0c7fe4")
    .setFooter('Kako bi glasao ostavi reakciju na ovu poruku')
    .setDescription(`${desc}`)

  // Finally, using await send the message
  let msg = await message.channel.send(Voteembed);
  // The sent message will now be stored in the msg variable

  // React to the message
  await msg.react('✅'); // Using await here will make sure the first one runs before the second
  await msg.react('⛔');

  // Make sure you delete the original message
  message.delete({timeout: 1000});
}}
  module.exports = VoteCommand;