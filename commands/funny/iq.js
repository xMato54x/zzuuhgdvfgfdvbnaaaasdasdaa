 const discord = require('discord.js')
const commando = require('discord.js-commando')
var iq = [ 
    "200",
    "100",
    "-200",
    "30",
    "47",
    "67",
    "72",
    "47",
    "74",
    "23",
    "82",
    "143"
]

class IQCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'iq',
            group: 'funny',
            memberName: 'iq',
            description: 'IQ Command'  
        });
    }

    async run(message, args)
    {
        {
            var iqembed = new discord.RichEmbed()
            .setColor("#0c7fe4")
            .setTitle("IQ KOMANDA")
            .setDescription("Ja mislim da je tvoj IQ "+ ((iq[Math.floor(Math.random() * iq.length).toString(16)])))
            message.channel.send(iqembed); 
        }   
    }
}

module.exports = IQCommand;