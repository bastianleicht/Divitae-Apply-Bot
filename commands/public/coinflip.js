/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
// jshint multistr: true 
const Discord = require('discord.js');
const config = require('../../opt/config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;

    var choices = [
        "Kopf",
        "Zahl"
    ];

    var output = choices[Math.floor(Math.random()*choices.length)];

    const embed = new Discord.MessageEmbed()
        .setColor(3447003)
        .setTitle('Coinflip')
        .setDescription(`Du hast ${output}`)
        .setImage('https://sendmeapic.files.wordpress.com/2019/10/img_7541.gif')
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);

    message.channel.send(embed);
};

module.exports.help = {
    name: "coinflip"
};