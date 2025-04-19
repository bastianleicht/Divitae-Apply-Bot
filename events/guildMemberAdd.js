/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
const Discord = require("discord.js");
const config = require("../opt/config.json");

module.exports = async (client) => {
    console.log(`Member Count Updated to ` + client.guilds.cache.get(config.serverstats.serverID).memberCount);

    client.channels.cache.get(config.serverstats.total).setName(`All Members: ${client.guilds.cache.get(config.serverstats.serverID).memberCount}`);
    // client.guild.channels.cache.get(config.serverstats.member).setName(`Members: ${client.guild.members.cache.filter(m => !m.user.bot).size}`);
    // client.guild.channels.cache.get(config.serverstats.bots).setName(`Bots: ${client.guild.members.cache.filter(m => m.user.bot).size}`);


    // console.log(member);

    // const message = `Welcome <@${member.id}> to the Server!`;
    // const channel = client.guild.channels.cache.find(ch => ch.id === config.welcome.channel);
    // channel.send(message);

    // const embed = new Discord.MessageEmbed()
    //     .setAuthor('Divitae eSports', 'https://s12.directupload.net/images/200811/q73x4vjg.png')
    //     .setDescription(`Willkommen ${guild.member.username} 🎉\n`)
    //     .setThumbnail('https://s12.directupload.net/images/200811/q73x4vjg.png')
    //     .addField('__Über uns:__', `Wir sind Divitae eSports, ein in Deutschland basierendes eSports-Team, das derzeit in Fortnite, CSGO und Valorant vertreten ist. Divitae wurde am 25.03.2020 gegründet und baut seine Community immer noch weiter aus.\nWir würden uns freuen wenn du etwas bleiben würdest!\n\nWenn du immer auf dem aktuellsten Stand über uns sein willst folge doch unserem <#739428026789396540> Channel.`)
    //     .addField('__Social Media:__', `[Webseite (Offline)](http://www.divitae.eu)\n[Twitter](https://twitter.com/DivitaeEU)\n[YouTube](https://youtube.com)\n[TikTok](https://www.tiktok.com/@divitaeeu)`)
    //     .setColor(0x8e44ad)
    //     .setTimestamp()
    //     .setFooter(`© 2020 Divitae`);

    //     member.send(embed);
};