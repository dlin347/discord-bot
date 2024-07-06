require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { clientId, guildId } = require('./config.json');

const commands = [];
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = require(filePath);
        if ('data' in command && 'execute' in command) {
            commands.push(command.data.toJSON());
        }
    }
}

const rest = new REST().setToken(process.env.BOT_TOKEN);
(async () => {
    try {
        console.log("\x1b[32m" +`STARTED REFRESHING SLASH (/) COMMANDS` + "\x1b[0m");
        /* const data = await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands },
        ); */
        const data = await rest.put(
            Routes.applicationCommands(clientId, guildId),
            { body: commands },
        );
        data.forEach(command => {
            console.log("\x1b[32m" + `REFRESHED COMMAND <<${command.name}>> WITH ID <<${command.id}>>` + "\x1b[0m");
        })
    } catch (error) {
        console.error("\x1b[31m" + error + "\x1b[0m");
    }
})();