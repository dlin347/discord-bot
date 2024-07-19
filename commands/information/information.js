const { SlashCommandBuilder } = require('discord.js');

const ping = require('./ping.js');
const memberInformation = require('./member.js');
const botInformation = require('./bot.js');
const avatarMember = require('./avatar.js');
const serverInformation = require('./server.js');

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
        .addSubcommand(subcommand =>
            subcommand
                .setName('bot')
                .setNameLocalizations({
                    de: locales.de.categories.information.commands.bot.name,
                    fr: locales.fr.categories.information.commands.bot.name,
                    "pt-BR": locales.pt.categories.information.commands.bot.name,
                    "es-ES": locales.es.categories.information.commands.bot.name,
                    tr: locales.tr.categories.information.commands.bot.name,
                    ru: locales.ru.categories.information.commands.bot.name
                })
                .setDescription("Get information of the bot")
                .setDescriptionLocalizations({
                    de: locales.de.categories.information.commands.bot.description,
                    fr: locales.fr.categories.information.commands.bot.description,
                    "pt-BR": locales.pt.categories.information.commands.bot.description,
                    "es-ES": locales.es.categories.information.commands.bot.description,
                    tr: locales.tr.categories.information.commands.bot.description,
                    ru: locales.ru.categories.information.commands.bot.description
                })
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('avatar')
                .setNameLocalizations({
                    de: locales.de.categories.information.commands.avatar.name,
                    fr: locales.fr.categories.information.commands.avatar.name,
                    "pt-BR": locales.pt.categories.information.commands.avatar.name,
                    "es-ES": locales.es.categories.information.commands.avatar.name,
                    tr: locales.tr.categories.information.commands.avatar.name,
                    ru: locales.ru.categories.information.commands.avatar.name
                })
                .setDescription("Get the avatar of a specific member with a specific size and format")
                .setDescriptionLocalizations({
                    de: locales.de.categories.information.commands.avatar.description,
                    fr: locales.fr.categories.information.commands.avatar.description,
                    "pt-BR": locales.pt.categories.information.commands.avatar.description,
                    "es-ES": locales.es.categories.information.commands.avatar.description,
                    tr: locales.tr.categories.information.commands.avatar.description,
                    ru: locales.ru.categories.information.commands.avatar.description
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: locales.de.categories.information.commands.avatar.options.member.name,
                            fr: locales.fr.categories.information.commands.avatar.options.member.name,
                            "pt-BR": locales.pt.categories.information.commands.avatar.options.member.name,
                            "es-ES": locales.es.categories.information.commands.avatar.options.member.name,
                            tr: locales.tr.categories.information.commands.avatar.options.member.name,
                            ru: locales.ru.categories.information.commands.avatar.options.member.name
                        })
                        .setDescription('The member you want to get the avatar of')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.information.commands.avatar.options.member.description,
                            fr: locales.fr.categories.information.commands.avatar.options.member.description,
                            "pt-BR": locales.pt.categories.information.commands.avatar.options.member.description,
                            "es-ES": locales.es.categories.information.commands.avatar.options.member.description,
                            tr: locales.tr.categories.information.commands.avatar.options.member.description,
                            ru: locales.ru.categories.information.commands.avatar.options.member.description
                        })
                )
                .addStringOption(option =>
                    option
                        .setName('resolution')
                        .setNameLocalizations({
                            de: locales.de.categories.information.commands.avatar.options.resolution.name,
                            fr: locales.fr.categories.information.commands.avatar.options.resolution.name,
                            "pt-BR": locales.pt.categories.information.commands.avatar.options.resolution.name,
                            "es-ES": locales.es.categories.information.commands.avatar.options.resolution.name,
                            tr: locales.tr.categories.information.commands.avatar.options.resolution.name,
                            ru: locales.ru.categories.information.commands.avatar.options.resolution.name
                        })
                        .setDescription('The resolution of the avatar file')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.information.commands.avatar.options.resolution.description,
                            fr: locales.fr.categories.information.commands.avatar.options.resolution.description,
                            "pt-BR": locales.pt.categories.information.commands.avatar.options.resolution.description,
                            "es-ES": locales.es.categories.information.commands.avatar.options.resolution.description,
                            tr: locales.tr.categories.information.commands.avatar.options.resolution.description,
                            ru: locales.ru.categories.information.commands.avatar.options.resolution.description
                        })
                        .addChoices(
                            { name: '12px', value: '12' },
                            { name: '32px', value: '32' },
                            { name: '64px', value: '64' },
                            { name: '128px', value: '128' },
                            { name: '256px', value: '256' },
                            { name: '512px', value: '512' },
                            { name: '1024px', value: '1024' },
                            { name: '2048px', value: '2048' },
                            { name: '4096px', value: '4096' }
                        )
                )
                .addStringOption(option =>
                    option
                        .setName('extension')
                        .setNameLocalizations({
                            de: locales.de.categories.information.commands.avatar.options.extension.name,
                            fr: locales.fr.categories.information.commands.avatar.options.extension.name,
                            "pt-BR": locales.pt.categories.information.commands.avatar.options.extension.name,
                            "es-ES": locales.es.categories.information.commands.avatar.options.extension.name,
                            tr: locales.tr.categories.information.commands.avatar.options.extension.name,
                            ru: locales.ru.categories.information.commands.avatar.options.extension.name
                        })
                        .setDescription('The extension of the avatar file')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.information.commands.avatar.options.extension.description,
                            fr: locales.fr.categories.information.commands.avatar.options.extension.description,
                            "pt-BR": locales.pt.categories.information.commands.avatar.options.extension.description,
                            "es-ES": locales.es.categories.information.commands.avatar.options.extension.description,
                            tr: locales.tr.categories.information.commands.avatar.options.extension.description,
                            ru: locales.ru.categories.information.commands.avatar.options.extension.description
                        })
                        .addChoices(
                            { name: '.webp', value: 'webp' },
                            { name: '.png', value: 'png' },
                            { name: '.jpg', value: 'jpg' },
                            { name: '.jpeg', value: 'jpeg' },
                            { name: '.gif', value: 'gif' }
                        )
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('server')
                .setNameLocalizations({
                    de: locales.de.categories.information.commands.server.name,
                    fr: locales.fr.categories.information.commands.server.name,
                    "pt-BR": locales.pt.categories.information.commands.server.name,
                    "es-ES": locales.es.categories.information.commands.server.name,
                    tr: locales.tr.categories.information.commands.server.name,
                    ru: locales.ru.categories.information.commands.server.name
                })
                .setDescription("Get information of the server")
                .setDescriptionLocalizations({
                    de: locales.de.categories.information.commands.server.description,
                    fr: locales.fr.categories.information.commands.server.description,
                    "pt-BR": locales.pt.categories.information.commands.server.description,
                    "es-ES": locales.es.categories.information.commands.server.description,
                    tr: locales.tr.categories.information.commands.server.description,
                    ru: locales.ru.categories.information.commands.server.description
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
                case 'member':
                    await memberInformation(interaction);
                    break;
                case 'bot':
                    await botInformation(interaction);
                    break;
                case 'avatar':
                    await avatarMember(interaction);
                    break;
                case 'server':
                    await serverInformation(interaction);
                    break;
            }
        }
    }
}