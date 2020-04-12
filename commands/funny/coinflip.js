const commando = require('discord.js-commando')

class CoinFlipCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'coinflip',
            group: 'funny',
            memberName: 'coinflip',
            description: 'Flip Command'
            

        });
    }

    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0){
            message.channel.send("`Tvoj novcic je pao na glavu!`");
        }
        else{
            message.channel.send("`Tvoj novcic je pao na pismo!`")
        }
    }
}

module.exports = CoinFlipCommand;
    

    

    

