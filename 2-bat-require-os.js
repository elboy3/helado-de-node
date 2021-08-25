// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    calazoo: os.freemem(),
}

console.log(currentOS)