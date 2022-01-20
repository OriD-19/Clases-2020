/**
 * @param {string} title - The title of the file.
 */
function appendTag(title) {
    let i = 0;
    while(title[i] !== '-' && i < title.length) {
        i++;
    }
    let tag = title.substring(0, i);
    return tag
}

module.exports = appendTag;
