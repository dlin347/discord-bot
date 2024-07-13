// Optimizable code
const { SlashCommandBuilder, ChannelType } = require('discord.js');

const kickMember = require('./kick.js');
const banMember = require('./ban.js');
const unbanMember = require('./unban.js');
const deleteMessages = require('./delete-messages.js');
const lockChannel = require('./lock.js');
const unlockChannel = require('./unlock.js');
const slowmodeChannel = require('./slowmode.js');
const warnMember = require('./warn.js');

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
        .setName('moderation')
        .setNameLocalizations({
            de: locales.de.categories.moderation.name,
            fr: locales.fr.categories.moderation.name,
            "pt-BR": locales.pt.categories.moderation.name,
            "es-ES": locales.es.categories.moderation.name,
            tr: locales.tr.categories.moderation.name,
            ru: locales.ru.categories.moderation.name
        })
        .setDescription('Moderation category commands')
        .setDescriptionLocalizations({
            de: locales.de.categories.moderation.description,
            fr: locales.fr.categories.moderation.description,
            "pt-BR": locales.pt.categories.moderation.description,
            "es-ES": locales.es.categories.moderation.description,
            tr: locales.tr.categories.moderation.description,
            ru: locales.ru.categories.moderation.description
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('kick')
                .setNameLocalizations({
                    de: locales.de.categories.moderation.commands.kick.name,
                    fr: locales.fr.categories.moderation.commands.kick.name,
                    "pt-BR": locales.pt.categories.moderation.commands.kick.name,
                    "es-ES": locales.es.categories.moderation.commands.kick.name,
                    tr: locales.tr.categories.moderation.commands.kick.name,
                    ru: locales.ru.categories.moderation.commands.kick.name
                })
                .setDescription('Kick a member from the server')
                .setDescriptionLocalizations({
                    de: locales.de.categories.moderation.commands.kick.description,
                    fr: locales.fr.categories.moderation.commands.kick.description,
                    "pt-BR": locales.pt.categories.moderation.commands.kick.description,
                    "es-ES": locales.es.categories.moderation.commands.kick.description,
                    tr: locales.tr.categories.moderation.commands.kick.description,
                    ru: locales.ru.categories.moderation.commands.kick.description
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.kick.options.member.name,
                            fr: locales.fr.categories.moderation.commands.kick.options.member.name,
                            "pt-BR": locales.pt.categories.moderation.commands.kick.options.member.name,
                            "es-ES": locales.es.categories.moderation.commands.kick.options.member.name,
                            tr: locales.tr.categories.moderation.commands.kick.options.member.name,
                            ru: locales.ru.categories.moderation.commands.kick.options.member.name
                        })
                        .setDescription('The member you want to kick')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.kick.options.member.description,
                            fr: locales.fr.categories.moderation.commands.kick.options.member.description,
                            "pt-BR": locales.pt.categories.moderation.commands.kick.options.member.description,
                            "es-ES": locales.es.categories.moderation.commands.kick.options.member.description,
                            tr: locales.tr.categories.moderation.commands.kick.options.member.description,
                            ru: locales.ru.categories.moderation.commands.kick.options.member.description
                        })
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('reason')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.kick.options.reason.name,
                            fr: locales.fr.categories.moderation.commands.kick.options.reason.name,
                            "pt-BR": locales.pt.categories.moderation.commands.kick.options.reason.name,
                            "es-ES": locales.es.categories.moderation.commands.kick.options.reason.name,
                            tr: locales.tr.categories.moderation.commands.kick.options.reason.name,
                            ru: locales.ru.categories.moderation.commands.kick.options.reason.name
                        })
                        .setDescription('The reason of kicking the member')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.kick.options.reason.description,
                            fr: locales.fr.categories.moderation.commands.kick.options.reason.description,
                            "pt-BR": locales.pt.categories.moderation.commands.kick.options.reason.description,
                            "es-ES": locales.es.categories.moderation.commands.kick.options.reason.description,
                            tr: locales.tr.categories.moderation.commands.kick.options.reason.description,
                            ru: locales.ru.categories.moderation.commands.kick.options.reason.description
                        })
                        .setMaxLength(256)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('ban')
                .setNameLocalizations({
                    de: locales.de.categories.moderation.commands.ban.name,
                    fr: locales.fr.categories.moderation.commands.ban.name,
                    "pt-BR": locales.pt.categories.moderation.commands.ban.name,
                    "es-ES": locales.es.categories.moderation.commands.ban.name,
                    tr: locales.tr.categories.moderation.commands.ban.name,
                    ru: locales.ru.categories.moderation.commands.ban.name
                })
                .setDescription('Ban a member from the server')
                .setDescriptionLocalizations({
                    de: locales.de.categories.moderation.commands.ban.description,
                    fr: locales.fr.categories.moderation.commands.ban.description,
                    "pt-BR": locales.pt.categories.moderation.commands.ban.description,
                    "es-ES": locales.es.categories.moderation.commands.ban.description,
                    tr: locales.tr.categories.moderation.commands.ban.description,
                    ru: locales.ru.categories.moderation.commands.ban.description
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.ban.options.member.name,
                            fr: locales.fr.categories.moderation.commands.ban.options.member.name,
                            "pt-BR": locales.pt.categories.moderation.commands.ban.options.member.name,
                            "es-ES": locales.es.categories.moderation.commands.ban.options.member.name,
                            tr: locales.tr.categories.moderation.commands.ban.options.member.name,
                            ru: locales.ru.categories.moderation.commands.ban.options.member.name
                        })
                        .setDescription('The member you want to ban')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.ban.options.member.description,
                            fr: locales.fr.categories.moderation.commands.ban.options.member.description,
                            "pt-BR": locales.pt.categories.moderation.commands.ban.options.member.description,
                            "es-ES": locales.es.categories.moderation.commands.ban.options.member.description,
                            tr: locales.tr.categories.moderation.commands.ban.options.member.description,
                            ru: locales.ru.categories.moderation.commands.ban.options.member.description
                        })
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('delete_messages')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.ban.options.delete_messages.name,
                            fr: locales.fr.categories.moderation.commands.ban.options.delete_messages.name,
                            "pt-BR": locales.pt.categories.moderation.commands.ban.options.delete_messages.name,
                            "es-ES": locales.es.categories.moderation.commands.ban.options.delete_messages.name,
                            tr: locales.tr.categories.moderation.commands.ban.options.delete_messages.name,
                            ru: locales.ru.categories.moderation.commands.ban.options.delete_messages.name
                        })
                        .setDescription("Delete the member's messages from the past 7 days?")
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.ban.options.delete_messages.description,
                            fr: locales.fr.categories.moderation.commands.ban.options.delete_messages.description,
                            "pt-BR": locales.pt.categories.moderation.commands.ban.options.delete_messages.description,
                            "es-ES": locales.es.categories.moderation.commands.ban.options.delete_messages.description,
                            tr: locales.tr.categories.moderation.commands.ban.options.delete_messages.description,
                            ru: locales.ru.categories.moderation.commands.ban.options.delete_messages.description
                        })
                        .setMaxLength(7)
                )
                .addStringOption(option =>
                    option
                        .setName('reason')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.ban.options.reason.name,
                            fr: locales.fr.categories.moderation.commands.ban.options.reason.name,
                            "pt-BR": locales.pt.categories.moderation.commands.ban.options.reason.name,
                            "es-ES": locales.es.categories.moderation.commands.ban.options.reason.name,
                            tr: locales.tr.categories.moderation.commands.ban.options.reason.name,
                            ru: locales.ru.categories.moderation.commands.ban.options.reason.name
                        })
                        .setDescription('The reason of banning the member')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.ban.options.reason.description,
                            fr: locales.fr.categories.moderation.commands.ban.options.reason.description,
                            "pt-BR": locales.pt.categories.moderation.commands.ban.options.reason.description,
                            "es-ES": locales.es.categories.moderation.commands.ban.options.reason.description,
                            tr: locales.tr.categories.moderation.commands.ban.options.reason.description,
                            ru: locales.ru.categories.moderation.commands.ban.options.reason.description
                        })
                        .setMaxLength(256)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('delete_messages')
                .setNameLocalizations({
                    de: locales.de.categories.moderation.commands.delete_messages.name,
                    fr: locales.fr.categories.moderation.commands.delete_messages.name,
                    "pt-BR": locales.pt.categories.moderation.commands.delete_messages.name,
                    "es-ES": locales.es.categories.moderation.commands.delete_messages.name,
                    tr: locales.tr.categories.moderation.commands.delete_messages.name,
                    ru: locales.ru.categories.moderation.commands.delete_messages.name
                })
                .setDescription('Delete a number of messages in a specific channel')
                .setDescriptionLocalizations({
                    de: locales.de.categories.moderation.commands.delete_messages.description,
                    fr: locales.fr.categories.moderation.commands.delete_messages.description,
                    "pt-BR": locales.pt.categories.moderation.commands.delete_messages.description,
                    "es-ES": locales.es.categories.moderation.commands.delete_messages.description,
                    tr: locales.tr.categories.moderation.commands.delete_messages.description,
                    ru: locales.ru.categories.moderation.commands.delete_messages.description
                })
                .addNumberOption(option =>
                    option
                        .setName('amount')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.delete_messages.options.amount.name,
                            fr: locales.fr.categories.moderation.commands.delete_messages.options.amount.name,
                            "pt-BR": locales.pt.categories.moderation.commands.delete_messages.options.amount.name,
                            "es-ES": locales.es.categories.moderation.commands.delete_messages.options.amount.name,
                            tr: locales.tr.categories.moderation.commands.delete_messages.options.amount.name,
                            ru: locales.ru.categories.moderation.commands.delete_messages.options.amount.name
                        })
                        .setDescription('The number of messages to delete')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.delete_messages.options.amount.description,
                            fr: locales.fr.categories.moderation.commands.delete_messages.options.amount.description,
                            "pt-BR": locales.pt.categories.moderation.commands.delete_messages.options.amount.description,
                            "es-ES": locales.es.categories.moderation.commands.delete_messages.options.amount.description,
                            tr: locales.tr.categories.moderation.commands.delete_messages.options.amount.description,
                            ru: locales.ru.categories.moderation.commands.delete_messages.options.amount.description
                        })
                        .setMinValue(1)
                        .setMaxValue(100)
                        .setRequired(true)
                )
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.delete_messages.options.channel.name,
                            fr: locales.fr.categories.moderation.commands.delete_messages.options.channel.name,
                            "pt-BR": locales.pt.categories.moderation.commands.delete_messages.options.channel.name,
                            "es-ES": locales.es.categories.moderation.commands.delete_messages.options.channel.name,
                            tr: locales.tr.categories.moderation.commands.delete_messages.options.channel.name,
                            ru: locales.ru.categories.moderation.commands.delete_messages.options.channel.name
                        })
                        .setDescription("The channel where the messages will be deleted")
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.delete_messages.options.channel.description,
                            fr: locales.fr.categories.moderation.commands.delete_messages.options.channel.description,
                            "pt-BR": locales.pt.categories.moderation.commands.delete_messages.options.channel.description,
                            "es-ES": locales.es.categories.moderation.commands.delete_messages.options.channel.description,
                            tr: locales.tr.categories.moderation.commands.delete_messages.options.channel.description,
                            ru: locales.ru.categories.moderation.commands.delete_messages.options.channel.description
                        })
                        .addChannelTypes(ChannelType.GuildText)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unban')
                .setNameLocalizations({
                    de: locales.de.categories.moderation.commands.unban.name,
                    fr: locales.fr.categories.moderation.commands.unban.name,
                    "pt-BR": locales.pt.categories.moderation.commands.unban.name,
                    "es-ES": locales.es.categories.moderation.commands.unban.name,
                    tr: locales.tr.categories.moderation.commands.unban.name,
                    ru: locales.ru.categories.moderation.commands.unban.name
                })
                .setDescription('Unban a user from the server')
                .setDescriptionLocalizations({
                    de: locales.de.categories.moderation.commands.unban.description,
                    fr: locales.fr.categories.moderation.commands.unban.description,
                    "pt-BR": locales.pt.categories.moderation.commands.unban.description,
                    "es-ES": locales.es.categories.moderation.commands.unban.description,
                    tr: locales.tr.categories.moderation.commands.unban.description,
                    ru: locales.ru.categories.moderation.commands.unban.description
                })
                .addStringOption(option =>
                    option
                        .setName('id')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.unban.options.id.name,
                            fr: locales.fr.categories.moderation.commands.unban.options.id.name,
                            "pt-BR": locales.pt.categories.moderation.commands.unban.options.id.name,
                            "es-ES": locales.es.categories.moderation.commands.unban.options.id.name,
                            tr: locales.tr.categories.moderation.commands.unban.options.id.name,
                            ru: locales.ru.categories.moderation.commands.unban.options.id.name
                        })
                        .setDescription('The id of the user you want to unban')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.unban.options.id.description,
                            fr: locales.fr.categories.moderation.commands.unban.options.id.description,
                            "pt-BR": locales.pt.categories.moderation.commands.unban.options.id.description,
                            "es-ES": locales.es.categories.moderation.commands.unban.options.id.description,
                            tr: locales.tr.categories.moderation.commands.unban.options.id.description,
                            ru: locales.ru.categories.moderation.commands.unban.options.id.description
                        })
                        .setMinLength(17)
                        .setMaxLength(19)
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('reason')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.unban.options.reason.name,
                            fr: locales.fr.categories.moderation.commands.unban.options.reason.name,
                            "pt-BR": locales.pt.categories.moderation.commands.unban.options.reason.name,
                            "es-ES": locales.es.categories.moderation.commands.unban.options.reason.name,
                            tr: locales.tr.categories.moderation.commands.unban.options.reason.name,
                            ru: locales.ru.categories.moderation.commands.unban.options.reason.name
                        })
                        .setDescription('The reason of unbanning the user')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.unban.options.reason.description,
                            fr: locales.fr.categories.moderation.commands.unban.options.reason.description,
                            "pt-BR": locales.pt.categories.moderation.commands.unban.options.reason.description,
                            "es-ES": locales.es.categories.moderation.commands.unban.options.reason.description,
                            tr: locales.tr.categories.moderation.commands.unban.options.reason.description,
                            ru: locales.ru.categories.moderation.commands.unban.options.reason.description
                        })
                        .setMaxLength(256)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('lock')
                .setNameLocalizations({
                    de: locales.de.categories.moderation.commands.lock.name,
                    fr: locales.fr.categories.moderation.commands.lock.name,
                    "pt-BR": locales.pt.categories.moderation.commands.lock.name,
                    "es-ES": locales.es.categories.moderation.commands.lock.name,
                    tr: locales.tr.categories.moderation.commands.lock.name,
                    ru: locales.ru.categories.moderation.commands.lock.name
                })
                .setDescription('Lock a specific channel')
                .setDescriptionLocalizations({
                    de: locales.de.categories.moderation.commands.lock.description,
                    fr: locales.fr.categories.moderation.commands.lock.description,
                    "pt-BR": locales.pt.categories.moderation.commands.lock.description,
                    "es-ES": locales.es.categories.moderation.commands.lock.description,
                    tr: locales.tr.categories.moderation.commands.lock.description,
                    ru: locales.ru.categories.moderation.commands.lock.description
                })
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.lock.options.channel.name,
                            fr: locales.fr.categories.moderation.commands.lock.options.channel.name,
                            "pt-BR": locales.pt.categories.moderation.commands.lock.options.channel.name,
                            "es-ES": locales.es.categories.moderation.commands.lock.options.channel.name,
                            tr: locales.tr.categories.moderation.commands.lock.options.channel.name,
                            ru: locales.ru.categories.moderation.commands.lock.options.channel.name
                        })
                        .setDescription("The channel that will be locked")
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.lock.options.channel.description,
                            fr: locales.fr.categories.moderation.commands.lock.options.channel.description,
                            "pt-BR": locales.pt.categories.moderation.commands.lock.options.channel.description,
                            "es-ES": locales.es.categories.moderation.commands.lock.options.channel.description,
                            tr: locales.tr.categories.moderation.commands.lock.options.channel.description,
                            ru: locales.ru.categories.moderation.commands.lock.options.channel.description
                        })
                        .addChannelTypes(ChannelType.GuildText)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('unlock')
                .setNameLocalizations({
                    de: locales.de.categories.moderation.commands.unlock.name,
                    fr: locales.fr.categories.moderation.commands.unlock.name,
                    "pt-BR": locales.pt.categories.moderation.commands.unlock.name,
                    "es-ES": locales.es.categories.moderation.commands.unlock.name,
                    tr: locales.tr.categories.moderation.commands.unlock.name,
                    ru: locales.ru.categories.moderation.commands.unlock.name
                })
                .setDescription('Unlock a specific channel')
                .setDescriptionLocalizations({
                    de: locales.de.categories.moderation.commands.unlock.description,
                    fr: locales.fr.categories.moderation.commands.unlock.description,
                    "pt-BR": locales.pt.categories.moderation.commands.unlock.description,
                    "es-ES": locales.es.categories.moderation.commands.unlock.description,
                    tr: locales.tr.categories.moderation.commands.unlock.description,
                    ru: locales.ru.categories.moderation.commands.unlock.description
                })
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.unlock.options.channel.name,
                            fr: locales.fr.categories.moderation.commands.unlock.options.channel.name,
                            "pt-BR": locales.pt.categories.moderation.commands.unlock.options.channel.name,
                            "es-ES": locales.es.categories.moderation.commands.unlock.options.channel.name,
                            tr: locales.tr.categories.moderation.commands.unlock.options.channel.name,
                            ru: locales.ru.categories.moderation.commands.unlock.options.channel.name
                        })
                        .setDescription("The channel that will be unlocked")
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.unlock.options.channel.description,
                            fr: locales.fr.categories.moderation.commands.unlock.options.channel.description,
                            "pt-BR": locales.pt.categories.moderation.commands.unlock.options.channel.description,
                            "es-ES": locales.es.categories.moderation.commands.unlock.options.channel.description,
                            tr: locales.tr.categories.moderation.commands.unlock.options.channel.description,
                            ru: locales.ru.categories.moderation.commands.unlock.options.channel.description
                        })
                        .addChannelTypes(ChannelType.GuildText)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('slowmode')
                .setNameLocalizations({
                    de: locales.de.categories.moderation.commands.slowmode.name,
                    fr: locales.fr.categories.moderation.commands.slowmode.name,
                    "pt-BR": locales.pt.categories.moderation.commands.slowmode.name,
                    "es-ES": locales.es.categories.moderation.commands.slowmode.name,
                    tr: locales.tr.categories.moderation.commands.slowmode.name,
                    ru: locales.ru.categories.moderation.commands.slowmode.name
                })
                .setDescription('Set the slowmode for a specific channel')
                .setDescriptionLocalizations({
                    de: locales.de.categories.moderation.commands.slowmode.description,
                    fr: locales.fr.categories.moderation.commands.slowmode.description,
                    "pt-BR": locales.pt.categories.moderation.commands.slowmode.description,
                    "es-ES": locales.es.categories.moderation.commands.slowmode.description,
                    tr: locales.tr.categories.moderation.commands.slowmode.description,
                    ru: locales.ru.categories.moderation.commands.slowmode.description
                })
                .addStringOption(option =>
                    option
                        .setName('time')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.slowmode.options.time.name,
                            fr: locales.fr.categories.moderation.commands.slowmode.options.time.name,
                            "pt-BR": locales.pt.categories.moderation.commands.slowmode.options.time.name,
                            "es-ES": locales.es.categories.moderation.commands.slowmode.options.time.name,
                            tr: locales.tr.categories.moderation.commands.slowmode.options.time.name,
                            ru: locales.ru.categories.moderation.commands.slowmode.options.time.name
                        })
                        .setDescription("The time of the slowmode")
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.slowmode.options.time.description,
                            fr: locales.fr.categories.moderation.commands.slowmode.options.time.description,
                            "pt-BR": locales.pt.categories.moderation.commands.slowmode.options.time.description,
                            "es-ES": locales.es.categories.moderation.commands.slowmode.options.time.description,
                            tr: locales.tr.categories.moderation.commands.slowmode.options.time.description,
                            ru: locales.ru.categories.moderation.commands.slowmode.options.time.description
                        })
                        .setMaxLength(6)
                        .setRequired(true)
                )
                .addChannelOption(option =>
                    option
                        .setName('channel')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.slowmode.options.channel.name,
                            fr: locales.fr.categories.moderation.commands.slowmode.options.channel.name,
                            "pt-BR": locales.pt.categories.moderation.commands.slowmode.options.channel.name,
                            "es-ES": locales.es.categories.moderation.commands.slowmode.options.channel.name,
                            tr: locales.tr.categories.moderation.commands.slowmode.options.channel.name,
                            ru: locales.ru.categories.moderation.commands.slowmode.options.channel.name
                        })
                        .setDescription("The channel where the slowmode will be set")
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.slowmode.options.channel.description,
                            fr: locales.fr.categories.moderation.commands.slowmode.options.channel.description,
                            "pt-BR": locales.pt.categories.moderation.commands.slowmode.options.channel.description,
                            "es-ES": locales.es.categories.moderation.commands.slowmode.options.channel.description,
                            tr: locales.tr.categories.moderation.commands.slowmode.options.channel.description,
                            ru: locales.ru.categories.moderation.commands.slowmode.options.channel.description
                        })
                        .addChannelTypes(ChannelType.GuildText)
                )
                .addStringOption(option =>
                    option
                        .setName('reason')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.slowmode.options.reason.name,
                            fr: locales.fr.categories.moderation.commands.slowmode.options.reason.name,
                            "pt-BR": locales.pt.categories.moderation.commands.slowmode.options.reason.name,
                            "es-ES": locales.es.categories.moderation.commands.slowmode.options.reason.name,
                            tr: locales.tr.categories.moderation.commands.slowmode.options.reason.name,
                            ru: locales.ru.categories.moderation.commands.slowmode.options.reason.name
                        })
                        .setDescription("The reason of setting the slowmode")
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.slowmode.options.reason.description,
                            fr: locales.fr.categories.moderation.commands.slowmode.options.reason.description,
                            "pt-BR": locales.pt.categories.moderation.commands.slowmode.options.reason.description,
                            "es-ES": locales.es.categories.moderation.commands.slowmode.options.reason.description,
                            tr: locales.tr.categories.moderation.commands.slowmode.options.reason.description,
                            ru: locales.ru.categories.moderation.commands.slowmode.options.reason.description
                        })
                        .setMaxLength(256)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('warn')
                .setNameLocalizations({
                    de: locales.de.categories.moderation.commands.warn.name,
                    fr: locales.fr.categories.moderation.commands.warn.name,
                    "pt-BR": locales.pt.categories.moderation.commands.warn.name,
                    "es-ES": locales.es.categories.moderation.commands.warn.name,
                    tr: locales.tr.categories.moderation.commands.warn.name,
                    ru: locales.ru.categories.moderation.commands.warn.name
                })
                .setDescription('Warn a member in the server')
                .setDescriptionLocalizations({
                    de: locales.de.categories.moderation.commands.warn.description,
                    fr: locales.fr.categories.moderation.commands.warn.description,
                    "pt-BR": locales.pt.categories.moderation.commands.warn.description,
                    "es-ES": locales.es.categories.moderation.commands.warn.description,
                    tr: locales.tr.categories.moderation.commands.warn.description,
                    ru: locales.ru.categories.moderation.commands.warn.description
                })
                .addUserOption(option =>
                    option
                        .setName('member')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.warn.options.member.name,
                            fr: locales.fr.categories.moderation.commands.warn.options.member.name,
                            "pt-BR": locales.pt.categories.moderation.commands.warn.options.member.name,
                            "es-ES": locales.es.categories.moderation.commands.warn.options.member.name,
                            tr: locales.tr.categories.moderation.commands.warn.options.member.name,
                            ru: locales.ru.categories.moderation.commands.warn.options.member.name
                        })
                        .setDescription('The member you want to warn')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.warn.options.member.description,
                            fr: locales.fr.categories.moderation.commands.warn.options.member.description,
                            "pt-BR": locales.pt.categories.moderation.commands.warn.options.member.description,
                            "es-ES": locales.es.categories.moderation.commands.warn.options.member.description,
                            tr: locales.tr.categories.moderation.commands.warn.options.member.description,
                            ru: locales.ru.categories.moderation.commands.warn.options.member.description
                        })
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName('reason')
                        .setNameLocalizations({
                            de: locales.de.categories.moderation.commands.warn.options.reason.name,
                            fr: locales.fr.categories.moderation.commands.warn.options.reason.name,
                            "pt-BR": locales.pt.categories.moderation.commands.warn.options.reason.name,
                            "es-ES": locales.es.categories.moderation.commands.warn.options.reason.name,
                            tr: locales.tr.categories.moderation.commands.warn.options.reason.name,
                            ru: locales.ru.categories.moderation.commands.warn.options.reason.name
                        })
                        .setDescription('The reason of warning the member')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.moderation.commands.warn.options.reason.description,
                            fr: locales.fr.categories.moderation.commands.warn.options.reason.description,
                            "pt-BR": locales.pt.categories.moderation.commands.warn.options.reason.description,
                            "es-ES": locales.es.categories.moderation.commands.warn.options.reason.description,
                            tr: locales.tr.categories.moderation.commands.warn.options.reason.description,
                            ru: locales.ru.categories.moderation.commands.warn.options.reason.description
                        })
                        .setMaxLength(256)
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
                case 'slowmode':
                    await slowmodeChannel(interaction);
                    break;
                case 'warn':
                    await warnMember(interaction);
                    break;
            }
        }
    }
}