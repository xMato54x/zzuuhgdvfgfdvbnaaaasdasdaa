const discord = require('discord.js')
const commando = require('discord.js-commando')
var eightball = [ 
    "DA!",
    "NE!",
    "Mozda?",
    "Nikada!",
    "Nisam skolovan,kako da znam",
    "Nebi znao",
    "Gluplje pitanje nisam cuo",
    "To je pitanje na koje nebi znao odgovor",
    "Hmm moram razmisliti",
]

class EightBallCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: '8ball',
            group: 'funny',
            memberName: '8ball',
            description: 'Eightball Command'  
        });
    }

    async run(message, args)
    {
   
        let words = args.split('');
        let question = words.slice(0).join('');
        if(question)
        {
            var embed = new discord.RichEmbed()
            .setTitle(`:8ball: **8Ball Komanda**`)
            .addField(`**Autor pitanja**`, message.author)
            .addField("**Tvoje pitanje**", question)
            .addField("**Odgovor**", (eightball[Math.floor(Math.random() * eightball.length).toString(16)]))
            .setColor("#0c7fe4")
             message.channel.send(embed); 
             return;
        }
        else 
        {
            var error1 = new discord.RichEmbed()
            .addField("Koristi:", ".8ball [Pitanje]")
            .setColor("#0c7fe4")
            message.channel.send(error1)
        }   
    }
}

module.exports = EightBallCommand;