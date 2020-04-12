const commando = require('discord.js-commando')
const discord = require('discord.js')

class UptimeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'uptime',
            group: 'admin',
            memberName: 'uptime',
            description: 'Say Command'          
        });
    }
    async run(message, args, bot)
    {
     
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString()
        const min = Math.floor((ms / (1000 * 60)) % 60).toString()
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
        return (`${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds, `)
    }

    message.channel.send(`Ja sam online: ${duration(bot.uptime)}`)

    }
}
module.exports = UptimeCommand;