/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
const Discord = require('discord.js');

exports.run = async (client, message, args) => {

    if (message.author.id != "350618993020764161") return;

    try {
        await message.channel.send("Bot is shutting down!");
        process.exit();
    } catch(e) {
        message.channel.send(`ERROR: ${e.message}`);
    }

    

};

exports.help = {
    name: "stop"
};