const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const convert = require('../../functions/time/convert.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function banMember(interaction) {
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.moderation.commands.ban.responses;
    const member = interaction.options.getMember('member');
    const time = interaction.options.getString('delete_messages');
    const deleteMessages = (await convert(time) / 1000);
    const defaultError = responses.defaultError.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name);

    if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) {
        const message = await permissions(interaction.locale, 'BAN_MEMBERS');
        return interaction.reply({ content: message, ephemeral: true });
    }

    if (!member.bannable) {
        return interaction.reply({ content: defaultError, ephemeral: true });
    }

    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.BanMembers)) {
        const noPermissionsError = responses.noPermissionsError.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name);
        return interaction.reply({ content: noPermissionsError, ephemeral: true });
    }

    if (interaction.guild.members.me.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        const higherRoleError = responses.higherRoleError.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name);
        return interaction.reply({ content: higherRoleError, ephemeral: true });
    }

    if (!deleteMessages && time[0] !== '0') {
        const invalidFormatError = responses.invalidFormatError;
        return interaction.reply({ content: invalidFormatError, ephemeral: true });
    }

    if (deleteMessages > 604800) {
        const exceededTimeError = responses.exceededTimeError;
        return interaction.reply({ content: exceededTimeError, ephemeral: true });
    }

    const reason = interaction.options.getString('reason') || localeFile.categories.common.noReason;
    const englishReason = interaction.options.getString('reason') || "No reason provided";

    try {
        await member.ban({ deleteMessageSeconds: deleteMessages, reason: englishReason }).then(async () => {
            console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY BANNED <<@${member.user.username}>> FROM <<${interaction.guild.name}>> FOR <<${englishReason}>>` + "\x1b[0m");
            const content = responses.success.replace('{{member}}', member).replace('{{guild}}', interaction.guild.name).replace('{{reason}}', reason);
            await interaction.reply({ content: content, ephemeral: true });
            await member.send({ content: `You have been banned from ${interaction.guild.name} by @${interaction.user.tag}. Reason: ${englishReason}` }).catch(async (e) => {
                console.error("\x1b[31m" + '[/BAN] ' + e.stack + "\x1b[0m");
                const unreachableError = responses.unreachableError.replace('{{member}}', member);
                await interaction.followUp({ content: unreachableError, ephemeral: true });
            });
        });
    } catch (e) {
        console.error("\x1b[31m" + '[/BAN] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}