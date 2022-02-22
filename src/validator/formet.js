function trim() {
    let name = 'Bharat Aggni Bachya'
    console.log('Trimmed name is:', name.trim())
}

function changetoLowerCase() {
    let name = 'BHARAT AGGNI BACHYA'
    console.log('Name in lowercase is:', name.toLowerCase())
}

function changeToUpperCase() {
    let name = 'bharat aggni bachya'
    console.log('Name in uppercase is: ', name.toUpperCase())
}

module.exports.trim = trim
module.exports.changeToLowerCase = changeToLowerCase
module.exports.changeToUpperCase = changeToUpperCase