console.log('Hello World')
main("500KG")

function main(string) {
    const fs = require('fs')

    let rawdata = fs.readFileSync('strategems.json', 'utf8')
    let strategem = JSON.parse(rawdata)
    let keys = strategem.keys
    console.log(keys)
}




