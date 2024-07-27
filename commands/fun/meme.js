/* 
    Since memes are only available in english I have decided to remove the translation function from this file.
*/
const { generate } = require('rmeme');

module.exports = async function meme(interaction) {
    try {
        await interaction.reply({ content: 'Here is a random meme image for you:', files: [generate()], ephemeral: true });
        console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY USED <</MEME>> IN (<<${interaction.guild.name}>>)` + "\x1b[0m");
    } catch (e) {
        console.error("\x1b[31m" + '[/MEME] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: 'I can\'t get a random meme right now... Try again later', ephemeral: true });
    }
}