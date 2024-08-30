const { SlashCommandBuilder } = require('discord.js');

const work = require('./work.js');

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
        .setName('economy')
        .setNameLocalizations({
            de: locales.de.categories.economy.name,
            fr: locales.fr.categories.economy.name,
            "pt-BR": locales.pt.categories.economy.name,
            "es-ES": locales.es.categories.economy.name,
            tr: locales.tr.categories.economy.name,
            ru: locales.ru.categories.economy.name
        })
        .setDescription('Economy category commands')
        .setDescriptionLocalizations({
            de: locales.de.categories.economy.description,
            fr: locales.fr.categories.economy.description,
            "pt-BR": locales.pt.categories.economy.description,
            "es-ES": locales.es.categories.economy.description,
            tr: locales.tr.categories.economy.description,
            ru: locales.ru.categories.economy.description
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('work')
                .setNameLocalizations({
                    de: locales.de.categories.economy.commands.work.name,
                    fr: locales.fr.categories.economy.commands.work.name,
                    "pt-BR": locales.pt.categories.economy.commands.work.name,
                    "es-ES": locales.es.categories.economy.commands.work.name,
                    tr: locales.tr.categories.economy.commands.work.name,
                    ru: locales.ru.categories.economy.commands.work.name
                })
                .setDescription("Work to earn money")
                .setDescriptionLocalizations({
                    de: locales.de.categories.economy.commands.work.description,
                    fr: locales.fr.categories.economy.commands.work.description,
                    "pt-BR": locales.pt.categories.economy.commands.work.description,
                    "es-ES": locales.es.categories.economy.commands.work.description,
                    tr: locales.tr.categories.economy.commands.work.description,
                    ru: locales.ru.categories.economy.commands.work.description
                })
        )
        .setDMPermission(false),

    async execute(interaction) {
        if (interaction.commandName === 'economy') {
            const subcommand = interaction.options.getSubcommand();
            switch (subcommand) {
                case 'work':
                    await work(interaction);
                    break;
            }
        }
    }
}