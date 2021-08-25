// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const path = require('path')

console.log(path.sep)

const filePath = path.join('content//', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'generic_subfolder', 'test.txt')
console.log(absolute)