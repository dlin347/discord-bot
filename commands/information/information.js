const { SlashCommandBuilder } = require('discord.js');

const ping = require('./ping');
const memberInformation = require('./member');

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
        .setName('information')
        .setNameLocalizations({
            de: locales.de.categories.information.name,
            fr: locales.fr.categories.information.name,
            "pt-BR": locales.pt.categories.information.name,
            "es-ES": locales.es.categories.information.name,
            tr: locales.tr.categories.information.name,
            ru: locales.ru.categories.information.name
        })
        .setDescription('Get information of diverse things')
        .setDescriptionLocalizations({
            de: locales.de.categories.information.description,
            fr: locales.fr.categories.information.description,
            "pt-BR": locales.pt.categories.information.description,
            "es-ES": locales.es.categories.information.description,
            tr: locales.tr.categories.information.description,
            ru: locales.ru.categories.information.description
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('ping')
                .setNameLocalizations({
                    de: locales.de.categories.information.commands.ping.name,
                    fr: locales.fr.categories.information.commands.ping.name,
                    "pt-BR": locales.pt.categories.information.commands.ping.name,
                    "es-ES": locales.es.categories.information.commands.ping.name,
                    tr: locales.tr.categories.information.commands.ping.name,
                    ru: locales.ru.categories.information.commands.ping.name
                })
                .setDescription("Get the bot's latency")
                .setDescriptionLocalizations({
                    de: locales.de.categories.information.commands.ping.description,
                    fr: locales.fr.categories.information.commands.ping.description,
                    "pt-BR": locales.pt.categories.information.commands.ping.description,
                    "es-ES": locales.es.categories.information.commands.ping.description,
                    tr: locales.tr.categories.information.commands.ping.description,
                    ru: locales.ru.categories.information.commands.ping.description
                })
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('member')
                .setNameLocalizations({
                    de: locales.de.categories.information.commands.member.name,
                    fr: locales.fr.categories.information.commands.member.name,
                    "pt-BR": locales.pt.categories.information.commands.member.name,
                    "es-ES": locales.es.categories.information.commands.member.name,
                    tr: locales.tr.categories.information.commands.member.name,
                    ru: locales.ru.categories.information.commands.member.name
                })
                .setDescription("Get information of a member")
                .setDescriptionLocalizations({
                    de: locales.de.categories.information.commands.member.description,
                    fr: locales.fr.categories.information.commands.member.description,
                    "pt-BR": locales.pt.categories.information.commands.member.description,
                    "es-ES": locales.es.categories.information.commands.member.description,
                    tr: locales.tr.categories.information.commands.member.description,
                    ru: locales.ru.categories.information.commands.member.description
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: locales.de.categories.information.commands.member.options.member.name,
                            fr: locales.fr.categories.information.commands.member.options.member.name,
                            "pt-BR": locales.pt.categories.information.commands.member.options.member.name,
                            "es-ES": locales.es.categories.information.commands.member.options.member.name,
                            tr: locales.tr.categories.information.commands.member.options.member.name,
                            ru: locales.ru.categories.information.commands.member.options.member.name
                        })
                        .setDescription('The member you want to get information of')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.information.commands.member.options.member.description,
                            fr: locales.fr.categories.information.commands.member.options.member.description,
                            "pt-BR": locales.pt.categories.information.commands.member.options.member.description,
                            "es-ES": locales.es.categories.information.commands.member.options.member.description,
                            tr: locales.tr.categories.information.commands.member.options.member.description,
                            ru: locales.ru.categories.information.commands.member.options.member.description
                        })
                )
        )
        .setDMPermission(false),

    async execute(interaction) {
        if (interaction.commandName === 'information') {
            const subcommand = interaction.options.getSubcommand();
            switch (subcommand) {
                case 'ping':
                    await ping(interaction);
                    break;
                case 'member':
                    await memberInformation(interaction);
                    break;
            }
        }
    }
}