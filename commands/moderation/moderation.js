const { SlashCommandBuilder, ChannelType } = require('discord.js');

const kickMember = require('./kick');
const banMember = require('./ban');
const unbanMember = require('./unban');
const deleteMessages = require('./delete-messages');
const lockChannel = require('./lock');
const unlockChannel = require('./unlock');

const de = require('../../locales/de.json');
const fr = require('../../locales/fr.json');
const pt = require('../../locales/pt-BR.json');
const es = require('../../locales/es-ES.json');
const tr = require('../../locales/tr.json');
const ru = require('../../locales/ru.json');

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
                        .setMaxLength(256)
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
                        .setMaxLength(256)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete_messages')
                .setNameLocalizations({
                    de: de.categories.moderation.commands.delete_messages.name,
                    fr: fr.categories.moderation.commands.delete_messages.name,
                    "pt-BR": pt.categories.moderation.commands.delete_messages.name,
                    "es-ES": es.categories.moderation.commands.delete_messages.name,
                    tr: tr.categories.moderation.commands.delete_messages.name,
                    ru: ru.categories.moderation.commands.delete_messages.name
                })
                .setDescription('Delete a number of messages in a specific channel')
                .setDescriptionLocalizations({
                    de: de.categories.moderation.commands.delete_messages.description,
                    fr: fr.categories.moderation.commands.delete_messages.description,
                    "pt-BR": pt.categories.moderation.commands.delete_messages.description,
                    "es-ES": es.categories.moderation.commands.delete_messages.description,
                    tr: tr.categories.moderation.commands.delete_messages.description,
                    ru: ru.categories.moderation.commands.delete_messages.description
                })
                .addNumberOption(option =>
                    option
                        .setName('amount')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.delete_messages.options.amount.name,
                            fr: fr.categories.moderation.commands.delete_messages.options.amount.name,
                            "pt-BR": pt.categories.moderation.commands.delete_messages.options.amount.name,
                            "es-ES": es.categories.moderation.commands.delete_messages.options.amount.name,
                            tr: tr.categories.moderation.commands.delete_messages.options.amount.name,
                            ru: ru.categories.moderation.commands.delete_messages.options.amount.name
                        })
                        .setDescription('The number of messages to delete')
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.delete_messages.options.amount.description,
                            fr: fr.categories.moderation.commands.delete_messages.options.amount.description,
                            "pt-BR": pt.categories.moderation.commands.delete_messages.options.amount.description,
                            "es-ES": es.categories.moderation.commands.delete_messages.options.amount.description,
                            tr: tr.categories.moderation.commands.delete_messages.options.amount.description,
                            ru: ru.categories.moderation.commands.delete_messages.options.amount.description
                        })
                        .setMinValue(1)
                        .setMaxValue(100)
                        .setRequired(true)
                )
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.delete_messages.options.channel.name,
                            fr: fr.categories.moderation.commands.delete_messages.options.channel.name,
                            "pt-BR": pt.categories.moderation.commands.delete_messages.options.channel.name,
                            "es-ES": es.categories.moderation.commands.delete_messages.options.channel.name,
                            tr: tr.categories.moderation.commands.delete_messages.options.channel.name,
                            ru: ru.categories.moderation.commands.delete_messages.options.channel.name
                        })
                        .setDescription("The channel where the messages will be deleted")
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.delete_messages.options.channel.description,
                            fr: fr.categories.moderation.commands.delete_messages.options.channel.description,
                            "pt-BR": pt.categories.moderation.commands.delete_messages.options.channel.description,
                            "es-ES": es.categories.moderation.commands.delete_messages.options.channel.description,
                            tr: tr.categories.moderation.commands.delete_messages.options.channel.description,
                            ru: ru.categories.moderation.commands.delete_messages.options.channel.description
                        })
                        .addChannelTypes(ChannelType.GuildText)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unban')
                .setNameLocalizations({
                    de: de.categories.moderation.commands.unban.name,
                    fr: fr.categories.moderation.commands.unban.name,
                    "pt-BR": pt.categories.moderation.commands.unban.name,
                    "es-ES": es.categories.moderation.commands.unban.name,
                    tr: tr.categories.moderation.commands.unban.name,
                    ru: ru.categories.moderation.commands.unban.name
                })
                .setDescription('Unban a user from the server')
                .setDescriptionLocalizations({
                    de: de.categories.moderation.commands.unban.description,
                    fr: fr.categories.moderation.commands.unban.description,
                    "pt-BR": pt.categories.moderation.commands.unban.description,
                    "es-ES": es.categories.moderation.commands.unban.description,
                    tr: tr.categories.moderation.commands.unban.description,
                    ru: ru.categories.moderation.commands.unban.description
                })
                .addStringOption(option =>
                    option
                        .setName('id')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.unban.options.id.name,
                            fr: fr.categories.moderation.commands.unban.options.id.name,
                            "pt-BR": pt.categories.moderation.commands.unban.options.id.name,
                            "es-ES": es.categories.moderation.commands.unban.options.id.name,
                            tr: tr.categories.moderation.commands.unban.options.id.name,
                            ru: ru.categories.moderation.commands.unban.options.id.name
                        })
                        .setDescription('The id of the user you want to unban')
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.unban.options.id.description,
                            fr: fr.categories.moderation.commands.unban.options.id.description,
                            "pt-BR": pt.categories.moderation.commands.unban.options.id.description,
                            "es-ES": es.categories.moderation.commands.unban.options.id.description,
                            tr: tr.categories.moderation.commands.unban.options.id.description,
                            ru: ru.categories.moderation.commands.unban.options.id.description
                        })
                        .setMinLength(17)
                        .setMaxLength(19)
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('reason')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.unban.options.reason.name,
                            fr: fr.categories.moderation.commands.unban.options.reason.name,
                            "pt-BR": pt.categories.moderation.commands.unban.options.reason.name,
                            "es-ES": es.categories.moderation.commands.unban.options.reason.name,
                            tr: tr.categories.moderation.commands.unban.options.reason.name,
                            ru: ru.categories.moderation.commands.unban.options.reason.name
                        })
                        .setDescription('The reason of unbanning the user')
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.unban.options.reason.description,
                            fr: fr.categories.moderation.commands.unban.options.reason.description,
                            "pt-BR": pt.categories.moderation.commands.unban.options.reason.description,
                            "es-ES": es.categories.moderation.commands.unban.options.reason.description,
                            tr: tr.categories.moderation.commands.unban.options.reason.description,
                            ru: ru.categories.moderation.commands.unban.options.reason.description
                        })
                        .setMaxLength(256)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lock')
                .setNameLocalizations({
                    de: de.categories.moderation.commands.lock.name,
                    fr: fr.categories.moderation.commands.lock.name,
                    "pt-BR": pt.categories.moderation.commands.lock.name,
                    "es-ES": es.categories.moderation.commands.lock.name,
                    tr: tr.categories.moderation.commands.lock.name,
                    ru: ru.categories.moderation.commands.lock.name
                })
                .setDescription('Lock a specific channel')
                .setDescriptionLocalizations({
                    de: de.categories.moderation.commands.lock.description,
                    fr: fr.categories.moderation.commands.lock.description,
                    "pt-BR": pt.categories.moderation.commands.lock.description,
                    "es-ES": es.categories.moderation.commands.lock.description,
                    tr: tr.categories.moderation.commands.lock.description,
                    ru: ru.categories.moderation.commands.lock.description
                })
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.lock.options.channel.name,
                            fr: fr.categories.moderation.commands.lock.options.channel.name,
                            "pt-BR": pt.categories.moderation.commands.lock.options.channel.name,
                            "es-ES": es.categories.moderation.commands.lock.options.channel.name,
                            tr: tr.categories.moderation.commands.lock.options.channel.name,
                            ru: ru.categories.moderation.commands.lock.options.channel.name
                        })
                        .setDescription("The channel that will be locked")
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.lock.options.channel.description,
                            fr: fr.categories.moderation.commands.lock.options.channel.description,
                            "pt-BR": pt.categories.moderation.commands.lock.options.channel.description,
                            "es-ES": es.categories.moderation.commands.lock.options.channel.description,
                            tr: tr.categories.moderation.commands.lock.options.channel.description,
                            ru: ru.categories.moderation.commands.lock.options.channel.description
                        })
                        .addChannelTypes(ChannelType.GuildText)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unlock')
                .setNameLocalizations({
                    de: de.categories.moderation.commands.unlock.name,
                    fr: fr.categories.moderation.commands.unlock.name,
                    "pt-BR": pt.categories.moderation.commands.unlock.name,
                    "es-ES": es.categories.moderation.commands.unlock.name,
                    tr: tr.categories.moderation.commands.unlock.name,
                    ru: ru.categories.moderation.commands.unlock.name
                })
                .setDescription('Unlock a specific channel')
                .setDescriptionLocalizations({
                    de: de.categories.moderation.commands.unlock.description,
                    fr: fr.categories.moderation.commands.unlock.description,
                    "pt-BR": pt.categories.moderation.commands.unlock.description,
                    "es-ES": es.categories.moderation.commands.unlock.description,
                    tr: tr.categories.moderation.commands.unlock.description,
                    ru: ru.categories.moderation.commands.unlock.description
                })
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setNameLocalizations({
                            de: de.categories.moderation.commands.unlock.options.channel.name,
                            fr: fr.categories.moderation.commands.unlock.options.channel.name,
                            "pt-BR": pt.categories.moderation.commands.unlock.options.channel.name,
                            "es-ES": es.categories.moderation.commands.unlock.options.channel.name,
                            tr: tr.categories.moderation.commands.unlock.options.channel.name,
                            ru: ru.categories.moderation.commands.unlock.options.channel.name
                        })
                        .setDescription("The channel that will be unlocked")
                        .setDescriptionLocalizations({
                            de: de.categories.moderation.commands.unlock.options.channel.description,
                            fr: fr.categories.moderation.commands.unlock.options.channel.description,
                            "pt-BR": pt.categories.moderation.commands.unlock.options.channel.description,
                            "es-ES": es.categories.moderation.commands.unlock.options.channel.description,
                            tr: tr.categories.moderation.commands.unlock.options.channel.description,
                            ru: ru.categories.moderation.commands.unlock.options.channel.description
                        })
                        .addChannelTypes(ChannelType.GuildText)
                )
        )
        .setDMPermission(false),
    async execute(interaction) {
        if (interaction.commandName === 'moderation') {
            const subcommand = interaction.options.getSubcommand();
            switch (subcommand) {
                case 'kick':
                    await kickMember(interaction);
                    break;
                case 'ban':
                    await banMember(interaction);
                    break;
                case 'unban':
                    await unbanMember(interaction);
                    break;
                case 'delete_messages':
                    await deleteMessages(interaction);
                    break;
                case 'lock':
                    await lockChannel(interaction);
                    break;
                case 'unlock':
                    await unlockChannel(interaction);
                    break;
            }
        }
    }
}