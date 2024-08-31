const translation = require('../../locales/other/translation.js');
const permissions = require('../../locales/other/permissions.js');
const { PermissionFlagsBits } = require('discord.js');

module.exports = async function warnMember(interaction) {
    const db = require('megadb');
    const warnings = new db.crearDB({
        nombre: 'warnings',
        carpeta: 'databases'
    });
    const localeFile = await translation(interaction.locale);
    const member = interaction.options.getMember('member');
    const responses = localeFile.categories.moderation.commands.warn.responses;
    const defaultError = responses.defaultError
        .replace('{{member}}', member)
        .replace('{{guild}}', interaction.guild.name);

    if (!interaction.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
        const message = await permissions(interaction.locale, 'MANAGE_MESSAGES');
        return interaction.reply({ content: message, ephemeral: true });
    }

    if (interaction.guild.members.me.roles.highest.comparePositionTo(member.roles.highest) <= 0) {
        const higherRoleError = responses.higherRoleError
            .replace('{{member}}', member)
            .replace('{{guild}}', interaction.guild.name);
        return interaction.reply({ content: higherRoleError, ephemeral: true });
    }

    if (interaction.user.id === member.id) {
        return interaction.reply({ content: defaultError, ephemeral: true });
    }

    if (!warnings.tiene(interaction.guild.id + '.users.' + member.id)) {
        await warnings.establecer(interaction.guild.id + '.users.' + member.id, []);
    }

    const reason = interaction.options.getString('reason') || localeFile.categories.common.noReason;
    const englishReason = interaction.options.getString('reason') || "No reason provided";
    const warns = await warnings.obtener(`${interaction.guild.id}.users.${member.id}`);

    try {
        await warnings.push(interaction.guild.id + '.users.' + member.id, {
            "id": warns.length + 1,
            "moderator": interaction.user.id,
            "reason": englishReason,
            "date": interaction.createdTimestamp
        });
        await interaction.reply({
            content: responses.success
                .replace('{{member}}', member)
                .replace('{{guild}}', interaction.guild.name)
                .replace('{{reason}}', reason), ephemeral: true
        });
        await member.send({ content: `You have been warned in ${interaction.guild.name} by @${interaction.user.tag}. Reason: ${englishReason}` }).catch(async (e) => {
            console.error("\x1b[31m" + '[/WARN] ' + e.stack + "\x1b[0m");
            const unreachableError = responses.unreachableError.replace('{{member}}', member);
            await interaction.followUp({ content: unreachableError, ephemeral: true });
        });
    } catch (e) {
        console.error("\x1b[31m" + '[/WARN] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}