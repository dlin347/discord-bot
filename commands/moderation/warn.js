const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function warnMember(interaction) {
    const localeFile = await translation(interaction.locale);
    const member = interaction.options.getMember('member');
    const responses = localeFile.categories.moderation.commands.warn.responses;
    const defaultError = responses.defaultError.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name);

    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
        const message = await permissions(interaction.locale, 'MANAGE_MESSAGES');
        return interaction.reply({ content: message, ephemeral: true });
    }

    if (interaction.guild.members.me.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        const higherRoleError = responses.higherRoleError.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name);
        return interaction.reply({ content: higherRoleError, ephemeral: true });
    }

    if (interaction.user.id === member.id) {
        return interaction.reply({ content: defaultError, ephemeral: true });
    }

    const reason = interaction.options.getString('reason') || localeFile.categories.common.noReason;
    const englishReason = interaction.options.getString('reason') || "No reason provided";

    try {
        // Choose database
        // Warn member ==> Save in database with author of the command (maybe case id for each guild), try to reach the member
        // Cybot Actions: Do X when user reaches a specific number of warns (reset?)
    } catch (e) {
        console.error("\x1b[31m" + '[/WARN] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}