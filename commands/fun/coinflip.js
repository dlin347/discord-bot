const translation = require('../../locales/other/translation.js');
const path = require('node:path');

module.exports = async function coinflip(interaction) {
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.fun.commands.coinflip.responses;
    const random = Math.random();
    let coin = responses.result;

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
            await interaction.editReply({ content: coin, files: [], ephemeral: true });
        }, 6100)
    } catch (e) {
        console.error("\x1b[31m" + '[/COINFLIP] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError, ephemeral: true });
    }
}