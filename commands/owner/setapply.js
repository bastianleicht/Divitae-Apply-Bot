/*
 *   Copyright (c) 2020 Bastian Leicht
 *   All rights reserved.

 */
// jshint esversion: 8
const Discord = require('discord.js');
const config = require('../../opt/config.json');

exports.run = async (client, message, args) => {

    await message.delete().catch(O_o => {});
    if (message.author.bot) return;

    if (message.member.id === '350618993020764161') {
        const anforderung = new Discord.MessageEmbed()
        .setTitle(':beginner: | Anforderungen')
        .setDescription('Hier siehst du die Aktuellen Anforderungen unseres eSport Teames! Diese können sich jederzeit ändern. Trotz den Anforderungen wird meist beim Tryout entschieden in welches Team du kommst.')

        .addField('**Fortnite:**\n\nE-Sports:', '```3x Top 1500 (Placement)\n6000 Arena Punkte\nGeistige Reife und Kompetenz```')
        .addField('Competetive Team:', '```3x Top 4500 (Placement)\n5000 Arena Punkte\nGeistige Reife und Kompetenz```')
        .addField('Academy Team:', '```2,5k Arena Punkte\nGeistige Reife und Kompetenz```')

        .addField('**Valorant**\n\nGod Player:', '```Tournament Erfahrung\nGeistige Reife und Kompetenz\nBrain Play```')
        .addField('Pro Player:', '```Mittlere Erfahrung im Game\nGeistige Reife und Kompetenz```')
        .addField('Noob Player:', '```Keine großen Spiel Erfahrung nötig```')

        .setColor(0x8e44ad)
        .setTimestamp();

        message.channel.send(anforderung);

        const apply = new Discord.MessageEmbed()
        .setTitle(':beginner: | Bewerben')
        .setDescription(`Bitte reagiere mit :bookmark_tabs: auf diese Nachricht, um dich für einen Platz bei Divitae eSports zu bewerben. Bevor du dich bewirbst, empfehlen wir dir, die Anforderungen aller Teams in Ruhe durchzulesen!`)
        .setColor(0x8e44ad)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);
    
        message.channel.send(apply).then(n => n.react('📑')).catch(console.error);
    } else {
        return;
    }

};
exports.help = {
    name: 'setapply'
};