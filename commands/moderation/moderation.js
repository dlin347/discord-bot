const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const kickTranslations = require('../../translations/moderation/kick.json')
const permissions = require('../../translations/other/permissions');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('moderation')
        // Consultar regiones e idiomas. Algunos requieren ser strings. Idioma en caso de que el usuario no hable ninguno de estos idiomas: Inglés
        .setNameLocalizations({
            de: kickTranslations.de.slashCommandName,
            fr: kickTranslations.fr.slashCommandName,
            "pt-BR": kickTranslations.ptBR.slashCommandName,
            "es-ES": kickTranslations.esES.slashCommandName,
            tr: kickTranslations.tr.slashCommandName,
            ru: kickTranslations.ru.slashCommandName,
        })
        .setDescription('Moderation category commands')
        .setDescriptionLocalizations({
            de: kickTranslations.de.slashCommandDescription,
            fr: kickTranslations.fr.slashCommandDescription,
            "pt-BR": kickTranslations.ptBR.slashCommandDescription,
            "es-ES": kickTranslations.esES.slashCommandDescription,
            tr: kickTranslations.tr.slashCommandDescription,
            ru: kickTranslations.ru.slashCommandDescription,
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('kick')
                .setNameLocalizations({
                    de: kickTranslations.de.subcommandName,
                    fr: kickTranslations.fr.subcommandName,
                    "pt-BR": kickTranslations.ptBR.subcommandName,
                    "es-ES": kickTranslations.esES.subcommandName,
                    tr: kickTranslations.tr.subcommandName,
                    ru: kickTranslations.ru.subcommandName,
                })
                .setDescription('Kick a member from the server')
                .setDescriptionLocalizations({
                    de: kickTranslations.de.subcommandDescription,
                    fr: kickTranslations.fr.subcommandDescription,
                    "pt-BR": kickTranslations.ptBR.subcommandDescription,
                    "es-ES": kickTranslations.esES.subcommandDescription,
                    tr: kickTranslations.tr.subcommandDescription,
                    ru: kickTranslations.ru.subcommandDescription,
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: kickTranslations.de.subcommandFirstOptionName,
                            fr: kickTranslations.fr.subcommandFirstOptionName,
                            "pt-BR": kickTranslations.ptBR.subcommandFirstOptionName,
                            "es-ES": kickTranslations.esES.subcommandFirstOptionName,
                            tr: kickTranslations.tr.subcommandFirstOptionName,
                            ru: kickTranslations.ru.subcommandFirstOptionName,
                        })
                        .setDescription('The member you want to kick')
                        .setDescriptionLocalizations({
                            de: kickTranslations.de.subcommandFirstOptionReason,
                            fr: kickTranslations.fr.subcommandFirstOptionReason,
                            "pt-BR": kickTranslations.ptBR.subcommandFirstOptionReason,
                            "es-ES": kickTranslations.esES.subcommandFirstOptionReason,
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
                            "pt-BR": kickTranslations.ptBR.subcommandSecondOptionName,
                            "es-ES": kickTranslations.esES.subcommandSecondOptionName,
                            tr: kickTranslations.tr.subcommandSecondOptionName,
                            ru: kickTranslations.ru.subcommandSecondOptionName,
                        })
                        .setDescription('The reason of kicking the member')
                        .setDescriptionLocalizations({
                            de: kickTranslations.de.subcommandSecondOptionReason,
                            fr: kickTranslations.fr.subcommandSecondOptionReason,
                            "pt-BR": kickTranslations.ptBR.subcommandSecondOptionReason,
                            "es-ES": kickTranslations.esES.subcommandSecondOptionReason,
                            tr: kickTranslations.tr.subcommandSecondOptionReason,
                            ru: kickTranslations.ru.subcommandSecondOptionReason,
                        })
                )
        )
        /* .addSubcommand(subcommand =>
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
        ) */
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.commandName == 'moderation') {
            const subcommand = interaction.options.getSubcommand();
            let locale = (interaction.locale);
            if (!Object.keys(kickTranslations).includes(locale.replace('-', ''))) locale = 'en-US';
            switch (subcommand) {
                case 'kick':
                    const msg = await permissions(locale.replace('-', ''), 'KICK_MEMBERS');
                    if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply({ content: msg, ephemeral: true });
                    const member = interaction.options.getMember('member');
                    const reason = interaction.options.getString('reason') ?? kickTranslations[locale.replace('-', '')].noReason;
                    const content = kickTranslations[locale.replace('-', '')].kickSuccess.replace('{member}', `<@${member.id}>`).replace('{reason}', reason);;
                    const error = kickTranslations[locale.replace('-', '')].kickError.replace('{member}', `<@${member.id}>`);;

                    try {
                        await member.kick(reason)
                        console.log("\x1b[33m" + `<<@${interaction.user.username}>> has successfully kicked <<@${member.user.username}>> from <<${interaction.guild.name}>>.` + "\x1b[0m")
                        await interaction.reply({ content: content, ephemeral: true });
                    } catch (e) {
                        await interaction.reply({ content: error, ephemeral: true });
                        console.error("\x1b[31m" + e + "\x1b[0m");
                    }
                    break;
            }
        }/*  else if (subcommand === 'ban') {
                await interaction.reply('Ban working!');
            } */
    }
};