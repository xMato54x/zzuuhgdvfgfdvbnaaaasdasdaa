const commando = require('discord.js-commando')
const discord = require('discord.js-commando')

class AgreeCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'verify',
            group: 'utily',
            memberName: 'verify',
            description: 'Agree Command'
            

        });
    }

    async run(message, args)
    {
        let memberrole = message.guild.roles.find(role => role.name === '🌏 | World')

        await(message.member.addRole(memberrole));
        message.delete();
    }   
}

module.exports = AgreeCommand;