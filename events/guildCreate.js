const { Events, Collection } = require('discord.js');

module.exports = {
    name: Events.GuildCreate,
    async execute(guild) {
        const db = require('megadb');
        const economy = new db.crearDB({
            nombre: 'economy',
            carpeta: 'databases'
        });

        if (!economy.tiene(guild.id)) {
            await economy.establecer(guild.id, { "configuration": { "items": [] }, "users": {} });
        }
    },
};