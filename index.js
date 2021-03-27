var express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var list = []


app.get('/sumlist', function(req, res) {
  // item = {
  //   "name": req.params.name,
  //   "category" : req.params.category,
  //   "price": req.params.price
  // }
  var input = req.query;
  var category = input.category
  var name = input.name
  var price = parseInt(input.price);
  item= {
    "contents": [{
            "align": "start",
            "color": "#000000",
            "size": "md",
            "text": name,
            "type": "text",
            "weight": "regular"
        },
        {
            "align": "end",
            "color": "#000000",
            "size": "md",
            "text": price+" บาท",
            "type": "text",
            "weight": "bold"
        }
    ],
    "layout": "baseline",
    "type": "box"
}

  list.push(item)
  res.json({
    description: 'item added',
    item : item
  });
});

app.get('/sumlist/flex', function(req, res) {
  var sum=0
  for(i = 0; i < list.length; i++){
    sum += parseInt(list[i].contents[1].text.split(" ")[0])
    console.log("num="+sum)
  }
  console.log("sum="+sum)
  separator = {
    "margin": "none",
    "type": "separator"
  }
  sumItem={
    "contents": [{
            "align": "start",
            "color": "#000000",
            "size": "md",
            "text": "รวม",
            "type": "text",
            "weight": "regular"
        },
        {
            "align": "end",
            "color": "#000000",
            "size": "md",
            "text": sum +" บาท",
            "type": "text",
            "weight": "bold"
        }
    ],
    "layout": "baseline",
    "type": "box"
}
  list.push(separator)
  list.push(sumItem)
  res.json({
    output: list
  });
});
  
  app.listen(80, function () {
    console.log('App listening on port 5000!');
  })
  
