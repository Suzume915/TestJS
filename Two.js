const fs = require('fs').promises

async function start(){
const data = await fs.readFile("collectdata.json",'utf-8')
console.log(data)
}

start()