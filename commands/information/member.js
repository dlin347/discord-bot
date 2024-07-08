const translation = require('../../locales/other/translation.js');

module.exports = async function memberInformation(interaction) {
    // To Do: Embed and response
    const member = interaction.options.getMember('member') || interaction.member;
    console.log(member.id)
    console.log(member.user.username)
    console.log(member.displayName === member.user.username ? 'None Translated' : member.displayName)
    console.log(member.user.createdAt.toLocaleString(interaction.locale)) // To Do: Display other format of date
    console.log(member.joinedAt.toLocaleString(interaction.locale)) // To Do: Display other format of date
    console.log(member.boostingSince ? member.premiumSince.toLocaleString(interaction.locale) : 'No Translated') // To Do: Display date of boosting since with translated response
    console.log(member.user.bot ? 'Yes Translated' : 'No Translated')
    console.log(member.permissions.toArray().join(', ')) // To Do: Limit
    console.log(member.roles.cache.map(r => r.name).join(', ')) // To Do: Limit
    console.log(member.user.avatarURL({ dynamic: true, size: 4096 }) ?? member.user.defaultAvatarURL)
}