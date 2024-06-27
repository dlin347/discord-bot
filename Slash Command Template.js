// Ephemeral, reply, editReply, deferReply, followUp, deleteReply, fetchReply, (localized responses)

const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('test') // .setNameLocalizations({})
        .setDescription('This is a test') // .setDescriptionLocalizations({})
        // Types of options:
        // String, integer, number ==> Can have choices!
        // Boolean, user, channel, role, mentionable, attachment, (subcommand, subcommand group)
        // Can add restrictions to them: String (setMaxLength and setMinLength), Integer and Number (setMin and setMax), Channel (addChannelTypes)
        .addStringOption((option) => {
            option
                .setName('test')
                .setDescription('This is an option test')
                .setRequired(true) // Set this option as required!
                .addChoices(
                    { name: 'True', value: 'True' },
                    { name: 'False', value: 'False' }
                )
        }) // Add choices to the option (*autocomplete*)
        .addSubcommand((subcommand) => {
            subcommand
                .setName('test')
                .setDescription('This is a subcommand test')
                .addStringOption((option) => {
                    option
                        .setName('test')
                        .setDescription('This is a subcommand option test')
                })
        })
        .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers) // Default permissions for the command
        .setDMPermission(false), //Cannot be used in DMs

    async execute(interaction) {
        await interaction.reply('Working!');
    },
};