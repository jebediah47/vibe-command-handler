const fs = require("fs");

module.exports = (client, Discord) => {
  const command_files = fs
    .readdirSync("./commands/")
    .filter((file) => file.endsWith(".js"));
  if (command_files.length <= 0) {
    return console.log("[LOGS] Couldn't Find Commands!");
  }

  for (const file of command_files) {
    let pull = require(`../commands/${file}`);
    client.commands.set(pull.config.name, pull);
    pull.config.aliases.forEach((alias) => {
      client.aliases.set(alias, pull.config.name);
    });
  }
};
