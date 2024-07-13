const { EmbedBuilder } = require('discord.js');
const translation = require('../../locales/other/translation.js');
const permissions = require('../../functions/permissions/permissions.js')
const limit = require('../../functions/text/limit.js');

module.exports = async function memberInformation(interaction) {
    const localeFile = await translation(interaction.locale);
    const member = interaction.options.getMember('member') || interaction.member;
    const responsesEmbed = localeFile.categories.information.commands.member.responses.embed;
    const defaultError = localeFile.categories.information.commands.member.responses.defaultError.replace('{{member}}', `<@${member.id}>`);

    try {
        const displayName = member.displayName === member.user.username ? responsesEmbed.none : member.displayName;
        const createdTimestamp = Math.floor(member.user.createdTimestamp / 1000);
        const joinedTimestamp = Math.floor(member.joinedTimestamp / 1000);
        const premiumSinceTimestamp = member.premiumSinceTimestamp ? Math.floor(member.premiumSinceTimestamp / 1000) : null;
        const premiumSince = premiumSinceTimestamp ? responsesEmbed.since.replace('{{timestamp}}', `<t:${premiumSinceTimestamp}:F> (<t:${premiumSinceTimestamp}:R>)`) : responsesEmbed.no;
        const isBot = member.user.bot ? responsesEmbed.yes : responsesEmbed.no;
        const roles = await limit(member.roles.cache.map(role => role.name === '@everyone' ? role.name : '@' + role.name).join(', '), 1000);
        const perms = await limit(interaction.guild.members.me.permissions.toArray().map(permission => permissions[permission]).join(', '), 1018);
        const avatar = member.user.avatarURL({ forceStatic: false, size: 4096 }) || member.user.defaultAvatarURL;

        const embed = new EmbedBuilder()
            .setColor('#181A1C')
            .setAuthor({ name: `@${member.user.username}`, iconURL: avatar, url: avatar })
            .setThumbnail(avatar)
            .setTitle(responsesEmbed.title)
            .addFields(
                { name: 'ID', value: member.id },
                { name: responsesEmbed.username, value: member.user.username },
                { name: responsesEmbed.nickname, value: displayName },
                { name: responsesEmbed.createdAt, value: `<t:${createdTimestamp}:F> (<t:${createdTimestamp}:R>)` },
                { name: responsesEmbed.joinedAt, value: `<t:${joinedTimestamp}:F> (<t:${joinedTimestamp}:R>)` },
                { name: responsesEmbed.booster, value: premiumSince },
                { name: responsesEmbed.isBot, value: isBot },
                { name: responsesEmbed.roles.replace('{{amount}}', member.roles.cache.size), value: '```' + roles + '```' },
                { name: responsesEmbed.permissions, value: '```' + perms + '```' }
            );

        await interaction.reply({ embeds: [embed], ephemeral: true });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</MEMBER>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");

    } catch (e) {
        console.error("\x1b[31m" + '[/MEMBER] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}