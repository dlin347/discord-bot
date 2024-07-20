const { SlashCommandBuilder } = require('discord.js');

const coinflip = require('./coinflip.js');

const locales = {
    de: require('../../locales/de.json'),
    fr: require('../../locales/fr.json'),
    pt: require('../../locales/pt-BR.json'),
    es: require('../../locales/es-ES.json'),
    tr: require('../../locales/tr.json'),
    ru: require('../../locales/ru.json')
};

module.exports = {
    data: new SlashCommandBuilder()
        .setName('fun')
        .setNameLocalizations({
            de: locales.de.categories.fun.name,
            fr: locales.fr.categories.fun.name,
            "pt-BR": locales.pt.categories.fun.name,
            "es-ES": locales.es.categories.fun.name,
            tr: locales.tr.categories.fun.name,
            ru: locales.ru.categories.fun.name
        })
        .setDescription('Fun category commands')
        .setDescriptionLocalizations({
            de: locales.de.categories.fun.description,
            fr: locales.fr.categories.fun.description,
            "pt-BR": locales.pt.categories.fun.description,
            "es-ES": locales.es.categories.fun.description,
            tr: locales.tr.categories.fun.description,
            ru: locales.ru.categories.fun.description
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('coinflip')
                .setNameLocalizations({
                    de: locales.de.categories.fun.commands.coinflip.name,
                    fr: locales.fr.categories.fun.commands.coinflip.name,
                    "pt-BR": locales.pt.categories.fun.commands.coinflip.name,
                    "es-ES": locales.es.categories.fun.commands.coinflip.name,
                    tr: locales.tr.categories.fun.commands.coinflip.name,
                    ru: locales.ru.categories.fun.commands.coinflip.name
                })
                .setDescription("Flip a coin and get the result")
                .setDescriptionLocalizations({
                    de: locales.de.categories.fun.commands.coinflip.description,
                    fr: locales.fr.categories.fun.commands.coinflip.description,
                    "pt-BR": locales.pt.categories.fun.commands.coinflip.description,
                    "es-ES": locales.es.categories.fun.commands.coinflip.description,
                    tr: locales.tr.categories.fun.commands.coinflip.description,
                    ru: locales.ru.categories.fun.commands.coinflip.description
                })
        )
        .setDMPermission(false),

    async execute(interaction) {
        if (interaction.commandName === 'fun') {
            const subcommand = interaction.options.getSubcommand();
            switch (subcommand) {
                case 'coinflip':
                    await coinflip(interaction);
                    break;
            }
        }
    }
}