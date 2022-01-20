const Discord = require('discord.js')
const client = new Discord.Client({
	allowedMentions: {
		parse: ['users'],
		repliedUser: true,
	},
	intents: [
		"GUILDS",
		"GUILD_MESSAGES",
		"GUILD_PRESENCES",
		"GUILD_MEMBERS",
		"GUILD_MESSAGE_REACTIONS"
	],
});
const config = require("./config.js");
console.log(config.token)


client.login(config.token);
sayCMD = ""

client.on("ready", () =>{
	console.log("Bot started up.")
})

client.on("messageCreate", async messageCreate => {
	if (messageCreate.author.bot) return;

	if (messageCreate.content.startsWith('!say')){
		sayCMD = messageCreate.content.slice(4)
		messageCreate.channel.send(sayCMD)
	}
	if (messageCreate.author.id === "314197872209821699"){
		messageCreate.channel.send("rat")
	}
	if (messageCreate.content === "!shutdown"){
		if (messageCreate.author.id === "626401322542956546"){
			messageCreate.channel.send(":warning: Shutting Down...")
			setTimeout(() => {client.destroy();}, 2000)
		}
	}
	if (messageCreate.content.startsWith("!kick")){
		if (messageCreate.author.id === "626401322542956546"){
			var member = messageCreate.mentions.members.first();

			member.kick()
			messageCreate.channel.send(":wave: " + member.displayName + "has been kicked")
		}
	}
	if (messageCreate.content.startsWith("!ban")){
		if (messageCreate.author.id === "626401322542956546"){
			var member = messageCreate.mentions.members.first();

			member.ban()
			messageCreate.channel.send(":wave: " + member.displayName + "has been banned")
		}
	}
	if (messageCreate.content.startsWith("!clear")){
		num = messageCreate.content.slice(6)
		parseInt(num)

		messageCreate.channel.bulkDelete(num)
		.then(messages => {messageCreate.channel.send(`** \`${messages.size}/${num}\` messages deleted successfully** `)})
	}
	if (messageCreate.content.startsWith("!say-a-joke")){
		messageCreate.channel.send("Why can't a bicycle stand on its own? It's two-tired.")
		setTimeout(500)
		messageCreate.channel.send("Found out I was color blind the other day. That one came right out of the orange.")
		setTimeout(500)
		messageCreate.channel.send("What did the grape say when it was stepped on? Nothing, it just let out a little wine.")
		setTimeout(500)
		messageCreate.channel.send("Why can't you play poker on the African Savanna? There's too many cheetahs.")
		setTimeout(500)
		messageCreate.channel.send("To the guy who invented zero: Thanks for nothing!")
		setTimeout(500)
		messageCreate.channel.send("What do a tick and the Eiffel Tower have in common? They're both Paris sites.")
	}
})
