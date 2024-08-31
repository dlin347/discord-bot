const { Events, Collection } = require('discord.js');

module.exports = {
    name: Events.GuildCreate,
    async execute(guild) {
        const db = require('megadb');
        const economy = new db.crearDB({
            nombre: 'economy',
            carpeta: 'databases'
        });
        const warnings = new db.crearDB({
            nombre: 'warnings',
            carpeta: 'databases'
        });

        if (!economy.tiene(guild.id)) {
            await economy.establecer(guild.id, { "configuration": { "items": [] }, "users": {} });
        };
        if (!warnings.tiene(guild.id)) {
            await warnings.establecer(guild.id, { "users": {} });
        };
    },
};