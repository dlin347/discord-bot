const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const convert = require('../../functions/time/convert.js')
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function slowmodeChannel(interaction) {
    const localeFile = await translation(interaction.locale);
    const time = interaction.options.getString('time');
    const timeS = ((await convert(time)) / 1000);
    const channel = interaction.options.getChannel('channel') || interaction.channel;
    const defaultError = localeFile.categories.moderation.commands.slowmode.responses.defaultError.replace('{{channel}}', `<#${channel.id}>`);

    if (!timeS) {
        const invalidFormatError = localeFile.categories.moderation.commands.slowmode.responses.invalidFormatError;
        return interaction.reply({ content: invalidFormatError, ephemeral: true });
    }

    if (timeS > 21600) {
        const exceededTimeError = localeFile.categories.moderation.commands.slowmode.responses.exceededTimeError;
        return interaction.reply({ content: exceededTimeError, ephemeral: true });
    }

    if (channel.rateLimitPerUser === timeS) {
        const sameSlowmodeError = localeFile.categories.moderation.commands.slowmode.responses.sameSlowmodeError.replace('{{channel}}', `<#${channel.id}>`).replace('{{time}}', time);
        return interaction.reply({ content: sameSlowmodeError, ephemeral: true });
    }

    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageChannels)) {
        const message = await permissions(interaction.locale, 'MANAGE_CHANNELS');
        return interaction.reply({ content: message, ephemeral: true });
    }

    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.ManageChannels)) {
        const noPermissionsError = localeFile.categories.moderation.commands.slowmode.responses.noPermissionsError.replace('{{channel}}', `<#${channel.id}>`);
        return interaction.reply({ content: noPermissionsError, ephemeral: true });
    }

    const reason = interaction.options.getString('reason') || localeFile.categories.common.noReason;
    const englishReason = interaction.options.getString('reason') || "No reason provided";
}