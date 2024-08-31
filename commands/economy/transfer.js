const translation = require('../../locales/other/translation.js');

module.exports = async function transfer(interaction) {
    const db = require('megadb');
    const economy = new db.crearDB({
        nombre: 'economy',
        carpeta: 'databases'
    });
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.economy.commands.transfer.responses;
    const member = interaction.options.getMember('member');
    const amount = interaction.options.getInteger('amount');

    try {
        if (!economy.tiene(interaction.guild.id + '.users.' + member.id)) {
            await economy.establecer(interaction.guild.id + '.users.' + member.id, { "money": 0, "moneyBanked": 0, "inventory": [] });
        };

        const authorMoney = await economy.obtener(interaction.guild.id + '.users.' + interaction.user.id + '.money');
        if (authorMoney < amount) return interaction.reply({ content: localeFile.categories.common.noMoneyError, ephemeral: true });

        await economy.restar(interaction.guild.id + '.users.' + interaction.user.id + '.money', amount);
        await economy.sumar(interaction.guild.id + '.users.' + member.id + '.money', amount);
        await interaction.reply({
            content: responses.success
                .replace('{{amount}}', amount)
                .replace('{{member}}', member), ephemeral: true
        });
    } catch (e) {
        console.error("\x1b[31m" + '[/TRANSFER] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError.replace('{{member}}', member), ephemeral: true });
    }
}