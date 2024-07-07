module.exports = function translation(language) {
    const fs = require('fs');
    const path = require('path');
    const localesPath = path.join(__dirname, '../');
    const localeFiles = fs.readdirSync(localesPath).filter(files => files.endsWith('.json'));
    let localeFile;

    for (const file of localeFiles) {
        const locale = file.split('.')[0];
        if (locale === language) {
            localeFile = require(path.join(localesPath, file));
        }
    }
    if (!localeFile) {
        switch (language) {
            case "es-419":
                language = "es-ES";
                break;
            default:
                language = "en-US";
        }
        localeFile = require(path.join(localesPath, language + '.json'));
    }
    return localeFile;
}