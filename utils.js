//import Discord messageEmbed
const { MessageEmbed } = require('discord.js');

//full embed method
function fullEmbed(color, title, author, description, thumbnail, fields, footer){
  var embed = {
	  color: color,
	  title: title,
    author : author,
	  description: description,
    thumbnail: thumbnail,
	  fields: fields,
	  timestamp: new Date(),
	  footer: {
		  text: footer,
		  icon_url: 'https://i.imgur.com/AfFp7pu.png',
	  },
  };
  return embed;
}

//stripped embed
function smallEmbed(color, title, author, description, footer){
  var embed = {
	  color: 0x0099ff,
	  title: title,
	  description: description,
	  footer: {
		  text: footer,
	  },
  };
  return embed;
}

export { fullEmbed, smallEmbed }
