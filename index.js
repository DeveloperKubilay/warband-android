const fs = require("fs");

testa()
async function testa(){
    const ac = "party_templates.txt"
    const xc= "party_templates.csv"
    const file = fs.readFileSync("./input/"+ac, "utf8")
    var mainfile = ""
    const mainrn = "\n"
    const rv = {}
    fs.readFileSync("./tr/"+xc, "utf8").split("\r\n").map((x)=>{
        x = x.split("|")
        rv[x[0]] = x[1]
    })
    try{fs.readFileSync("./tr3/"+xc, "utf8").split("\r\n").map((x)=>{
        x = x.split("|")
        if(!rv[x[0]]) rv[x[0]] = x[1]
    }).catch(()=>{})}catch{}
    try{fs.readFileSync("./tr2/"+xc, "utf8").split("\r\n").map((x)=>{
        x = x.split("|")
        if(!rv[x[0]]) rv[x[0]] = x[1]
    }).catch(()=>{})}catch{}
 //   console.log(file.includes("\r\n"))
const filesplit = file.split(mainrn)
for (var z = 0; z < filesplit.length; z++){ 
const x = filesplit[z]
//if(i > 5) break;
var keyword = x.split(" ")
for(var i = 0;i< keyword.length;i++){
var temptext = ""
 if(rv[keyword[i]]) {
   for(var j = i+1;j< keyword.length;j++){
     if(keyword[j] && isNaN(Number(keyword[j]))) {
        keyword[j] = rv[keyword[i]].split(" ").join("_")
        break;
     }
   }
 }
}
keyword.map((x)=>temptext += x + " ")
mainfile += temptext+mainrn
}
    

    fs.writeFileSync("./output/"+ac, mainfile)

}