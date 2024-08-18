const { SlashCommandBuilder } = require('discord.js');

const coinflip = require('./coinflip.js');
const dice = require('./dice.js');
const meme = require('./meme.js');
const eightball = require('./8ball.js');
const cat = require('./cat.js');
const dog = require('./dog.js');
const joke = require('./joke.js');
const quote = require('./quote.js');
const rps = require('./rps.js');

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
                            de: locales.de.categories.fun.commands.eightball.options.question.name,
                            fr: locales.fr.categories.fun.commands.eightball.options.question.name,
                            "pt-BR": locales.pt.categories.fun.commands.eightball.options.question.name,
                            "es-ES": locales.es.categories.fun.commands.eightball.options.question.name,
                            tr: locales.tr.categories.fun.commands.eightball.options.question.name,
                            ru: locales.ru.categories.fun.commands.eightball.options.question.name
                        })
                        .setDescription('The question you want to ask the 8-ball')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.fun.commands.eightball.options.question.description,
                            fr: locales.fr.categories.fun.commands.eightball.options.question.description,
                            "pt-BR": locales.pt.categories.fun.commands.eightball.options.question.description,
                            "es-ES": locales.es.categories.fun.commands.eightball.options.question.description,
                            tr: locales.tr.categories.fun.commands.eightball.options.question.description,
                            ru: locales.ru.categories.fun.commands.eightball.options.question.description
                        })
                        .setRequired(true)
                        .setMaxLength(512)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('cat')
                .setNameLocalizations({
                    de: locales.de.categories.fun.commands.cat.name,
                    fr: locales.fr.categories.fun.commands.cat.name,
                    "pt-BR": locales.pt.categories.fun.commands.cat.name,
                    "es-ES": locales.es.categories.fun.commands.cat.name,
                    tr: locales.tr.categories.fun.commands.cat.name,
                    ru: locales.ru.categories.fun.commands.cat.name
                })
                .setDescription("Get a random cat image")
                .setDescriptionLocalizations({
                    de: locales.de.categories.fun.commands.cat.description,
                    fr: locales.fr.categories.fun.commands.cat.description,
                    "pt-BR": locales.pt.categories.fun.commands.cat.description,
                    "es-ES": locales.es.categories.fun.commands.cat.description,
                    tr: locales.tr.categories.fun.commands.cat.description,
                    ru: locales.ru.categories.fun.commands.cat.description
                })
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('dog')
                .setNameLocalizations({
                    de: locales.de.categories.fun.commands.dog.name,
                    fr: locales.fr.categories.fun.commands.dog.name,
                    "pt-BR": locales.pt.categories.fun.commands.dog.name,
                    "es-ES": locales.es.categories.fun.commands.dog.name,
                    tr: locales.tr.categories.fun.commands.dog.name,
                    ru: locales.ru.categories.fun.commands.dog.name
                })
                .setDescription("Get a random dog image")
                .setDescriptionLocalizations({
                    de: locales.de.categories.fun.commands.dog.description,
                    fr: locales.fr.categories.fun.commands.dog.description,
                    "pt-BR": locales.pt.categories.fun.commands.dog.description,
                    "es-ES": locales.es.categories.fun.commands.dog.description,
                    tr: locales.tr.categories.fun.commands.dog.description,
                    ru: locales.ru.categories.fun.commands.dog.description
                })
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('rps')
                .setNameLocalizations({
                    de: locales.de.categories.fun.commands.rps.name,
                    fr: locales.fr.categories.fun.commands.rps.name,
                    "pt-BR": locales.pt.categories.fun.commands.rps.name,
                    "es-ES": locales.es.categories.fun.commands.rps.name,
                    tr: locales.tr.categories.fun.commands.rps.name,
                    ru: locales.ru.categories.fun.commands.rps.name
                })
                .setDescription("Play rock, paper, scissors with the bot")
                .setDescriptionLocalizations({
                    de: locales.de.categories.fun.commands.rps.description,
                    fr: locales.fr.categories.fun.commands.rps.description,
                    "pt-BR": locales.pt.categories.fun.commands.rps.description,
                    "es-ES": locales.es.categories.fun.commands.rps.description,
                    tr: locales.tr.categories.fun.commands.rps.description,
                    ru: locales.ru.categories.fun.commands.rps.description
                })
                .addStringOption(option =>
                    option
                        .setName('choice')
                        .setNameLocalizations({
                            de: locales.de.categories.fun.commands.rps.options.choice.name,
                            fr: locales.fr.categories.fun.commands.rps.options.choice.name,
                            "pt-BR": locales.pt.categories.fun.commands.rps.options.choice.name,
                            "es-ES": locales.es.categories.fun.commands.rps.options.choice.name,
                            tr: locales.tr.categories.fun.commands.rps.options.choice.name,
                            ru: locales.ru.categories.fun.commands.rps.options.choice.name
                        })
                        .setDescription('Your choice to play rock, paper, scissors')
                        .setDescriptionLocalizations({
                            de: locales.de.categories.fun.commands.rps.options.choice.description,
                            fr: locales.fr.categories.fun.commands.rps.options.choice.description,
                            "pt-BR": locales.pt.categories.fun.commands.rps.options.choice.description,
                            "es-ES": locales.es.categories.fun.commands.rps.options.choice.description,
                            tr: locales.tr.categories.fun.commands.rps.options.choice.description,
                            ru: locales.ru.categories.fun.commands.rps.options.choice.description
                        })
                        .addChoices(
                            { name: '🪨', value: '🪨' },
                            { name: '🧻', value: '🧻' },
                            { name: '✂️', value: '✂️' },
                        )
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('joke')
                .setDescription("Get a random joke (only available in english)")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('meme')
                .setDescription("Get a random meme image (only available in english)")
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('quote')
                .setDescription("Get a random famous quote (only available in english)")
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
                case 'cat':
                    await cat(interaction);
                    break;
                case 'dog':
                    await dog(interaction);
                    break;
                case 'joke':
                    await joke(interaction);
                    break;
                case 'quote':
                    await quote(interaction);
                    break;
                case 'rps':
                    await rps(interaction);
                    break;
            }
        }
    }
}