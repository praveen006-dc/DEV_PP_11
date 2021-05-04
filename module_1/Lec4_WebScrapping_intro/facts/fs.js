const fs=require('fs');
const cheerio=require('cheerio')

const html1kadata=fs.readFileSync('./index.html','utf-8')

let myDocument=cheerio.load(html1kadata);


let document=myDocument("h1").text();

console.log(document)