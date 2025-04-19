/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
const Discord = require('discord.js');
const config = require('../../opt/config.json');

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o => {});
    if (message.author.bot) return;
    if (message.channel == 'dm') return;

    if (args[0] === null || args[0] === "") return;
    if (args[0].includes("https://discord.gg/") === false && message.author.hasPermission('MANAGE_MESSAGES')) {
        const embed = new Discord.MessageEmbed()
        .setTitle(':warning: | Error')
        .addField('**Invalid Command Syntax!** Please use:', `${config.prefix}partner <Invite Link> <Kontakt> <Name>`)
        .setColor(0x8e44ad)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);
        return message.member.send(embed);
    }

    if (args[0].includes("https://discord.gg/") && message.member.hasPermission('MANAGE_MESSAGES')) {
        const embed = new Discord.MessageEmbed()
        .setTitle(':gem: | Neue Partnerschaft')
        .setDescription(`▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n**Name:** ${args[2]}\n**Kontakt:** ${args[1]}\n**Discord:** ${args[0]}\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)
        .setColor(0x8e44ad)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);

        message.channel.send(embed);
    
    } else {
        const embed = new Discord.MessageEmbed()
            .setTitle('Missing Permission')
            .setDescription(`I'm sorry but you don't have the **MANAGE_MESSAGES** Permission`)
            .setColor('#FF0000')
            .setTimestamp()
            .setFooter(`© 2020 Divitae`);
        message.channel.send(embed).then(msg => {
            msg.delete({ timeout: 10000 });         // Deletes Message after 10seconds
        }).catch(console.error); 
    }

};
exports.help = {
    name: 'partner'
};