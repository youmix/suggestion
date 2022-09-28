const {XMLParser} = require('fast-xml-parser');
const client = require('cheerio-httpcli');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000

app.use(cors());
//http://localhost:3000/?keyword=%E4%B8%8A%E6%88%B8

app.use(express.urlencoded({extended:true}));
exports.helloWorld = app.get('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");//さらに追加した
    //const keyword = req.query.url
    const keyword = encodeURI(req.query.keyword)
    //console.log(keyword)
    client.fetch(`https://www.google.com/complete/search?hl=en&q=${keyword}&output=toolbar`)
    .then(function (result) {
   //console.log(result.response.body);



    const xmlData = result.response.body;

    const options = {
      ignoreAttributes: false,
      attributeNamePrefix : "",
      allowBooleanAttributes: true
    };
    const parser = new XMLParser(options);
    const obj = parser.parse(xmlData);
    const output = obj
    
    //const json = output.toplevel.CompleteSuggestion;
    //console.log(output);
    //console.dir(output.toplevel.CompleteSuggestion, { depth: null });

    //for(var i = 0; i < output.length; i++) {
   // const json = output.toplevel.CompleteSuggestion;

/*
   for(let i=0 ; i<10 ; i++){
    const json =  output.toplevel.CompleteSuggestion[i]['suggestion'];
    console.log(json);
  }
*/
const json =[
  data0 =  output.toplevel.CompleteSuggestion[0]['suggestion'],
  data1 =  output.toplevel.CompleteSuggestion[1]['suggestion'],
  data2 =  output.toplevel.CompleteSuggestion[2]['suggestion'],
  data3 =  output.toplevel.CompleteSuggestion[3]['suggestion'],
  data4 =  output.toplevel.CompleteSuggestion[4]['suggestion'],
  data5 =  output.toplevel.CompleteSuggestion[5]['suggestion'],
  data6 =  output.toplevel.CompleteSuggestion[6]['suggestion'],
  data7 =  output.toplevel.CompleteSuggestion[7]['suggestion'],
  data8 =  output.toplevel.CompleteSuggestion[8]['suggestion'],
  data9 =  output.toplevel.CompleteSuggestion[9]['suggestion']

]
console.log(json)
  res.json(json)
    //res.json(json)
    //res.send('aaa')




   })
});

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
