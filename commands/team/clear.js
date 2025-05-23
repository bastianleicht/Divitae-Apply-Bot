/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
// jshint multistr: true 
const Discord = require('discord.js');
const config = require('../../opt/config.json');

exports.run = async (client, message, args) => {

    if (message.member.hasPermission('MANAGE_MESSAGES')) {
        await message.delete().catch(O_o => {});

        if (isNaN(args[0])) return message.channel.send('Please enter a valid number!');
        if (args[0] > 100) return message.channel.send('Only 99 messages are allowed.');

        message.channel.bulkDelete(args[0]).catch(error => {
        if (error.code === Discord.Constants.APIErrors.BULK_DELETE_MESSAGE_TOO_OLD) {       // Checks if the Error Code is the same as the BULK_DELETE_MESSAGE_TOO_OLD
            const embed = new Discord.MessageEmbed()
                .setTitle('Discord API Error')
                .setDescription(`Because of Discord limitations I can't delete messages past 2 weeks.`)
                .setColor('#FF0000')
                .setTimestamp()
                .setFooter(`© 2020 Divitae`);
            message.channel.send(embed).then(msg => {
                msg.delete({ timeout: 10000 });         // Deletes Message after 10seconds
            }).catch(console.error);        // Logs the error if there is one 
        }
        });
    } else {
        await message.delete().catch(O_o => {});
        const embed = new Discord.MessageEmbed()
                .setTitle('Missing Permission')
                .setDescription(`I'm sorry but you don't have the **MANAGE_MESSAGES** Permission`)
                .setColor('#FF0000')
                .setTimestamp()
                .setFooter(`© 2020 Divitae`);
        message.channel.send(embed).then(msg => {
            msg.delete({ timeout: 10000 });         // Deletes Message after 10seconds
        }).catch(console.error);        // Logs the error if there is one 
    }
};
exports.help = {
    name: 'clear'
};