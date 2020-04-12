const commando = require('discord.js-commando')
const discord = require('discord.js')  


class TweetCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'tweet',
            group: 'admin',
            memberName: 'tweet',
            description: 'Status Command'
            

        });
    }

async run (message, args, data)
{

        let user = args.split(' ');
        let text = user.slice(0).join('');

        let m = await message.channel.send(message.language.get("UTILS").PLEASE_WAIT);

        if(!user){
            return m.edit(message.language.get("TWEET_ERR_USERNAME"));
        }

        if(!text){
            return m.edit(message.language.get("TWEET_ERR_TEXT"));
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${text}`));
            let json = await res.json();
            let attachment = new discord.MessageAttachment(json.message, "tweet.png");
            await message.channel.send(message.language.get("TWEET_CONTENT", user), attachment);
            m.delete();
        } catch(e){
            console.log(e)
            m.edit(message.language.get("ERR_OCCURENCED"));
        }

    }

}
  module.exports = TweetCommand;