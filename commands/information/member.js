const { EmbedBuilder } = require('discord.js');
const translation = require('../../locales/other/translation.js');
const permissions = require('../../functions/permissions/permissions.js')
const limit = require('../../functions/text/limit.js');

module.exports = async function memberInformation(interaction) {
    const localeFile = await translation(interaction.locale);
    const member = interaction.options.getMember('member') || interaction.member;
    const defaultError = localeFile.categories.information.commands.member.responses.defaultError.replace('{{member}}', `<@${member.id}>`);

    try {
        const displayName = member.displayName === member.user.username ? localeFile.categories.information.commands.member.responses.embed.none : member.displayName;
        const createdTimestamp = Math.floor(member.user.createdTimestamp / 1000);
        const joinedTimestamp = Math.floor(member.joinedTimestamp / 1000);
        const premiumSinceTimestamp = member.premiumSinceTimestamp ? Math.floor(member.premiumSinceTimestamp / 1000) : null;
        const premiumSince = premiumSinceTimestamp ? localeFile.categories.information.commands.member.responses.embed.since.replace('{{timestamp}}', `<t:${premiumSinceTimestamp}:F> (<t:${premiumSinceTimestamp}:R>)`) : localeFile.categories.information.commands.member.responses.embed.no;
        const isBot = member.user.bot ? localeFile.categories.information.commands.member.responses.embed.yes : localeFile.categories.information.commands.member.responses.embed.no;
        const perms = await limit(member.permissions.toArray().map(permission => permissions[permission]).join(', '), 1018);
        const roles = await limit(member.roles.cache.map(role => role.name === '@everyone' ? role.name : '@' + role.name).join(', '), 1000);
        const avatar = member.user.avatarURL({ dynamic: true, size: 4096 }) || member.user.defaultAvatarURL;

        const embed = new EmbedBuilder()
            .setColor('#181A1C')
            .setAuthor({ name: `@${member.user.username}`, iconURL: avatar, url: avatar })
            .setThumbnail(avatar)
            .setTitle(localeFile.categories.information.commands.member.responses.embed.title)
            .addFields(
                { name: 'ID', value: member.id },
                { name: localeFile.categories.information.commands.member.responses.embed.username, value: member.user.username },
                { name: localeFile.categories.information.commands.member.responses.embed.nickname, value: displayName },
                { name: localeFile.categories.information.commands.member.responses.embed.createdAt, value: `<t:${createdTimestamp}:F> (<t:${createdTimestamp}:R>)` },
                { name: localeFile.categories.information.commands.member.responses.embed.joinedAt, value: `<t:${joinedTimestamp}:F> (<t:${joinedTimestamp}:R>)` },
                { name: localeFile.categories.information.commands.member.responses.embed.booster, value: premiumSince },
                { name: localeFile.categories.information.commands.member.responses.embed.isBot, value: isBot },
                { name: localeFile.categories.information.commands.member.responses.embed.roles.replace('{{amount}}', member.roles.cache.size), value: '```' + roles + '```' },
                { name: localeFile.categories.information.commands.member.responses.embed.permissions, value: '```' + perms + '```' }
            );

        await interaction.reply({ embeds: [embed], ephemeral: true });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</MEMBER>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");

    } catch (e) {
        console.error("\x1b[31m" + '[/MEMBER] ' + e + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }


}