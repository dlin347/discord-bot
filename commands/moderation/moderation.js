const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('moderation')
        .setDescription('Moderation commands')
        .addSubcommand(subcommand =>
            subcommand
                .setName('kick')
                .setDescription('Kicks a member from the server')
                .addUserOption(option =>
                    option.setName('member')
                        .setDescription('Member to kick')
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option.setName('reason')
                        .setDescription('Reason to kick the member')
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
                .addUserOption(option =>    
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