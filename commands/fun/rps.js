const translation = require('../../locales/other/translation.js');

module.exports = async function rps(interaction) {
    let content;
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.fun.commands.rps.responses;
    const choice = await interaction.options.getString('choice');
    const botChoice = ['🪨', '🧻', '✂️'][Math.floor(Math.random() * 3)];

    if (choice == botChoice) {
        return await interaction.reply({ content: responses.draw.replace('{{choice}}', choice), ephemeral: true });
    }

    try {
        switch (choice) {
            case '🪨':
                if (botChoice == '🧻') {
                    content = responses.lose;
                } else {
                    content = responses.win;
                }
                break;
            case '🧻':
                if (botChoice == '✂️') {
                    content = responses.lose;
                } else {
                    content = responses.win;
                }
                break;
            case '✂️':
                if (botChoice == '🪨') {
                    content = responses.lose;
                } else {
                    content = responses.win;
                }
                break;
        }
        await interaction.reply({ content: content.replace('{{choice}}', choice).replace('{{botChoice}}', botChoice), ephemeral: true });
    } catch (e) {
        console.error("\x1b[31m" + '[/RPS] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError, ephemeral: true });
    }
}