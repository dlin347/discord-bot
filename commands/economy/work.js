const translation = require('../../locales/other/translation.js');

/* 
Find a way to add subcommand cooldown
*/

module.exports = async function work(interaction) {
    const db = require('megadb');
    const economy = new db.crearDB({
        nombre: 'economy',
        carpeta: 'databases'
    });
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.economy.commands.work.responses;

    if (!economy.tiene(interaction.guild.id + '.users.' + interaction.user.id)) {
        await economy.establecer(interaction.guild.id + '.users.' + interaction.user.id, { "money": 0, "moneyBanked": 0, "inventory": [] });
    }

    try {
        const amount = Math.floor(Math.random() * 500);
        await economy.sumar(interaction.guild.id + '.users.' + interaction.user.id + '.money', amount);
        await interaction.reply({
            content: responses.success
                .replace('{{work}}', responses.works[Math.floor(Math.random() * responses.works.length)])
                .replace('{{amount}}', amount), ephemeral: true
        });
    } catch (e) {
        console.error("\x1b[31m" + '[/WORK] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError, ephemeral: true });
    }
}