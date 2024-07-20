const translation = require('../../locales/other/translation.js');

module.exports = async function coinflip(interaction) {
    const path = require('node:path');
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.fun.commands.coinflip.responses;
    let coin = responses.result;
    const random = Math.random();

    try {
        if (random < 0.5) {
            coin = coin.replace('{{result}}', responses.heads);
        } else if (random > 0.5) {
            coin = coin.replace('{{result}}', responses.tails);
        } else if (random === 0.5) {
            coin = coin.replace('{{result}}', responses.edge);
        }

        await interaction.reply({ files: [path.join(__dirname, '../../images/coinflip/result.gif')], ephemeral: true });
        setTimeout(async () => {
            await interaction.editReply({ content: coin, files: [path.join(__dirname, '../../images/coinflip/result.gif')], ephemeral: true });
        }, 5500)
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</COINFLIP>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");
    } catch (e) {
        console.error("\x1b[31m" + '[/COINFLIP] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError, ephemeral: true });
    }
}