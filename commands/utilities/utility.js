const { SlashCommandBuilder } = require('discord.js');

const urlShortener = require('./shorten.js');

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
        .setName('utility')
        .setNameLocalizations({
            de: locales.de.categories.utility.name,
            fr: locales.fr.categories.utility.name,
            "pt-BR": locales.pt.categories.utility.name,
            "es-ES": locales.es.categories.utility.name,
            tr: locales.tr.categories.utility.name,
            ru: locales.ru.categories.utility.name
        })
        .setDescription('utility category commands')
        .setDescriptionLocalizations({
            de: locales.de.categories.utility.description,
            fr: locales.fr.categories.utility.description,
            "pt-BR": locales.pt.categories.utility.description,
            "es-ES": locales.es.categories.utility.description,
            tr: locales.tr.categories.utility.description,
            ru: locales.ru.categories.utility.description
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('shorten')
                .setNameLocalizations({
                    de: locales.de.categories.utility.commands.shorten.name,
                    fr: locales.fr.categories.utility.commands.shorten.name,
                    "pt-BR": locales.pt.categories.utility.commands.shorten.name,
                    "es-ES": locales.es.categories.utility.commands.shorten.name,
                    tr: locales.tr.categories.utility.commands.shorten.name,
                    ru: locales.ru.categories.utility.commands.shorten.name
                })
                .setDescription('Shorten a URL')
                .setDescriptionLocalizations({
                    de: locales.de.categories.utility.commands.shorten.description,
                    fr: locales.fr.categories.utility.commands.shorten.description,
                    "pt-BR": locales.pt.categories.utility.commands.shorten.description,
                    "es-ES": locales.es.categories.utility.commands.shorten.description,
                    tr: locales.tr.categories.utility.commands.shorten.description,
                    ru: locales.ru.categories.utility.commands.shorten.description
                })
                .addStringOption(option =>
                    option
                        .setName('url')
                        .setNameLocalizations({
                            de: locales.de.categories.utility.commands.shorten.options.url.name,
                            fr: locales.fr.categories.utility.commands.shorten.options.url.name,
                            "pt-BR": locales.pt.categories.utility.commands.shorten.options.url.name,
                            "es-ES": locales.es.categories.utility.commands.shorten.options.url.name,
                            tr: locales.tr.categories.utility.commands.shorten.options.url.name,
                            ru: locales.ru.categories.utility.commands.shorten.options.url.name
                        })
                        .setDescription('The URL to shorten')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.utility.commands.shorten.options.url.description,
                            fr: locales.fr.categories.utility.commands.shorten.options.url.description,
                            "pt-BR": locales.pt.categories.utility.commands.shorten.options.url.description,
                            "es-ES": locales.es.categories.utility.commands.shorten.options.url.description,
                            tr: locales.tr.categories.utility.commands.shorten.options.url.description,
                            ru: locales.ru.categories.utility.commands.shorten.options.url.description
                        })
                        .setRequired(true)
                        .setMaxLength(256)
                )
        )
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.commandName === 'utility') {
            const subcommand = interaction.options.getSubcommand();
            switch (subcommand) {
                case 'shorten':
                    await urlShortener(interaction);
                    break;
            }
        }
    }
}