module.exports = async function convertms(ms) {
    const seconds = (Math.floor(ms / 1000) % 60) < 10 ? '0' + (Math.floor(ms / 1000) % 60) : (Math.floor(ms / 1000) % 60);
    const minutes = (Math.floor(ms / 60000) % 60) < 10 ? '0' + (Math.floor(ms / 60000) % 60) : (Math.floor(ms / 60000) % 60);
    const hours = (Math.floor(ms / 3600000) % 24) < 10 ? '0' + (Math.floor(ms / 3600000) % 24) : (Math.floor(ms / 3600000) % 24);

    return (hours + ':' + minutes + ':' + seconds);
}