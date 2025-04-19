/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
const config = require('../opt/config.json');

module.exports = (client, message, guild) => {
    console.log(`Member Count Updated to ` + client.guilds.cache.get(config.serverstats.serverID).memberCount);
    
    client.channels.cache.get(config.serverstats.total).setName(`All Members: ${client.guilds.cache.get(config.serverstats.serverID).memberCount}`);
    // client.channels.cache.get(config.serverstats.member).setName(`Members: ${client.guild.members.cache.filter(m => !m.user.bot).size}`);
    // client.channels.cache.get(config.serverstats.bots).setName(`Bots: ${client.guild.members.cache.filter(m => m.user.bot).size}`);

};