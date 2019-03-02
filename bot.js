const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!Nico') {
    	message.reply('https://www.youtube.com/channel/UCbRYNQBrDjF22Z4RWXWgBAw');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.JGZ9zOsv4c-Ja_0GJR1GYt6f3W-NHgsl);
