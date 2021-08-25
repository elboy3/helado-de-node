// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum)
const { readFile, writeFile } = require('fs')

console.log("starting task")
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log("done reading first file")
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if (err){
            console.log(err)
            return
        }
        console.log("done reading second file")
        const second = result
        writeFile(
            './content/forfth-async.txt',
            `the result is : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log("done writing file")
            }
        )
    })
})
console.log("starting next task")