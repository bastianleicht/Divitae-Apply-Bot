/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.
 */
// jshint esversion: 8
const Discord = require("discord.js");
const client = new Discord.Client();

const fs = require('fs');

const Enmap = require('enmap');

const config = require('./opt/config.json');
client.config = config;

const { GiveawaysManager } = require('discord-giveaways');
client.GiveawaysManager = new GiveawaysManager(client, {
    storage: "./opt/giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

client.commands = new Enmap();

console.log('------------------------------------------------');

fs.readdir('./events/', (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
     if (!file.endsWith('.js')) return;
     const evt = require(`./events/${file}`);
     let evtName = file.split('.')[0];
     console.log(`Loaded event '${evtName}'`);
     client.on(evtName, evt.bind(null, client));
    
    });
    console.log('------------------------------------------------');
});

fs.readdir('./commands/', async (err, files) => {
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Loaded Test Command's '${cmdName}'`);
        client.commands.set(cmdName, props);

    });
    console.log('------------------------------------------------');
});

fs.readdir('./commands/owner/', async (err, files) => {
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/owner/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Loaded Owner Command '${cmdName}'`);
        client.commands.set(cmdName, props);

    });
    console.log('------------------------------------------------');
});

fs.readdir('./commands/team/', async (err, files) => {
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/team/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Loaded Team Command '${cmdName}'`);
        client.commands.set(cmdName, props);

    });
    console.log('------------------------------------------------');
});

fs.readdir('./commands/public/', async (err, files) => {
    files.forEach(file => {
        if (!file.endsWith('.js')) return;
        let props = require(`./commands/public/${file}`);
        let cmdName = file.split('.')[0];
        console.log(`Loaded Public Command '${cmdName}'`);
        client.commands.set(cmdName, props);

    });
    console.log('------------------------------------------------');
});

process.on('unhandledRejection', error => {
    console.error('Unhandled promise rejection:', error);
});


client.login(config.token || process.env.TOKEN);