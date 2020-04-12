const discord = require('discord.js')
const commando = require('discord.js-commando')
const superagent = require('superagent')

class CatCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'cat',
            group: 'funny',
            memberName: 'cat',
            description: 'Cat Command'  
        });
    }

    async run(message, args)
    {    
        let {body} = await superagent
        .get("http://aws.random.cat/meow")

        if(!{body}) return message.channel.send("GRESKA")

        var embed = new discord.RichEmbed()
        .setTitle("**Mijau**")
        .setColor("#0c7fe4")
        .setImage(body.file)
        message.channel.send(embed)
    }
}

module.exports = CatCommand;