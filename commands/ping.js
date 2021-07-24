const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args, Discord) => {
  message.channel.send(
    new MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Yay!")
      .setDescription("🏓Pong!")
      .setTimestamp()
  );
};

module.exports.run = {
  name: "ping",
  description: "Send you a pong response",
  aliases: [],
};
