const translation = require('../../locales/other/translation.js');

module.exports = async function urlShortener(interaction) {
    const axios = require('axios');
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.utility.commands.shorten.responses;
    const originalURL = await interaction.options.getString('url');

    try {
        const shortenedURL = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalURL)}`);
        interaction.reply({
            content: responses.success
                .replace('{{originalURL}}', originalURL)
                .replace('{{shortenedURL}}', shortenedURL.data), ephemeral: true
        });
    } catch (e) {
        console.error("\x1b[31m" + '[/SHORTEN] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError, ephemeral: true });
    }
}