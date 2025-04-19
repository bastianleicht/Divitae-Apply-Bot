/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// 2020-04-17 Bot Creation Date
// jshint esversion: 8
// jshint multistr: true 
const Discord = require('discord.js');
const config = require('../../opt/config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    
    if (message.channel !== 'dm') {
        await message.delete().catch(O_o => {});
    }

    const embed = new Discord.MessageEmbed()
        .setColor(3447003)
        .setTitle('Divitae Info')
        .addField('__Discord Info__:', 'Unser Discord wurde am 25.03.2020 erstellt und hat sich seitdem dauerhaft weiterentwickelt. Wir sind eine ständig wachsende Community und haben sogar unser eigenes eSports Team. Falls du dich dafür bewerben willst kannst du das im <#739362427434565733> Channel machen!')
        .addField('__Bot Info__:', 'Der Divitae Bot wird seit dem 17.04.2020 von <@350618993020764161> programmiert und seitdem dauerhaft weiterentwickelt. Die Updates kannst du im <#742326095138914405> Channel nachlesen! Falls **Du** noch irgendwelche Features in dem Bot vermisst schreib <@350618993020764161> doch mal mit deinem Vorschlag an.')
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);

    message.author.send(embed);
};

module.exports.help = {
    name: "info"
};