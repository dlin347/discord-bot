const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function removeMoney(interaction) {
    if (!interaction.member.permissions.has(PermissionFlagsBits.Administrator)) {
        const message = await permissions(interaction.locale, 'ADMINISTRATOR');
        return interaction.reply({ content: message, ephemeral: true });
    }

    const db = require('megadb');
    const economy = new db.crearDB({
        nombre: 'economy',
        carpeta: 'databases'
    });
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.economy.commands.removemoney.responses;
    const member = interaction.options.getMember('member');
    const amount = interaction.options.getInteger('amount');

    try {
        if (!economy.tiene(interaction.guild.id + '.users.' + member.id)) {
            await economy.establecer(interaction.guild.id + '.users.' + member.id, { "money": 0, "moneyBanked": 0, "inventory": [] });
        };
        await economy.restar(interaction.guild.id + '.users.' + member.id + '.money', amount);
        await interaction.reply({
            content: responses.success
                .replace('{{amount}}', amount)
                .replace('{{member}}', member), ephemeral: true 
            });
        } catch (e) {
            console.error("\x1b[31m" + '[/REMOVE-MONEY] ' + e.stack + "\x1b[0m");
            await interaction.reply({ content: responses.defaultError.replace('{{member}}', member), ephemeral: true });
        }
    }