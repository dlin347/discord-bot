const { SlashCommandBuilder } = require('discord.js');

const urlShortener = require('./shorten.js');
const clock = require('./clock.js');

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
        .addSubcommand(subcommand =>
            subcommand
                .setName('clock')
                .setNameLocalizations({
                    de: locales.de.categories.utility.commands.clock.name,
                    fr: locales.fr.categories.utility.commands.clock.name,
                    "pt-BR": locales.pt.categories.utility.commands.clock.name,
                    "es-ES": locales.es.categories.utility.commands.clock.name,
                    tr: locales.tr.categories.utility.commands.clock.name,
                    ru: locales.ru.categories.utility.commands.clock.name
                })
                .setDescription('Get information about the current time and date in a specific zone')
                .setDescriptionLocalizations({
                    de: locales.de.categories.utility.commands.clock.description,
                    fr: locales.fr.categories.utility.commands.clock.description,
                    "pt-BR": locales.pt.categories.utility.commands.clock.description,
                    "es-ES": locales.es.categories.utility.commands.clock.description,
                    tr: locales.tr.categories.utility.commands.clock.description,
                    ru: locales.ru.categories.utility.commands.clock.description
                })
                .addStringOption(option =>
                    option
                        .setName('zone')
                        .setNameLocalizations({
                            de: locales.de.categories.utility.commands.clock.options.zone.name,
                            fr: locales.fr.categories.utility.commands.clock.options.zone.name,
                            "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.name,
                            "es-ES": locales.es.categories.utility.commands.clock.options.zone.name,
                            tr: locales.tr.categories.utility.commands.clock.options.zone.name,
                            ru: locales.ru.categories.utility.commands.clock.options.zone.name
                        })
                        .setDescription('The zone you want to get information from')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.utility.commands.clock.options.zone.description,
                            fr: locales.fr.categories.utility.commands.clock.options.zone.description,
                            "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.description,
                            "es-ES": locales.es.categories.utility.commands.clock.options.zone.description,
                            tr: locales.tr.categories.utility.commands.clock.options.zone.description,
                            ru: locales.ru.categories.utility.commands.clock.options.zone.description
                        })
                        .setRequired(true)
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
                case 'clock':
                    await clock(interaction);
                    break;
            }
        }
    }
}