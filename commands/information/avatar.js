const { EmbedBuilder } = require('discord.js');
const translation = require('../../locales/other/translation.js');

module.exports = async function avatarMember(interaction) {
    let footer;
    const localeFile = await translation(interaction.locale);
    const member = interaction.options.getMember('member') || interaction.member;
    const defaultError = localeFile.categories.information.commands.avatar.responses.defaultError.replace('{{member}}', `<@${member.id}>`);

    try {
        const resolution = Number(interaction.options.getString('resolution')) || 4096;
        const extension = interaction.options.getString('extension') || 'png';
        const avatar = member.user.avatarURL({ dynamic: true, size: resolution, extension: extension }) || member.user.defaultAvatarURL;

        if (!member.user.avatarURL()) {
            footer = 'Displaying member\'s default avatar'
        } else {
            footer = 'Resolution: ' + resolution + 'px\n' + 'Extension: ' + '.' + extension
        };

        const embed = new EmbedBuilder()
            .setColor('#181A1C')
            .setTitle(localeFile.categories.information.commands.avatar.responses.embed.title.replace('{{member}}', '@' + member.user.username))
            .setURL(avatar)
            .setImage(avatar)
            .setFooter({ text: footer });

        await interaction.reply({ embeds: [embed], ephemeral: true });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</AVATAR>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");
    } catch (e) {
        console.error("\x1b[31m" + '[/AVATAR] ' + e + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}