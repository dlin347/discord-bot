const { SlashCommandBuilder } = require('discord.js');
const kickTranslations = require('../../translations/moderation/kick.json')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('moderation')
        .setNameLocalizations({
            de: kickTranslations.de.slashCommandName,
            fr: kickTranslations.fr.slashCommandName,
            "pt-BR": kickTranslations.pt.slashCommandName,
            "es-ES": kickTranslations.es.slashCommandName, // Corregido a 'es-ES'
            tr: kickTranslations.tr.slashCommandName,
            ru: kickTranslations.ru.slashCommandName,
        })
        .setDescription('Moderation category commands')
        .setDescriptionLocalizations({
            de: kickTranslations.de.slashCommandDescription,
            fr: kickTranslations.fr.slashCommandDescription,
            "pt-BR": kickTranslations.pt.slashCommandDescription,
            "es-ES": kickTranslations.es.slashCommandDescription, // Corregido a 'es-ES'
            tr: kickTranslations.tr.slashCommandDescription,
            ru: kickTranslations.ru.slashCommandDescription,
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('kick')
                .setNameLocalizations({
                    de: kickTranslations.de.subcommandName,
                    fr: kickTranslations.fr.subcommandName,
                    "pt-BR": kickTranslations.pt.subcommandName,
                    "es-ES": kickTranslations.es.subcommandName, // Corregido a 'es-ES'
                    tr: kickTranslations.tr.subcommandName,
                    ru: kickTranslations.ru.subcommandName,
                })
                .setDescription('Kick a member from the server')
                .setDescriptionLocalizations({
                    de: kickTranslations.de.subcommandDescription,
                    fr: kickTranslations.fr.subcommandDescription,
                    "pt-BR": kickTranslations.pt.subcommandDescription,
                    "es-ES": kickTranslations.es.subcommandDescription, // Corregido a 'es-ES'
                    tr: kickTranslations.tr.subcommandDescription,
                    ru: kickTranslations.ru.subcommandDescription,
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: kickTranslations.de.subcommandFirstOptionName,
                            fr: kickTranslations.fr.subcommandFirstOptionName,
                            "pt-BR": kickTranslations.pt.subcommandFirstOptionName,
                            "es-ES": kickTranslations.es.subcommandFirstOptionName, // Corregido a 'es-ES'
                            tr: kickTranslations.tr.subcommandFirstOptionName,
                            ru: kickTranslations.ru.subcommandFirstOptionName,
                        })
                        .setDescription('Member to kick')
                        .setDescriptionLocalizations({
                            de: kickTranslations.de.subcommandFirstOptionReason,
                            fr: kickTranslations.fr.subcommandFirstOptionReason,
                            "pt-BR": kickTranslations.pt.subcommandFirstOptionReason,
                            "es-ES": kickTranslations.es.subcommandFirstOptionReason, // Corregido a 'es-ES'
                            tr: kickTranslations.tr.subcommandFirstOptionReason,
                            ru: kickTranslations.ru.subcommandFirstOptionReason,
                        })
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('reason')
                        .setNameLocalizations({
                            de: kickTranslations.de.subcommandSecondOptionName,
                            fr: kickTranslations.fr.subcommandSecondOptionName,
                            "pt-BR": kickTranslations.pt.subcommandSecondOptionName,
                            "es-ES": kickTranslations.es.subcommandSecondOptionName, // Corregido a 'es-ES'
                            tr: kickTranslations.tr.subcommandSecondOptionName,
                            ru: kickTranslations.ru.subcommandSecondOptionName,
                        })
                        .setDescription('Reason to kick the member')
                        .setDescriptionLocalizations({
                            de: kickTranslations.de.subcommandSecondOptionReason,
                            fr: kickTranslations.fr.subcommandSecondOptionReason,
                            "pt-BR": kickTranslations.pt.subcommandSecondOptionReason,
                            "es-ES": kickTranslations.es.subcommandSecondOptionReason, // Corregido a 'es-ES'
                            tr: kickTranslations.tr.subcommandSecondOptionReason,
                            ru: kickTranslations.ru.subcommandSecondOptionReason,
                        })
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ban')
                .setDescription('Bans a member from the server')
                .addUserOption(option =>
                    option.setName('member')
                        .setDescription('Member to ban')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('reason')
                        .setDescription('Reason to ban the member')
                        .setRequired(true)
                )
        )
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.commandName == 'moderation') {
            const subcommand = interaction.options.getSubcommand();
            if (subcommand === 'kick') {
                await interaction.reply('Kick working!');
            } else if (subcommand === 'ban') {
                await interaction.reply('Ban working!');
            }
        };
    }
};