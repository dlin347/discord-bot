const translation = require('../../locales/other/translation.js');

module.exports = async function balance(interaction) {
    const db = require('megadb');
    const economy = new db.crearDB({
        nombre: 'economy',
        carpeta: 'databases'
    });
    const localeFile = await translation(interaction.locale);
    const responses = localeFile.categories.economy.commands.balance.responses;
    const content = interaction.options.getMember('member') ? responses.success : responses.self;
    const member = interaction.options.getMember('member') || interaction.member;

    try {
        if (!economy.tiene(interaction.guild.id + '.users.' + member.id)) {
            await economy.establecer(interaction.guild.id + '.users.' + member.id, { "money": 0, "moneyBanked": 0, "inventory": [] });
        };

        const money = await economy.obtener(interaction.guild.id + '.users.' + member.id + '.money');
        const moneyBanked = await economy.obtener(interaction.guild.id + '.users.' + member.id + '.moneyBanked');

        await interaction.reply({
            content: content
                .replace('{{member}}', member)
                .replace('{{cash}}', money)
                .replace('{{bank}}', moneyBanked), ephemeral: true
        });
    } catch (e) {
        console.error("\x1b[31m" + '[/BALANCE] ' + e.stack + "\x1b[0m");
        await interaction.reply({ content: responses.defaultError.replace('{{member}}', member), ephemeral: true });
    }
}