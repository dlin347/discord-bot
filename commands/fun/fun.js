const { SlashCommandBuilder } = require('discord.js');

const coinflip = require('./coinflip.js');
const dice = require('./dice.js');
const meme = require('./meme.js');

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
        .setName('fun')
        .setNameLocalizations({
            de: locales.de.categories.fun.name,
            fr: locales.fr.categories.fun.name,
            "pt-BR": locales.pt.categories.fun.name,
            "es-ES": locales.es.categories.fun.name,
            tr: locales.tr.categories.fun.name,
            ru: locales.ru.categories.fun.name
        })
        .setDescription('Fun category commands')
        .setDescriptionLocalizations({
            de: locales.de.categories.fun.description,
            fr: locales.fr.categories.fun.description,
            "pt-BR": locales.pt.categories.fun.description,
            "es-ES": locales.es.categories.fun.description,
            tr: locales.tr.categories.fun.description,
            ru: locales.ru.categories.fun.description
        })
        .addSubcommand(subcommand =>
            subcommand
                .setName('coinflip')
                .setNameLocalizations({
                    de: locales.de.categories.fun.commands.coinflip.name,
                    fr: locales.fr.categories.fun.commands.coinflip.name,
                    "pt-BR": locales.pt.categories.fun.commands.coinflip.name,
                    "es-ES": locales.es.categories.fun.commands.coinflip.name,
                    tr: locales.tr.categories.fun.commands.coinflip.name,
                    ru: locales.ru.categories.fun.commands.coinflip.name
                })
                .setDescription("Flip a coin and get the result")
                .setDescriptionLocalizations({
                    de: locales.de.categories.fun.commands.coinflip.description,
                    fr: locales.fr.categories.fun.commands.coinflip.description,
                    "pt-BR": locales.pt.categories.fun.commands.coinflip.description,
                    "es-ES": locales.es.categories.fun.commands.coinflip.description,
                    tr: locales.tr.categories.fun.commands.coinflip.description,
                    ru: locales.ru.categories.fun.commands.coinflip.description
                })
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('dice')
                .setNameLocalizations({
                    de: locales.de.categories.fun.commands.dice.name,
                    fr: locales.fr.categories.fun.commands.dice.name,
                    "pt-BR": locales.pt.categories.fun.commands.dice.name,
                    "es-ES": locales.es.categories.fun.commands.dice.name,
                    tr: locales.tr.categories.fun.commands.dice.name,
                    ru: locales.ru.categories.fun.commands.dice.name
                })
                .setDescription("Roll a dice and get the result")
                .setDescriptionLocalizations({
                    de: locales.de.categories.fun.commands.dice.description,
                    fr: locales.fr.categories.fun.commands.dice.description,
                    "pt-BR": locales.pt.categories.fun.commands.dice.description,
                    "es-ES": locales.es.categories.fun.commands.dice.description,
                    tr: locales.tr.categories.fun.commands.dice.description,
                    ru: locales.ru.categories.fun.commands.dice.description
                })
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('8ball')
                .setNameLocalizations({
                    de: locales.de.categories.fun.commands.eightball.name,
                    fr: locales.fr.categories.fun.commands.eightball.name,
                    "pt-BR": locales.pt.categories.fun.commands.eightball.name,
                    "es-ES": locales.es.categories.fun.commands.eightball.name,
                    tr: locales.tr.categories.fun.commands.eightball.name,
                    ru: locales.ru.categories.fun.commands.eightball.name
                })
                .setDescription("Ask the magic 8-ball a question and get an answer")
                .setDescriptionLocalizations({
                    de: locales.de.categories.fun.commands.eightball.description,
                    fr: locales.fr.categories.fun.commands.eightball.description,
                    "pt-BR": locales.pt.categories.fun.commands.eightball.description,
                    "es-ES": locales.es.categories.fun.commands.eightball.description,
                    tr: locales.tr.categories.fun.commands.eightball.description,
                    ru: locales.ru.categories.fun.commands.eightball.description
                })
                .addStringOption(option =>
                    option
                        .setName('question')
                        .setNameLocalizations({
                            de: locales.de.categories.information.commands.eightball.options.question.name,
                            fr: locales.fr.categories.information.commands.eightball.options.question.name,
                            "pt-BR": locales.pt.categories.information.commands.eightball.options.question.name,
                            "es-ES": locales.es.categories.information.commands.eightball.options.question.name,
                            tr: locales.tr.categories.information.commands.eightball.options.question.name,
                            ru: locales.ru.categories.information.commands.eightball.options.question.name
                        })
                        .setDescription('The question you want to ask the 8-ball')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.information.commands.eightball.options.question.description,
                            fr: locales.fr.categories.information.commands.eightball.options.question.description,
                            "pt-BR": locales.pt.categories.information.commands.eightball.options.question.description,
                            "es-ES": locales.es.categories.information.commands.eightball.options.question.description,
                            tr: locales.tr.categories.information.commands.eightball.options.question.description,
                            ru: locales.ru.categories.information.commands.eightball.options.question.description
                        })
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('meme')
                .setDescription("Get a random meme image (only available in english)")
        )
        .setDMPermission(false),

    async execute(interaction) {
        if (interaction.commandName === 'fun') {
            const subcommand = interaction.options.getSubcommand();
            switch (subcommand) {
                case 'coinflip':
                    await coinflip(interaction);
                    break;
                case 'dice':
                    await dice(interaction);
                    break;
                case '8ball':
                    await eightball(interaction);
                    break;
                case 'meme':
                    await meme(interaction);
                    break;
            }
        }
    }
}