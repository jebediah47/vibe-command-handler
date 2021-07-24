const config = require("./config.json");
const Discord = require("discord.js");

const client = new Discord.Client();

//commands collection
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();

["commandHandler", "eventHandler"].forEach((handler) => {
  require(`./util/${handler}`)(client, Discord);
});

//client login - presence
client.on("ready", () => {
  console.log(`We have logged in as ${client.user.tag}`);
  client.user.setActivity(config.BOT_PRESENCE, {
    type: config.BOT_PRESENCE_TYPE,
  });
});

client.login(config.TOKEN);
