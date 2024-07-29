const { EmbedBuilder } = require('discord.js');
const translation = require('../../locales/other/translation.js');
const limit = require('../../functions/text/limit.js');

module.exports = async function serverInformation(interaction) {
    const localeFile = await translation(interaction.locale);
    const responsesEmbed = localeFile.categories.information.commands.server.responses.embed;
    const defaultError = localeFile.categories.information.commands.server.responses.defaultError;
    const { guild } = interaction;

    try {
        const icon = interaction.guild.iconURL({ size: 4096 });
        const createdTimestamp = Math.floor(guild.createdTimestamp / 1000);
        const verificationLevel = responsesEmbed.vLevel[guild.verificationLevel];
        const boostTier = responsesEmbed.bTier[guild.premiumTier];
        const members = guild.members.cache;
        const usersMsg = responsesEmbed.usersMsg
            .replace('{{totalmembers}}', members.size)
            .replace('{{active}}', members.filter(member => member.presence?.status !== 'offline' && member.presence?.status !== undefined).size) // To fix, returning null/undefined
            .replace('{{humans}}', members.filter(member => member.user.bot).size)
            .replace('{{bots}}', members.filter(member => !member.user.bot).size);
        const channels = guild.channels.cache;
        const channelsMsg = responsesEmbed.channelsMsg
            .replace('{{totalchannels}}', channels.size)
            .replace('{{text}}', channels.filter(channel => channel.type === 0).size)
            .replace('{{voice}}', channels.filter(channel => channel.type === 2).size)
            .replace('{{categories}}', channels.filter(channel => channel.type === 4).size);
        const emojis = guild.emojis.cache;
        const emojisMsg = responsesEmbed.emojisMsg
            .replace('{{totalemojis}}', emojis.size)
            .replace('{{static}}', emojis.filter(emoji => !emoji.animated).size)
            .replace('{{animated}}', emojis.filter(emoji => emoji.animated).size);
        const rulesChannel = guild.rulesChannel || responsesEmbed.unset;
        const afkChannel = guild.afkChannel || responsesEmbed.unset;
        const systemChannel = guild.systemChannel || responsesEmbed.unset;
        const roles = await limit(guild.roles.cache.map(role => role.name === '@everyone' ? role.name : '@' + role.name).join(', '), 1000);

        const embed = new EmbedBuilder()
            .setColor('#181A1C')
            .setThumbnail(icon)
            .setTitle(responsesEmbed.title)
            .addFields(
                { name: 'ID', value: guild.id },
                { name: responsesEmbed.name, value: guild.name },
                { name: responsesEmbed.owner, value: `<@${guild.ownerId}>` },
                { name: responsesEmbed.region, value: guild.preferredLocale },
                { name: responsesEmbed.createdAt, value: `<t:${createdTimestamp}:F> (<t:${createdTimestamp}:R>)` },
                { name: responsesEmbed.verificationLevel, value: verificationLevel },
                { name: responsesEmbed.boostTier, value: boostTier },
                { name: responsesEmbed.boosts, value: guild.premiumSubscriptionCount.toString() },
                { name: responsesEmbed.rulesChannel, value: rulesChannel.toString(), inline: true },
                { name: responsesEmbed.afkChannel, value: afkChannel.toString(), inline: true },
                { name: responsesEmbed.systemChannel, value: systemChannel.toString(), inline: true },
                { name: responsesEmbed.users, value: usersMsg, inline: true },
                { name: responsesEmbed.channels, value: channelsMsg, inline: true },
                { name: responsesEmbed.emojis, value: emojisMsg, inline: true },
                { name: responsesEmbed.roles.replace('{{amount}}', guild.roles.cache.size), value: '```' + roles + '```' }
            );

        await interaction.reply({ embeds: [embed], ephemeral: true });
    } catch (e) {
        console.error("\x1b[31m" + '[/SERVER] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}