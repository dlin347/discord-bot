const { Events, Collection } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (interaction.isChatInputCommand()) {
            const messages = require('../locales/other/messages.json');
            let locale = interaction.locale;
            if (!Object.keys(messages).includes(locale)) locale = 'en-US';
            const eExists = messages[locale].eExists;
            const eExecution = messages[locale].eExecution;

            const command = interaction.client.commands.get(interaction.commandName);
            if (!command) {
                interaction.reply({ content: eExists, ephemeral: true });
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
                    const cooldown = messages[locale].cooldown.replace('{{command}}', `</${command.data.name}:${cmd.id}>`).replace('{{timestamp}}', `<t:${expiredTimestamp}:R>`);
                    return interaction.reply({ content: `${cooldown}`, ephemeral: true });
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
                    await interaction.followUp({ content: eExecution, ephemeral: true });
                } else {
                    await interaction.reply({ content: eExecution, ephemeral: true });
                }
            }
        }
    },
};