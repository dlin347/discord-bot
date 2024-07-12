const translation = require('../../locales/other/translation.js');

module.exports = async function ping(interaction) {
    const localeFile = await translation(interaction.locale);
    const success = localeFile.categories.information.commands.ping.responses.success.replace('{{ping}}', `${interaction.client.ws.ping}`);
    const defaultError = localeFile.categories.information.commands.ping.responses.defaultError;

    try {
        await interaction.reply({ content: success, ephemeral: true });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</PING>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");
    } catch (e) {
        console.error("\x1b[31m" + '[/PING] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: defaultError, ephemeral: true });
    }
}