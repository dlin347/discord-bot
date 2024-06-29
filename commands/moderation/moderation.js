const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const permissions = require('../../locales/other/permissions.js');

const de = require('../../locales/de.json');
const fr = require('../../locales/fr.json');
const pt = require('../../locales/pt-BR.json');
const es = require('../../locales/es-ES.json');
const tr = require('../../locales/tr.json');
const ru = require('../../locales/ru.json');
const fs = require('fs');
const path = require('path');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('moderation')
        .setNameLocalizations({
            de: de.categories.moderation.name,
            fr: fr.categories.moderation.name,
            "pt-BR": pt.categories.moderation.name,
            "es-ES": es.categories.moderation.name,
            tr: tr.categories.moderation.name,
            ru: ru.categories.moderation.name
        })
        .setDescription('Moderation category commands')
        .setDescriptionLocalizations({
            de: de.categories.moderation.description,
            fr: fr.categories.moderation.description,
            "pt-BR": pt.categories.moderation.description,
            "es-ES": es.categories.moderation.description,
            tr: tr.categories.moderation.description,
            ru: ru.categories.moderation.description
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('kick')
                .setNameLocalizations({
                    de: de.categories.moderation.commands.kick.name,
                    fr: fr.categories.moderation.commands.kick.name,
                    "pt-BR": pt.categories.moderation.commands.kick.name,
                    "es-ES": es.categories.moderation.commands.kick.name,
                    tr: tr.categories.moderation.commands.kick.name,
                    ru: ru.categories.moderation.commands.kick.name
                })
                .setDescription('Kick a member from the server')
                .setDescriptionLocalizations({
                    de: de.categories.moderation.commands.kick.description,
                    fr: fr.categories.moderation.commands.kick.description,
                    "pt-BR": pt.categories.moderation.commands.kick.description,
                    "es-ES": es.categories.moderation.commands.kick.description,
                    tr: tr.categories.moderation.commands.kick.description,
                    ru: ru.categories.moderation.commands.kick.description
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.kick.options.member.name,
                            fr: fr.categories.moderation.commands.kick.options.member.name,
                            "pt-BR": pt.categories.moderation.commands.kick.options.member.name,
                            "es-ES": es.categories.moderation.commands.kick.options.member.name,
                            tr: tr.categories.moderation.commands.kick.options.member.name,
                            ru: ru.categories.moderation.commands.kick.options.member.name
                        })
                        .setDescription('The member you want to kick')
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.kick.options.member.description,
                            fr: fr.categories.moderation.commands.kick.options.member.description,
                            "pt-BR": pt.categories.moderation.commands.kick.options.member.description,
                            "es-ES": es.categories.moderation.commands.kick.options.member.description,
                            tr: tr.categories.moderation.commands.kick.options.member.description,
                            ru: ru.categories.moderation.commands.kick.options.member.description
                        })
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('reason')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.kick.options.reason.name,
                            fr: fr.categories.moderation.commands.kick.options.reason.name,
                            "pt-BR": pt.categories.moderation.commands.kick.options.reason.name,
                            "es-ES": es.categories.moderation.commands.kick.options.reason.name,
                            tr: tr.categories.moderation.commands.kick.options.reason.name,
                            ru: ru.categories.moderation.commands.kick.options.reason.name
                        })
                        .setDescription('The reason of kicking the member')
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.kick.options.reason.description,
                            fr: fr.categories.moderation.commands.kick.options.reason.description,
                            "pt-BR": pt.categories.moderation.commands.kick.options.reason.description,
                            "es-ES": es.categories.moderation.commands.kick.options.reason.description,
                            tr: tr.categories.moderation.commands.kick.options.reason.description,
                            ru: ru.categories.moderation.commands.kick.options.reason.description
                        })
                )

        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ban')
                .setNameLocalizations({
                    de: de.categories.moderation.commands.ban.name,
                    fr: fr.categories.moderation.commands.ban.name,
                    "pt-BR": pt.categories.moderation.commands.ban.name,
                    "es-ES": es.categories.moderation.commands.ban.name,
                    tr: tr.categories.moderation.commands.ban.name,
                    ru: ru.categories.moderation.commands.ban.name
                })
                .setDescription('Ban a member from the server')
                .setDescriptionLocalizations({
                    de: de.categories.moderation.commands.ban.description,
                    fr: fr.categories.moderation.commands.ban.description,
                    "pt-BR": pt.categories.moderation.commands.ban.description,
                    "es-ES": es.categories.moderation.commands.ban.description,
                    tr: tr.categories.moderation.commands.ban.description,
                    ru: ru.categories.moderation.commands.ban.description
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.ban.options.member.name,
                            fr: fr.categories.moderation.commands.ban.options.member.name,
                            "pt-BR": pt.categories.moderation.commands.ban.options.member.name,
                            "es-ES": es.categories.moderation.commands.ban.options.member.name,
                            tr: tr.categories.moderation.commands.ban.options.member.name,
                            ru: ru.categories.moderation.commands.ban.options.member.name
                        })
                        .setDescription('The member you want to ban')
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.ban.options.member.description,
                            fr: fr.categories.moderation.commands.ban.options.member.description,
                            "pt-BR": pt.categories.moderation.commands.ban.options.member.description,
                            "es-ES": es.categories.moderation.commands.ban.options.member.description,
                            tr: tr.categories.moderation.commands.ban.options.member.description,
                            ru: ru.categories.moderation.commands.ban.options.member.description
                        })
                        .setRequired(true)
                )
                .addBooleanOption(option =>
                    option
                        .setName('delete_messages')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.ban.options.delete_messages.name,
                            fr: fr.categories.moderation.commands.ban.options.delete_messages.name,
                            "pt-BR": pt.categories.moderation.commands.ban.options.delete_messages.name,
                            "es-ES": es.categories.moderation.commands.ban.options.delete_messages.name,
                            tr: tr.categories.moderation.commands.ban.options.delete_messages.name,
                            ru: ru.categories.moderation.commands.ban.options.delete_messages.name
                        })
                        .setDescription("Delete the member's messages from the past 7 days?")
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.ban.options.delete_messages.description,
                            fr: fr.categories.moderation.commands.ban.options.delete_messages.description,
                            "pt-BR": pt.categories.moderation.commands.ban.options.delete_messages.description,
                            "es-ES": es.categories.moderation.commands.ban.options.delete_messages.description,
                            tr: tr.categories.moderation.commands.ban.options.delete_messages.description,
                            ru: ru.categories.moderation.commands.ban.options.delete_messages.description
                        })
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('reason')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.ban.options.reason.name,
                            fr: fr.categories.moderation.commands.ban.options.reason.name,
                            "pt-BR": pt.categories.moderation.commands.ban.options.reason.name,
                            "es-ES": es.categories.moderation.commands.ban.options.reason.name,
                            tr: tr.categories.moderation.commands.ban.options.reason.name,
                            ru: ru.categories.moderation.commands.ban.options.reason.name
                        })
                        .setDescription('The reason of banning the member')
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.ban.options.reason.description,
                            fr: fr.categories.moderation.commands.ban.options.reason.description,
                            "pt-BR": pt.categories.moderation.commands.ban.options.reason.description,
                            "es-ES": es.categories.moderation.commands.ban.options.reason.description,
                            tr: tr.categories.moderation.commands.ban.options.reason.description,
                            ru: ru.categories.moderation.commands.ban.options.reason.description
                        })
                )
        )
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.commandName == 'moderation') {
            const subcommand = interaction.options.getSubcommand();
            const localesPath = path.join(__dirname, '../../locales');
            const localeFiles = fs.readdirSync(localesPath).filter(files => files.endsWith('.json'));
            let localeFile;

            for (const file of localeFiles) {
                const locale = file.split('.')[0];
                if (locale === interaction.locale) {
                    localeFile = require(path.join(localesPath, file));
                }
            }
            if (!localeFile) {
                locale = 'en-US';
                localeFile = require(path.join(localesPath, 'en-US.json'));
            }

            //Export into independant files next session

            async function kickMember(interaction) {
                const member = interaction.options.getMember('member');
                const defaultError = localeFile.categories.moderation.commands.kick.responses.defaultError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
                const noPermissionsError = localeFile.categories.moderation.commands.kick.responses.noPermissionsError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
                const higherRoleError = localeFile.categories.moderation.commands.kick.responses.higherRoleError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
                const message = await permissions(interaction.locale, 'KICK_MEMBERS');
                if (!member.kickable) return interaction.reply({ content: defaultError, ephemeral: true });
                if (!interaction.member.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply({ content: message, ephemeral: true });
                if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.KickMembers)) return interaction.reply({ content: noPermissionsError, ephemeral: true });
                if (interaction.guild.members.me.roles.highest.comparePositionTo(member.roles.highest) <= 0) return interaction.reply({ content: higherRoleError, ephemeral: true });

                const reason = interaction.options.getString('reason') ?? localeFile.categories.common.noReason;
                const reasonEnUS = (interaction.options.getString('reason') ? interaction.options.getString('reason') : "No reason provided");
                const content = localeFile.categories.moderation.commands.kick.responses.success.replace('{{member}}', `<@${member.id}>`).replace('{{reason}}', reason);

                try {
                    await member.send({ content: `You have been kicked from ${interaction.guild.name} by <@${interaction.user.id}>. Reason: ${reasonEnUS}` });
                    await member.kick(reasonEnUS);
                    console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY KICKED <<@${member.user.username}>> FROM <<${interaction.guild.name}>>.` + "\x1b[0m");
                    await interaction.reply({ content: content, ephemeral: true });
                } catch (e) {
                    await interaction.reply({ content: defaultError, ephemeral: true });
                    console.error("\x1b[31m" + e + "\x1b[0m");
                }
            }

            async function banMember(interaction) {
                const member = interaction.options.getMember('member');
                const defaultError = localeFile.categories.moderation.commands.ban.responses.defaultError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
                const noPermissionsError = localeFile.categories.moderation.commands.ban.responses.noPermissionsError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
                const higherRoleError = localeFile.categories.moderation.commands.ban.responses.higherRoleError.replace('{{member}}', `<@${member.id}>`).replace('{{guild}}', interaction.guild.name);
                const message = await permissions(interaction.locale, 'BAN_MEMBERS');
                if (!interaction.member.permissions.has(PermissionFlagsBits.BanMembers)) return interaction.reply({ content: message, ephemeral: true });
                if (!member.bannable) return interaction.reply({ content: defaultError, ephemeral: true });
                if (!interaction.guild.members.me.permissions.has(PermissionFlagsBits.BanMembers)) return interaction.reply({ content: noPermissionsError, ephemeral: true });
                if (interaction.guild.members.me.roles.highest.comparePositionTo(member.roles.highest) <= 0) return interaction.reply({ content: higherRoleError, ephemeral: true });

                const reason = interaction.options.getString('reason') ?? localeFile.categories.common.noReason;
                const reasonEnUS = (interaction.options.getString('reason') ? interaction.options.getString('reason') : "No reason provided");
                const content = localeFile.categories.moderation.commands.ban.responses.success.replace('{{member}}', `<@${member.id}>`).replace('{{reason}}', reason);
                const deleteMessages = interaction.options.getBoolean('delete_messages') ? (60 * 60 * 24 * 7) : 0;

                try {
                    await member.send({ content: `You have been banned from ${interaction.guild.name} by <@${interaction.user.id}>. Reason: ${reasonEnUS}` });
                    await member.ban({ deleteMessageSeconds: deleteMessages, reason: reasonEnUS });
                    console.log("\x1b[33m" + `<<@${interaction.user.username}>> HAS SUCCESSFULLY BANNED <<@${member.user.username}>> FROM <<${interaction.guild.name}>>.` + "\x1b[0m");
                    await interaction.reply({ content: content, ephemeral: true });
                } catch (e) {
                    await interaction.reply({ content: defaultError, ephemeral: true });
                    console.error("\x1b[31m" + e + "\x1b[0m");
                }
            }

            switch (subcommand) {
                case 'kick':
                    await kickMember(interaction);
                    break;
                case 'ban':
                    await banMember(interaction);
                    break;
            }
        }
    }
}