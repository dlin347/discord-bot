const translation = require('../../locales/other/translation.js');

module.exports = async function dice(interaction) {
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.fun.commands.dice.responses;
    const dice = Math.floor(Math.random() * 6) + 1;

    try {
        await interaction.reply({ content: responses.result.replace('{{result}}', dice), ephemeral: true });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</DICE>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");
    } catch (e) {
        console.error("\x1b[31m" + '[/DICE] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError, ephemeral: true });
    }
}