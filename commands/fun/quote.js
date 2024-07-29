/* 
    Since quotes are only available in english I have decided to remove the translation function from this file.
*/
module.exports = async function quote(interaction) {
    try {
        const quotes = require('../../data/quotes/quotes.json');
        const rposition = Math.floor(Math.random() * quotes.length);
        await interaction.reply({ content: `**${quotes[rposition].quote}**\n~ ${quotes[rposition].author}`, ephemeral: true });
    } catch (e) {
        console.error("\x1b[31m" + '[/QUOTE] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: 'I can\'t get a random quote right now... Try again later', ephemeral: true });
    }
}