/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
// jshint multistr: true 
const Discord = require('discord.js');
const config = require('../../opt/config.json');

exports.run = async (client, message, args) => {

    if (message.author.bot) return;
    
    let user;

    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
    } else if (args[0]) {
        user = message.guild.members.cache.get(args[0]).user;
    } else {
        user = message.author;
    }

    let avatar = user.displayAvatarURL({
        size: 4096,     // 4096 is the new biggest size of the avatar.
        dynamic: true
    });

    const embed = new Discord.MessageEmbed()
        .setTitle(`${user.tag}'s Avatar`)
        .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
        .setColor(3447003)
        .setImage(avatar)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);

    return message.channel.send(embed);
};

module.exports.help = {
    name: "avatar"
};