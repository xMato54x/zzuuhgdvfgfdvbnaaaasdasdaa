const commando = require('discord.js-commando')
const discord = require('discord.js')
const bot = new commando.Client();

class StatusCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'status',
            group: 'admin',
            memberName: 'status',
            description: 'Status Command'
            

        });
    }


}

module.exports = StatusCommand;