module.exports = async function convertms(ms) {
    let seconds = (Math.floor(ms / 1000) % 60) < 10 ? '0' + (Math.floor(ms / 1000) % 60) : (Math.floor(ms / 1000) % 60);
    let minutes = (Math.floor(ms / 60000) % 60) < 10 ? '0' + (Math.floor(ms / 60000) % 60) : (Math.floor(ms / 60000) % 60);
    let hours = (Math.floor(ms / 3600000) % 24) < 10 ? '0' + (Math.floor(ms / 3600000) % 24) : (Math.floor(ms / 3600000) % 24);

    return (hours + ':' + minutes + ':' + seconds);
}