const translation = require('../../locales/other/translation.js');

module.exports = async function coinflip(interaction) {
    const localeFile = await translation(interaction.locale);
    const question = interaction.options.getString('question');
    const responses = localeFile.categories.fun.commands.eightball.responses;
    const random = Math.floor(Math.random() * responses.array.length);
    const content = responses.answer
        .replace('{{question}}', question)
        .replace('{{answer}}', responses.array[random]);

    try {
        await interaction.reply({ content: content, ephemeral: true });
    } catch (e) {
        console.error("\x1b[31m" + '[/8BALL] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError, ephemeral: true });
    }
}