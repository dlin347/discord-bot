const { EmbedBuilder } = require('discord.js');
const translation = require('../../locales/other/translation.js');

module.exports = async function avatarMember(interaction) {
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.information.commands.avatar.responses;
    const member = interaction.options.getMember('member') || interaction.member;
    const defaultError = responses.defaultError.replace('{{member}}', member);
    let content, footer, forceStatic = true;

    try {
        let extension = interaction.options.getString('extension') || 'png';
        const resolution = Number(interaction.options.getString('resolution')) || 4096;

        if (member.user.avatarURL()) {
            if (extension === 'gif' && member.user.avatarURL().includes('.gif')) {
                forceStatic = false;
            } else if (extension === 'gif' && !member.user.avatarURL().includes('.gif')) {
                content = responses.noDynamicAvatarError.replace('{{member}}', member);
                extension = 'png';
            }
        }

        const avatar = member.user.avatarURL({ size: resolution, extension: extension, forceStatic: forceStatic }) || member.user.defaultAvatarURL;

        if (!member.user.avatarURL()) {
            footer = responses.embed.footer.defaultAvatar.replace('{{member}}', `${member.user.username}`);
        } else {
            footer = responses.embed.footer.resolutionAndExtension
                .replace('{{resolution}}', resolution)
                .replace('{{extension}}', extension);
        };

        const embed = new EmbedBuilder()
            .setColor('#181A1C')
            .setTitle(responses.embed.title.replace('{{member}}', '@' + member.user.username))
            .setURL(avatar)
            .setImage(avatar)
            .setFooter({ text: footer });

        await interaction.reply({ content: content, embeds: [embed], ephemeral: true });
    } catch (e) {
        console.error("\x1b[31m" + '[/AVATAR] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}