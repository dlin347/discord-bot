const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function kickMember(interaction) {
    const localeFile = await translation(interaction.locale);
    const member = interaction.options.getMember('member');
    const responses = localeFile.categories.moderation.commands.kick.responses;
    const defaultError = responses.defaultError.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name);

    if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) {
        const message = await permissions(interaction.locale, 'KICK_MEMBERS');
        return interaction.reply({ content: message, ephemeral: true });
    }

    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.KickMembers)) {
        const noPermissionsError = responses.noPermissionsError.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name);
        return interaction.reply({ content: noPermissionsError, ephemeral: true });
    }

    if (interaction.guild.members.me.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        const higherRoleError = responses.higherRoleError.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name);
        return interaction.reply({ content: higherRoleError, ephemeral: true });
    }

    if (!member.kickable || interaction.user.id === member.id) {
        return interaction.reply({ content: defaultError, ephemeral: true });
    }

    const reason = interaction.options.getString('reason') || localeFile.categories.common.noReason;
    const englishReason = interaction.options.getString('reason') || "No reason provided";

    try {
        await member.kick(englishReason).then(async () => {
            console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY KICKED <<@${member.user.username}>> FROM <<${interaction.guild.name}>> FOR <<${englishReason}>>` + "\x1b[0m")
            const content = responses.success.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name).replace('{{reason}}', reason);
            await interaction.reply({ content: content, ephemeral: true });
            await member.send({ content: `You have been kicked from ${interaction.guild.name} by @${interaction.user.tag}. Reason: ${englishReason}` }).catch(async (e) => {
                console.error("\x1b[31m" + '[/KICK] ' + e.stack + "\x1b[0m");
                const unreachableError = responses.unreachableError.replace('{{member}}', member);
                await interaction.followUp({ content: unreachableError, ephemeral: true });
            });
        });
    } catch (e) {
        console.error("\x1b[31m" + '[/KICK] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}