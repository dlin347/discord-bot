const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function kickMember(interaction) {
    const localeFile = await translation(interaction.locale);
    const member = interaction.options.getMember('member');
    const defaultError = localeFile.categories.moderation.commands.kick.responses.defaultError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const noPermissionsError = localeFile.categories.moderation.commands.kick.responses.noPermissionsError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const higherRoleError = localeFile.categories.moderation.commands.kick.responses.higherRoleError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const message = await permissions(interaction.locale, 'KICK_MEMBERS');

    if (!member.kickable) return interaction.reply({ content: defaultError, ephemeral: true });
    if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply({ content: message, ephemeral: true });
    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply({ content: noPermissionsError, ephemeral: true });
    if (interaction.guild.members.me.roles.highest.comparePositionTo(member.roles.highest) <= 0) return interaction.reply({ content: higherRoleError, ephemeral: true });

    const reason = interaction.options.getString('reason') ?? localeFile.categories.common.noReason;
    const reasonEnUS = interaction.options.getString('reason') ?? "No reason provided";
    const content = localeFile.categories.moderation.commands.kick.responses.success.replace('{{member}}', `<@${member.id}>`).replace('{{reason}}', reason);

    try {
        await member.send({ content: `You have been kicked from ${interaction.guild.name} by @${interaction.user.tag}. Reason: ${reasonEnUS}` });
        await member.kick(reasonEnUS);
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY KICKED <<@${member.user.username}>> FROM <<${interaction.guild.name}>>.` + "\x1b[0m");
        await interaction.reply({ content, ephemeral: true });
    } catch (e) {
        await interaction.reply({ content: defaultError, ephemeral: true });
        console.error("\x1b[31m" + e + "\x1b[0m");
    }
}
