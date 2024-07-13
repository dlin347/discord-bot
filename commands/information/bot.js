const { EmbedBuilder } = require('discord.js');
const translation = require('../../locales/other/translation.js');
const limit = require('../../functions/text/limit.js');
const convertms = require('../../functions/time/convertms.js');

module.exports = async function botInformation(interaction) {
    const localeFile = await translation(interaction.locale);
    const responsesEmbed = localeFile.categories.information.commands.bot.responses.embed;
    const defaultError = localeFile.categories.information.commands.bot.responses.defaultError;

    try {
        const client = interaction.client;
        const displayName = interaction.guild.members.me.displayName === client.user.username ? responsesEmbed.none : interaction.guild.members.me.displayName;
        const createdTimestamp = Math.floor(interaction.client.user.createdTimestamp / 1000);
        const joinedTimestamp = Math.floor(interaction.guild.members.me.joinedTimestamp / 1000);
        const uptimeTimestamp = await convertms(client.uptime);
        const roles = await limit(interaction.guild.members.me.roles.cache.map(role => role.name === '@everyone' ? role.name : '@' + role.name).join(', '), 1000);
        const avatar = client.user.avatarURL({ dynamic: true, size: 4096 }) || member.user.defaultAvatarURL;

        const embed = new EmbedBuilder()
            .setColor('#181A1C')
            .setThumbnail(avatar)
            .setTitle(responsesEmbed.title.replace('{{bot}}', client.user.username))
            .setFooter({ text: responsesEmbed.createdAndDeveloped })
            .addFields(
                { name: 'ID', value: client.user.id },
                { name: responsesEmbed.username, value: client.user.username },
                { name: responsesEmbed.nickname, value: displayName },
                { name: responsesEmbed.uptime, value: uptimeTimestamp },
                { name: responsesEmbed.ping, value: client.ws.ping + ' ms' },
                { name: responsesEmbed.createdAt, value: `<t:${createdTimestamp}:F> (<t:${createdTimestamp}:R>)` },
                { name: responsesEmbed.joinedAt, value: `<t:${joinedTimestamp}:F> (<t:${joinedTimestamp}:R>)` },
                { name: responsesEmbed.numberCommands, value: 'Not implemented yet!' }, // To modify
                { name: responsesEmbed.help, value: 'Not implemented yet! (</help:id>)' }, // To modify
                { name: responsesEmbed.users, value: await client.users.cache.size.toString(), inline: true },
                { name: responsesEmbed.guilds, value: await client.guilds.cache.size.toString(), inline: true },
                { name: responsesEmbed.channels, value: await client.channels.cache.size.toString(), inline: true },
                { name: responsesEmbed.roles.replace('{{amount}}', interaction.guild.members.me.roles.cache.size), value: '```' + roles + '```' }
            );

        await interaction.reply({ embeds: [embed], ephemeral: true });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</BOT>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");
    } catch (e) {
        console.error("\x1b[31m" + '[/BOT] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}