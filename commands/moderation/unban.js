const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function unbanMember(interaction) {
    const localeFile = await translation(interaction.locale);
    const id = interaction.options.getString('id');
    const responses = localeFile.categories.moderation.commands.unban.responses;
    const invalidIDError = responses.invalidIDError;
    const fetched = await interaction.guild.bans.fetch(id).catch(async (e) => {
        console.error("\x1b[31m" + '[/UNBAN] ' + e.stack + "\x1b[0m");
        return interaction.reply({ content: invalidIDError, ephemeral: true });
    });
    const defaultError = responses.defaultError
        .replace('{{user}}', `<@${fetched.user.id}>`)
        .replace('{{guild}}', interaction.guild.name);

    if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) {
        const message = await permissions(interaction.locale, 'BAN_MEMBERS');
        return interaction.reply({ content: message, ephemeral: true });
    }

    if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.BanMembers)) {
        const noPermissionsError = responses.noPermissionsError
            .replace('{{user}}', `<@${fetched.user.id}>`)
            .replace('{{guild}}', interaction.guild.name);
        return interaction.reply({ content: noPermissionsError, ephemeral: true });
    }

    const reason = interaction.options.getString('reason') || localeFile.categories.common.noReason;
    const englishReason = interaction.options.getString('reason') || "No reason provided";

    try {
        await interaction.guild.members.unban(id, englishReason).then(async () => {
            const content = responses.success
                .replace('{{user}}', `@${fetched.user.username}`)
                .replace('{{guild}}', interaction.guild.name)
                .replace('{{reason}}', reason);
            await interaction.reply({ content: content, ephemeral: true });
        });
    } catch (e) {
        if (e.name === "DiscordAPIError[10026]") {
            return interaction.reply({ content: invalidIDError, ephemeral: true });
        }
        console.error("\x1b[31m" + '[/UNBAN] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}