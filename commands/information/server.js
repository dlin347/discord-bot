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
        const membersMsg;
        const channels = guild.channels.cache;
        const channelsMsg;
        const emojis = guild.emojis.cache;
        const emojisMsg;

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
                { name: responsesEmbed.boosters, value: guild.premiumSubscriptionCount },
                { name: responsesEmbed.members, value:  },
                { name: responsesEmbed.users, value:  },
                { name: responsesEmbed.channels, value:  },
                { name: responsesEmbed.rulesChannel, value:  },
                { name: responsesEmbed.emojis, value:  },
                { name: responsesEmbed.roles, value:  },
            );

        await interaction.reply({ embeds: [embed], ephemeral: true });

        console.log(interaction.guild.name);
        console.log(interaction.guild.id);
        console.log(interaction.guild.ownerId);
        console.log(interaction.guild.preferredLocale);
        console.log(interaction.guild.createdTimestamp);
        console.log(interaction.guild.verificationLevel);
        console.log(interaction.guild.premiumTier);
        console.log(interaction.guild.premiumSubscriptionCount);
        console.log(interaction.guild.members.cache.size);
        console.log(interaction.guild.members.cache.filter(member => !member.user.bot).size);
        console.log(interaction.guild.members.cache.filter(member => member.user.bot).size);
        console.log(interaction.guild.members.cache.filter(member => member.user.presence.status === 'online').size);
        console.log(interaction.guild.channels.cache.size);
        console.log(interaction.guild.channels.cache.filter(channel => channel.type === 0).size); //TXT
        console.log(interaction.guild.channels.cache.filter(channel => channel.type === 2).size); //VC
        console.log(interaction.guild.channels.cache.filter(channel => channel.type === 4).size); //CAT
        console.log(interaction.guild.rulesChannel || 'Unset');
        console.log(interaction.guild.emojis.cache.size);
        console.log(interaction.guild.emojis.cache.filter(emoji => !emoji.animated).size);
        console.log(interaction.guild.emojis.cache.filter(emoji => emoji.animated).size);

        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</SERVER>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");
    } catch (e) {
        console.error("\x1b[31m" + '[/SERVER] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}