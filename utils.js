//import Discord messageEmbed
const { MessageEmbed } = require('discord.js');

//embed method
function newEmbed(title, fields, footer){
  var embed = {
	  color: 0x0099ff,
	  title: title,
	  description: 'Some description here',
	  fields: fields,
	  timestamp: new Date(),
	  footer: {
		  text: footer,
		  icon_url: 'https://i.imgur.com/AfFp7pu.png',
	  },
  };
  return embed;
}
