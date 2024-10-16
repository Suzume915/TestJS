const fs = require('fs').promises


async function Init(){
    const db =[{"user":"Lily","element":"Cryo"}]
    const data = await fs.readFile("collectdata.json",'utf-8')
    const jsonstr = JSON.parse(data)

    if(jsonstr){
        db.push(...jsonstr)
        console.log("Import data success")
        console.log(db)
    }

    const compressdata = JSON.stringify(db,null,3)

    try{
        fs.writeFile("collectdata.json",compressdata,(err) =>{
            if(err){
                console.log("The data import is not success")
            }
           
        })

    }

    catch(err){
        console.error(err)
    }
}
Init()