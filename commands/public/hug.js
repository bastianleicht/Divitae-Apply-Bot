/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
// jshint multistr: true 
const { MessageEmbed } = require('discord.js');
const axios = require('axios');

module.exports.run = async (client, message, args) => {
    const url = 'https://some-random-api.ml/animu/hug';

    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`An error occured!`);
    }

    const embed = new MessageEmbed()
        .setTitle(`@${message.author.username} hugs @${message.mentions.users.first().username || message.mentions.members.first()}`)
        .setImage(data.link)
        .setColor(3447003)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);

    await message.channel.send(embed);
};

exports.help = {
    name: "hug"
};