const { SlashCommandBuilder } = require('discord.js');

const ping = require('./ping');

const de = require('../../locales/de.json');
const fr = require('../../locales/fr.json');
const pt = require('../../locales/pt-BR.json');
const es = require('../../locales/es-ES.json');
const tr = require('../../locales/tr.json');
const ru = require('../../locales/ru.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('information')
        .setNameLocalizations({
            de: de.categories.information.name,
            fr: fr.categories.information.name,
            "pt-BR": pt.categories.information.name,
            "es-ES": es.categories.information.name,
            tr: tr.categories.information.name,
            ru: ru.categories.information.name
        })
        .setDescription('Get information of diverse things')
        .setDescriptionLocalizations({
            de: de.categories.information.description,
            fr: fr.categories.information.description,
            "pt-BR": pt.categories.information.description,
            "es-ES": es.categories.information.description,
            tr: tr.categories.information.description,
            ru: ru.categories.information.description
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('ping')
                .setNameLocalizations({
                    de: de.categories.information.commands.ping.name,
                    fr: fr.categories.information.commands.ping.name,
                    "pt-BR": pt.categories.information.commands.ping.name,
                    "es-ES": es.categories.information.commands.ping.name,
                    tr: tr.categories.information.commands.ping.name,
                    ru: ru.categories.information.commands.ping.name
                })
                .setDescription("Get the bot's latency")
                .setDescriptionLocalizations({
                    de: de.categories.information.commands.ping.description,
                    fr: fr.categories.information.commands.ping.description,
                    "pt-BR": pt.categories.information.commands.ping.description,
                    "es-ES": es.categories.information.commands.ping.description,
                    tr: tr.categories.information.commands.ping.description,
                    ru: ru.categories.information.commands.ping.description
                })
        )
        .setDMPermission(false),

    async execute(interaction) {
        if (interaction.commandName === 'information') {
            const subcommand = interaction.options.getSubcommand();
            switch (subcommand) {
                case 'ping':
                    await ping(interaction);
                    break;
            }
        }
    }
}