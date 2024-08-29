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
                        .addChoices(
                            {
                                name: "America > New York",
                                value: "America/New_York",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.newyork,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.newyork,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.newyork,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.newyork,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.newyork,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.newyork
                                }
                            },
                            {
                                name: "America > Los Angeles",
                                value: "America/Los_Angeles",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.losangeles,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.losangeles,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.losangeles,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.losangeles,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.losangeles,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.losangeles
                                }
                            },
                            {
                                name: "America > Mexico City",
                                value: "America/Mexico_City",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.mexicocity,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.mexicocity,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.mexicocity,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.mexicocity,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.mexicocity,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.mexicocity
                                }
                            },
                            {
                                name: "America > Buenos Aires",
                                value: "America/Argentina/Buenos_Aires",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.buenosaires,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.buenosaires,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.buenosaires,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.buenosaires,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.buenosaires,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.buenosaires
                                }
                            },
                            {
                                name: "Europe > Madrid",
                                value: "Europe/Madrid",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.madrid,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.madrid,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.madrid,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.madrid,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.madrid,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.madrid
                                }
                            },
                            {
                                name: "Europe > London",
                                value: "Europe/London",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.london,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.london,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.london,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.london,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.london,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.london
                                }
                            },
                            {
                                name: "Europe > Paris",
                                value: "Europe/Paris",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.paris,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.paris,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.paris,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.paris,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.paris,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.paris
                                }
                            },
                            {
                                name: "Europe > Moscow",
                                value: "Europe/Moscow",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.moscow,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.moscow,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.moscow,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.moscow,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.moscow,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.moscow
                                }
                            },
                            {
                                name: "Africa > Cairo",
                                value: "Africa/Cairo",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.cairo,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.cairo,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.cairo,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.cairo,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.cairo,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.cairo
                                }
                            },
                            {
                                name: "Asia > Dubai",
                                value: "Asia/Dubai",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.dubai,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.dubai,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.dubai,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.dubai,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.dubai,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.dubai
                                }
                            },
                            {
                                name: "Asia > Tokyo",
                                value: "Asia/Tokyo",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.tokyo,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.tokyo,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.tokyo,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.tokyo,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.tokyo,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.tokyo
                                }
                            },
                            {
                                name: "Asia > Shanghai",
                                value: "Asia/Shanghai",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.shanghai,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.shanghai,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.shanghai,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.shanghai,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.shanghai,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.shanghai
                                }
                            },
                            {
                                name: "Oceania > Sydney",
                                value: "Australia/Sydney",
                                name_localizations: {
                                    de: locales.de.categories.utility.commands.clock.options.zone.choices.sydney,
                                    fr: locales.fr.categories.utility.commands.clock.options.zone.choices.sydney,
                                    "pt-BR": locales.pt.categories.utility.commands.clock.options.zone.choices.sydney,
                                    "es-ES": locales.es.categories.utility.commands.clock.options.zone.choices.sydney,
                                    tr: locales.tr.categories.utility.commands.clock.options.zone.choices.sydney,
                                    ru: locales.ru.categories.utility.commands.clock.options.zone.choices.sydney
                                }
                            }
                        )
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