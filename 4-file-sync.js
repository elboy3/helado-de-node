// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/third.txt', 'lol just do me')