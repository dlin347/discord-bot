module.exports = async function limit(text, limit) {
    if (text.length > limit) {
        return text.slice(0, limit - 3) + '...';
    } else {
        return text;
    }
}