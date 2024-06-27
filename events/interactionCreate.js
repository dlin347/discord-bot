const { Events, Collection } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            interaction.reply({ content: 'Looks like this command does not exist anymore.', ephemeral: true });
            return;
        }

        if (!interaction.client.cooldowns) {
            interaction.client.cooldowns = new Collection();
        }
        const { cooldowns } = interaction.client;
        if (!cooldowns.has(command.data.name)) {
            cooldowns.set(command.data.name, new Collection());
        }
        const now = Date.now();
        const timestamps = cooldowns.get(command.data.name);
        const defaultCooldownDuration = 5;
        const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;
        const commands = await interaction.client.application.commands.fetch();
        const cmd = commands.find(cmd => cmd.name === interaction.commandName);

        if (timestamps.has(interaction.user.id)) {
            const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;
            if (now < expirationTime) {
                const expiredTimestamp = Math.round(expirationTime / 1000);
                return interaction.reply({ content: `You are in a cooldown for the command </${command.data.name}:${cmd.id}>. You may use this command again <t:${expiredTimestamp}:R>.`, ephemeral: true });
            }
        }

        timestamps.set(interaction.user.id, now);
        setTimeout(() => {
            timestamps.delete(interaction.user.id)
        }, cooldownAmount);

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error("\x1b[31m" + error + "\x1b[0m");
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command. Try again later...', ephemeral: true });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command. Try again later...', ephemeral: true });
            }
        }
    },
};