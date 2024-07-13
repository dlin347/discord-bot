module.exports = async function convert(str) {
    str = str.trim();
    if (str.toLowerCase().match(/(\d+)([smhdwy])/)) {
        const number = Number(str.slice(0, str.length - 1));
        const unit = str[str.length - 1];
        switch (unit) {
            case "s":
                return number * 1000;
            case "m":
                return number * 60000;
            case "h":
                return number * 3600000;
            case "d":
                return number * 86400000;
            case "w":
                return number * 604800000;
            case "y":
                return number * 31556952000;
            default:
                return null;
        }
    } else {
        return null;
    }
}