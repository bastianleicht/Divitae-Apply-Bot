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

    var shelfpromote = '719279197452763238'; //Channel Id of the Shelf-promote Channel

    if (message.member.id === '350618993020764161') {
        const embed = new Discord.MessageEmbed()
        .setTitle('📜 | Regeln')
        .addField('§1 Spam', 'Spamming in Text-Channels jeglicher Form, darunter auch Tag-/ Chatspamming und PN Spamming, ist verboten.')
        .addField('§2 Earrape', 'Earrape, d.h. bewusst extrem laute Geräusche zu machen oder abzuspielen, ist in sämtlichen Channels verboten.')
        .addField('§3 IP-Logger und Viren', 'Das Benutzen von IP-Loggern sowie versenden von Viren ist verboten.')
        .addField('§4 Leaks', 'Es dürfen weder Bilder einer Person, noch die Adresse oder andere private Daten, ohne ihre Einverständnis, geleakt werden. Dies ist auch über PN verboten.')
        .addField('§5 Hierachie', 'Anweisungen der Teammitglieder sind ohne Widerspruch Folge zu leisten.')
        .addField('§6 Bots und Raids', 'Die Benutzung von Bot-Accounts und das Durchführen von Raids sind strengstens verboten.')
        .addField('§7 Werbung', `Werbung für andere Discord-Server ist in allen Text- und Voicechannels (außer dem <#${shelfpromote}> Channel), sowie auch über PN, verboten.`)
        .addField('§8 Aufnehmen', 'Das Aufnehmen von Audio oder Video in Voice-Channels ist strengstens verboten.')
        .addField('§9 Beleidigungen', 'Das Beleidigen von Usern ist verboten.')
        .addField('§10 Tierquälerei und Blutinhalte', 'Das Verbreiten von Videos und Bildern, welche Tierquälerei oder Blutinhalte zeigen, ist verboten.')
        .addField('§11 Kinderpornographie', 'Das Verbreiten von Pornographie Minderjähriger ist strengstens verboten und kann zur Anzeige gebracht werden!')
        .addField('§12 Drohung und Erpressung', 'Das Drohen und Erpressen von Usern, beispielsweise mit einem Leak, ist verboten.')
        .addField('§13 Namensgebung', 'Jeder Nutzer ist dazu verpflichtet seinen Name so zu wählen, das er nicht beleidigend ist. Das Faken eines Nutzers ist verboten.')
        .addField('§14 Spam', 'Spam in jeglicher Form ist untersagt und wird mit einem Mute, Kick oder Ban bestraft.')
        .addField('§15 Channel-hopping', 'Das ständige betreten und verlassen eines Channels ist untersagt.')
        .addField('§16 Unwissenheit', 'Unwissenheit schützt vor Strafe nicht.')
        .addField('Generell', 'Es gelten die ToS von Discord! (https://discordapp.com/terms)\n\nVerstöße gegen das Regelwerk werden mit Tempmutes, Permamutes und Bans bestraft. Bei einem Mute wird einem nur noch der Zugang zum Jailbereich gestattet, wo dieses Regelwerk ebenso Anwendung findet. Das Serverteam hat das Recht die Regeln zu jeder Zeit anzupassen!')
        .setColor(0x8e44ad)
        .setTimestamp()
        .setFooter(`© 2020 Divitae`);
    
        message.channel.send(embed).then(n => n.react('✋')).catch(console.error);
    } else {
        return;
    }

};
exports.help = {
    name: 'setrules'
};