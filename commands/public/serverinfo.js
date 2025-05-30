/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
// jshint multistr: true
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
    if(message.author.bot) return;
    if (message.channel == 'dm') return;

    let region;
    switch (message.guild.region) {
        case "europe":
            region = '🇪🇺 Europe';
            break;
        case "us-east":
            region = '🇺🇸 us-east';
            break;
        case "us-west":
            region = '🇺🇸 us-west';
            break;
        case "us-south":
            region = '🇺🇸 us-south';
            break;
        case "us-central":
            region = '🇺🇸 us-central';
            break;
    }

    const embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL({dynamic : true}))
        .setColor(3447003)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`)
        .setTitle(`${message.guild.name} Server Stats`)
        .addFields(
            {
                name: "Owner: ",
                value: message.guild.owner.user.tag,
                inline: true
            },
            {
                name: "Members: ",
                value: `There are ${message.guild.memberCount} users!`,
                inline: true
            },
            {
                name: "Members Online: ",
                value: `There are ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} users online!`,
                inline: true
            },
            {
                name: "Total Bots: ",
                value: `There are ${message.guild.members.cache.filter(m => m.user.bot).size} bots!`,
                inline: true
            },
            {
                name: "Creation Date: ",
                value: message.guild.createdAt.toLocaleDateString("de-DE"),
                inline: true
            },
            {
                name: "Roles Count: ",
                value: `There are ${message.guild.roles.cache.size} roles in this server.`,
                inline: true,
            },
            {
                name: `🗺 Region: `,
                value: region,
                inline: true
            },
            {
                name: `Verified: `,
                value: message.guild.verified ? 'Server is verified' : `Server isn't verified`,
                inline: true
            },
            {
                name: 'Boosters: ',
                value: message.guild.premiumSubscriptionCount >= 1 ? `There are ${message.guild.premiumSubscriptionCount} Boosters` : `There are no boosters`,
                inline: true
            },
            {
                name: "Emojis: ",
                value: message.guild.emojis.cache.size >= 1 ? `There are ${message.guild.emojis.cache.size} emojis!` : 'There are no emojis' ,
                inline: true
            }
        );
    await message.channel.send(embed);
};

exports.help = {
    name: "serverinfo"
};