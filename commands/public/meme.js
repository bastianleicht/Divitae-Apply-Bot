/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
// jshint multistr: true 
const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
    const url = 'https://some-random-api.ml/meme';

    let data, response;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch (e) {
        return message.channel.send(`An error has occured, try again!`);
    }

    const embed = new MessageEmbed()
        .setTitle(`Random Meme: `)
        .setDescription(data.caption)
        .setColor(3447003)
        .setImage(data.image)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);

    await message.channel.send(embed);
};