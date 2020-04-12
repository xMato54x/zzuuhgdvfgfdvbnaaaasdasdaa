const discord = require('discord.js')
const commando = require('discord.js-commando')
const superagent = require('superagent')

class DogCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'dog',
            group: 'funny',
            memberName: 'dog',
            description: 'Dog Command'  
        });
    }

    async run(message, args)
    {    
        let {body} = await superagent
        .get("https://dog.ceo/api/breeds/image/random")

        if(!{body}) return message.channel.send("GRESKA")

        var embed = new discord.RichEmbed()
        .setTitle("**Wof, Wof!**")
        .setColor("#0c7fe4")
        .setImage(body.message)
        message.channel.send(embed)
    }
}

module.exports = DogCommand;