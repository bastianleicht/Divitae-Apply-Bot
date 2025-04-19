/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
const Discord = require('discord.js');
const config = require('../opt/config.json');

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o => {});
    if (message.author.bot) return;

    if (message.member.id === '350618993020764161' || message.member.id === '316261977645383690') {
        const embed = new Discord.MessageEmbed()
        .setAuthor('Divitae eSports', 'https://s12.directupload.net/images/200811/q73x4vjg.png')
        .setDescription(`Willkommen ${message.member} 🎉\n`)
        .setThumbnail('https://s12.directupload.net/images/200811/q73x4vjg.png')
        .addField('__Über uns:__', `Wir sind Divitae eSports, ein in Deutschland basierendes eSports-Team, das derzeit in Fortnite, CSGO und Valorant vertreten ist. Divitae wurde am 25.03.2020 gegründet und baut seine Community immer noch weiter aus.\nWir würden uns freuen wenn du etwas bleiben würdest!\n\nWenn du immer auf dem aktuellsten Stand über uns sein willst folge doch unserem <#739428026789396540> Channel.`)
        .addField('__Social Media:__', `[Webseite (Offline)](http://www.divitae.eu)\n[Twitter](https://twitter.com/DivitaeEU)\n[YouTube](https://www.youtube.com/channel/UCYoEM5npC78LsIzS21yNKvA)\n[TikTok](https://www.tiktok.com/@divitaeeu)`)
        .setColor(0x8e44ad)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);

        message.member.send(embed);
    } else {
        return message.channel.send('⛔ You are not the Bot owner!');
    }

};
exports.help = {
    name: 'test'
};