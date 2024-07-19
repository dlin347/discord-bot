const { EmbedBuilder } = require('discord.js');
const translation = require('../../locales/other/translation.js');
const limit = require('../../functions/text/limit.js');

module.exports = async function serverInformation(interaction) {
    const localeFile = await translation(interaction.locale);
    const responsesEmbed = localeFile.categories.information.commands.server.responses.embed;
    const defaultError = localeFile.categories.information.commands.server.responses.defaultError;

    try {
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
        // Get members that are not offline
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