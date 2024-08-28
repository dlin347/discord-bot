const translation = require('../../locales/other/translation.js');

module.exports = async function urlShortener(interaction) {
    const fetch = (await import('node-fetch')).default;
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.utility.commands.shorten.responses;
    const originalURL = await interaction.options.getString('url');

    try {
        const shortenedURL = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(originalURL)}`);
        if (!shortenedURL.ok) return await interaction.reply({ content: responses.defaultError, ephemeral: true });
        interaction.reply({
            content: responses.success
                .replace('{{originalURL}}', originalURL)
                .replace('{{shortenedURL}}', await shortenedURL.text()), ephemeral: true
        });
    } catch (e) {
        console.error("\x1b[31m" + '[/SHORTEN] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError, ephemeral: true });
    }
}