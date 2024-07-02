const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function mute(interaction) {
    const localeFile = await translation(interaction.locale);
    const member = interaction.options.getMember('member');
    const defaultError = localeFile.categories.moderation.commands.mute.responses.defaultError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const noPermissionsError = localeFile.categories.moderation.commands.mute.responses.noPermissionsError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const higherRoleError = localeFile.categories.moderation.commands.mute.responses.higherRoleError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const muteRoleIsHigherError = localeFile.categories.moderation.commands.mute.responses.muteRoleIsHigherError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
    const alreadyMutedError = localeFile.categories.moderation.commands.mute.responses.alreadyMutedError.replace('{{member}}', `<@${member.id}>`);
    const message = await permissions(interaction.locale, 'MANAGE_ROLES');

    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageRoles)) {
        return interaction.reply({ content: message, ephemeral: true });
    }

    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.ManageRoles)) {
        return interaction.reply({ content: noPermissionsError, ephemeral: true });
    }

    if (interaction.guild.members.me.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        return interaction.reply({ content: higherRoleError, ephemeral: true });
    }

    const reason = interaction.options.getString('reason') ?? localeFile.categories.common.noReason;
    const reasonEnUS = interaction.options.getString('reason') ?? "No reason provided";
    const content = localeFile.categories.moderation.commands.mute.responses.success.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name).replace('{{reason}}', reason);

    let role = interaction.guild.roles.cache.find(role => role.name === 'Muted');
    if (!role) {
        role = await interaction.guild.roles.create({
            name: 'Muted',
            color: '#808080',
            position: interaction.guild.members.me.roles.highest.position - 1,
            /* permissions: , */
            reason: 'Create muted role for mute command'
        });
    } else {
        /* await role.setPermissions(); */
        await role.setPosition(interaction.guild.members.me.roles.highest.position - 1);
    }

    if (member.roles.cache.has(role.id)) {
        return interaction.reply({ content: alreadyMutedError, ephemeral: true });
    }

    if (role.position < member.roles.highest.position || role.position > interaction.guild.members.me.roles.highest.position) {
        return interaction.reply({ content: muteRoleIsHigherError, ephemeral: true });
    }

    try {
        await member.roles.add(role, reasonEnUS);
        await member.send({ content: `You have been muted from ${interaction.guild.name} by @${interaction.user.tag}. Reason: ${reasonEnUS}` });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY MUTED <<@${member.user.username}>> FROM <<${interaction.guild.name}>>.` + "\x1b[0m");
        await interaction.reply({ content: content, ephemeral: true });
    } catch (e) {
        await interaction.reply({ content: defaultError, ephemeral: true });
        console.error("\x1b[31m" + e + "\x1b[0m");
    }
}
