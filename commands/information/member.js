const translation = require('../../locales/other/translation.js');

module.exports = async function memberInformation(interaction) {
    const localeFile = await translation(interaction.locale);

    const member = interaction.options.getMember('member') || interaction.member;
    const id = member.id;
    const username = member.user.username;
    const displayName = member.displayName === member.user.username ? localeFile.categories.information.commands.member.responses.embed.none : member.displayName;
    const joinedTimestamp = Math.floor(member.joinedTimestamp / 1000);
    const createdTimestamp = Math.floor(member.user.createdTimestamp / 1000);
    const premiumSinceTimestamp = localeFile.categories.information.commands.member.responses.embed.since.replace('{{timestamp}}', Math.floor(member.premiumSinceTimestamp / 1000)) || localeFile.categories.information.commands.member.responses.embed.no; // This is wrong, need to work on it
    const bot = member.user.bot ? localeFile.categories.information.commands.member.responses.embed.yes : localeFile.categories.information.commands.member.responses.embed.no;
    const permissions = member.permissions.toArray().join(', '); //Limit
    const roles = member.roles.cache.map(r => r.name).join(', '); // Limit
    const avatar = member.user.avatarURL({ dynamic: true, size: 4096 }) || member.user.defaultAvatarURL;
    const defaultError = localeFile.categories.information.commands.member.responses.defaultError.replace('{{member}}', `<@${member.id}>`);
}