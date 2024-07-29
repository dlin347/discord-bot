/* 
    Since jokes are only available in english (there are not enough support for different langauges). I have decided to remove the translation function from this file.
*/
const axios = require('axios');

module.exports = async function joke(interaction) {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit');
        if (response.data.type === "twopart") {
            await interaction.reply({ content: `**-** ${response.data.setup}\n**-** ${response.data.delivery}`, ephemeral: true });
        } else if (response.data.type === "single") {
            await interaction.reply({ content: `${response.data.joke}`, ephemeral: true });
        }
    } catch (e) {
        console.error("\x1b[31m" + '[/JOKE] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: 'I can\'t get a random joke right now... Try again later', ephemeral: true });
    }
}