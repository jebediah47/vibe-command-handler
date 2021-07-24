const { PREFIX } = require("../../config.json");

module.exports = (Discord, client, message) => {
  if (message.author.bot || message.channel.type === "dm") return;

  const prefix = PREFIX;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  let commandfile =
    client.commands.get(cmd.slice(prefix.length)) ||
    client.commands.get(client.aliases.get(cmd.slice(prefix.length)));
  if (commandfile) commandfile.run(client, message, args, Discord);
};
