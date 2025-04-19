/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
const config = require("../opt/config.json");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    const apply = client.channels.cache.find(c => c.id === config.application.applychannel);
    // const verify = client.channels.cache.find(c => c.name === 'verify');

    client.user.setActivity(`Divitae eSports | ${config.version}`, {
        type: "PLAYING" 
    });

    const fetchedChannels = [apply];
    fetchedChannels.forEach(c => {
        c.messages.fetch({limit: 10}).then(collected => console.log(`Fetched ${collected.size} messages in ${c.name}.`));
    });
};