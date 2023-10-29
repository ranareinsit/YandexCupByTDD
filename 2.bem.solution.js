function isAlphabetCharacter(char) {
    if (!char) return false
    const charCode = char.charCodeAt(0);
    return (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122);
}

module.exports = function (str) {
    let result = {}
    let input = str.split('')
    // remove unused part
    while (isAlphabetCharacter(input[0])) input.shift()
    // read used part
    while (input.length > 0) {
        let key = []
        while (isAlphabetCharacter(input[input.length - 1]) && input.length > 0) {
            key.unshift(input.pop())
        }
        let value = []
        while (false == isAlphabetCharacter(input[input.length - 1]) && input.length > 0) {
            value.unshift(input.pop())
        }
        key = key.join('')
        value = value.join('')
        result[key] = value
    }

    return result
}

