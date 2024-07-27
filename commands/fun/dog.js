const translation = require('../../locales/other/translation.js');
const axios = require('axios');

module.exports = async function dog(interaction) {
    const localeFile = await translation(interaction.locale);
    try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        await interaction.reply({ files: [response.data.message] });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</DOG>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");
    } catch (e) {
        console.error("\x1b[31m" + '[/DOG] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: localeFile.categories.fun.commands.dog.responses.defaultError, ephemeral: true });
    }
}