const translation = require('../../locales/other/translation.js');

module.exports = async function clock(interaction) {
    const axios = require('axios');
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.utility.commands.clock.responses;
    const zone = await interaction.options.getString('zone');

    try {
        const information = await axios.get(`https://worldtimeapi.org/api/timezone/${zone}`);
        interaction.reply({
            content: responses.success
                .replace('{{zone}}', zone)
                .replace('{{time}}', information.data.datetime.slice(11, 19))
                .replace('{{date}}', information.data.datetime.slice(0, 10))
                .replace('{{dayweek}}', responses.daysweek[information.data.day_of_week])
                .replace('{{dayyear}}', information.data.day_of_year)
                .replace('{{numberweek}}', information.data.week_number)
                .replace('{{utcoffset}}', information.data.utc_offset), ephemeral: true
        });
    } catch (e) {
        console.error("\x1b[31m" + '[/CLOCK] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.de.datafaultError, ephemeral: true });
    }
}