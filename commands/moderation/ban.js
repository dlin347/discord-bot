module.exports = async function banMember(interaction) {
    const translation = require('../../locales/other/translation.js');
    const permissions = require('../../locales/other/permissions.js');
    const { PermissionFlagsBits } = require('discord.js');

    const localeFile = await translation(interaction.locale);
    const member = interaction.options.getMember('member');
    const defaultError = localeFile.categories.moderation.commands.ban.responses.defaultError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const noPermissionsError = localeFile.categories.moderation.commands.ban.responses.noPermissionsError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const higherRoleError = localeFile.categories.moderation.commands.ban.responses.higherRoleError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const message = await permissions(interaction.locale, 'BAN_MEMBERS');
    if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) return interaction.reply({ content: message, ephemeral: true });
    if (!member.bannable) return interaction.reply({ content: defaultError, ephemeral: true });
    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.BanMembers)) return interaction.reply({ content: noPermissionsError, ephemeral: true });
    if (interaction.guild.members.me.roles.highest.comparePositionTo(member.roles.highest) <= 0) return interaction.reply({ content: higherRoleError, ephemeral: true });

    const reason = interaction.options.getString('reason') ?? localeFile.categories.common.noReason;
    const reasonEnUS = (interaction.options.getString('reason') ? interaction.options.getString('reason') : "No reason provided");
    const content = localeFile.categories.moderation.commands.ban.responses.success.replace('{{member}}', `<@${member.id}>`).replace('{{reason}}', reason);
    const deleteMessages = interaction.options.getBoolean('delete_messages') ? (60 * 60 * 24 * 7) : 0;

    try {
        await member.send({ content: `You have been banned from ${interaction.guild.name} by <@${interaction.user.id}>. Reason: ${reasonEnUS}` });
        await member.ban({ deleteMessageSeconds: deleteMessages, reason: reasonEnUS });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY BANNED <<@${member.user.username}>> FROM <<${interaction.guild.name}>>.` + "\x1b[0m");
        await interaction.reply({ content: content, ephemeral: true });
    } catch (e) {
        await interaction.reply({ content: defaultError, ephemeral: true });
        console.error("\x1b[31m" + e + "\x1b[0m");
    }
}