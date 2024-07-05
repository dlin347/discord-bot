const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function deleteMessages(interaction) {
    const localeFile = await translation(interaction.locale);
    const amount = interaction.options.getNumber('amount');
    const channel = interaction.options.getChannel('channel') || interaction.channel;
    const defaultError = localeFile.categories.moderation.commands.delete_messages.responses.defaultError.replace('{{channel}}', `<#${channel.id}>`);
    const noPermissionsError = localeFile.categories.moderation.commands.delete_messages.responses.noPermissionsError.replace('{{channel}}', `<#${channel.id}>`);
    const message = await permissions(interaction.locale, 'MANAGE_MESSAGES');

    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
        return interaction.reply({ content: message, ephemeral: true });
    }

    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.ManageMessages)) {
        return interaction.reply({ content: noPermissionsError, ephemeral: true });
    }

    try {
        const messages = await channel.bulkDelete(amount);
        const realAmount = messages.size;
        const content = localeFile.categories.moderation.commands.delete_messages.responses.success.replace('{{amount}}', realAmount).replace('{{channel}}', `<#${channel.id}>`);
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY DELETED <<${realAmount} MESSAGES>> FROM <<#${channel.name}>> (<<${interaction.guild.name}>>)` + "\x1b[0m");
        await interaction.reply({ content: content, ephemeral: true });
    } catch (e) {
        console.error("\x1b[31m" + '[/DELETE-MESSAGES] ' + e + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}