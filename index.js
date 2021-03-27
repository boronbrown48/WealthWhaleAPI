var express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

var incomeList = []
var incomeCategory = []
var expenseList = []
var expenseCategory = []

app.get('/sumincomelist', function (req, res) {
  var input = req.query;
  var category = input.category
  var name = input.name
  var price = parseInt(input.price);
  item = {
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
        "text": price + " บาท",
        "type": "text",
        "weight": "bold"
      }
    ],
    "layout": "baseline",
    "type": "box"
  }
  incomeList.push(item)
  incomeCategory.push(category)
  res.json({
    description: 'item added',
    item: item
  });
});


app.get('/sumexpenselist', function (req, res) {
  var input = req.query;
  var category = input.category
  var name = input.name
  var price = parseInt(input.price);
  item = {
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
        "text": price + " บาท",
        "type": "text",
        "weight": "bold"
      }
    ],
    "layout": "baseline",
    "type": "box"
  }
  expenseList.push(item)
  expenseCategory.push(category)
  res.json({
    description: 'item added',
    item: item
  });
});




app.get('/sumincomelist/flex', function (req, res) {
  var sum = 0
  var mergeList = incomeList
  incomeList=[]
  for (i = 0; i < mergeList.length; i++) {
    sum += parseInt(mergeList[i].contents[1].text.split(" ")[0])
    console.log("num=" + sum)
  }
  console.log("sum=" + sum)
  separator = {
    "margin": "none",
    "type": "separator"
  }
  sumItem = {
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
        "text": sum + " บาท",
        "type": "text",
        "weight": "bold"
      }
    ],
    "layout": "baseline",
    "type": "box"
  }
  mergeList.push(separator)
  mergeList.push(sumItem)
  template = {
    "type": "bubble",
    "body": {
      "action": {
        "label": "Action",
        "type": "uri",
        "uri": "https://linecorp.com"
      },
      "contents": [{
          "align": "center",
          "color": "#00B900",
          "size": "lg",
          "text": "ยืนยันบันทึกรายรับ",
          "type": "text",
          "weight": "bold",
          "wrap": true
        },
        {
          "margin": "none",
          "type": "separator"
        },
        {
          "contents": mergeList,
          "layout": "vertical",
          "spacing": "sm",
          "type": "box"
        }
      ],
      "layout": "vertical",
      "spacing": "xl",
      "type": "box"
    },
    "footer": {
      "contents": [{
          "action": {
            "label": "ยืนยัน",
            "text": "ยืนยัน",
            "type": "message"
          },
          "style": "primary",
          "type": "button"
        },
        {
          "action": {
            "label": "ยกเลิก",
            "text": "ยกเลิก",
            "type": "message"
          },
          "style": "primary",
          "type": "button"
        }
      ],
      "layout": "horizontal",
      "spacing": "sm",
      "type": "box"
    }
  }


  res.json({
    output: template
  });
});


app.get('/sumexpenselist/flex', function (req, res) {
  var sum = 0
  var mergeList = expenseList
  expenseList=[]
  for (i = 0; i < mergeList.length; i++) {
    sum += parseInt(mergeList[i].contents[1].text.split(" ")[0])
    console.log("num=" + sum)
  }
  console.log("sum=" + sum)
  separator = {
    "margin": "none",
    "type": "separator"
  }
  sumItem = {
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
        "text": sum + " บาท",
        "type": "text",
        "weight": "bold"
      }
    ],
    "layout": "baseline",
    "type": "box"
  }
  mergeList.push(separator)
  mergeList.push(sumItem)

  template = {
    "type": "bubble",
    "body": {
      "action": {
        "label": "Action",
        "type": "uri",
        "uri": "https://linecorp.com"
      },
      "contents": [{
          "align": "center",
          "color": "#00B900",
          "size": "lg",
          "text": "ยืนยันบันทึกรายรับ",
          "type": "text",
          "weight": "bold",
          "wrap": true
        },
        {
          "margin": "none",
          "type": "separator"
        },
        {
          "contents": mergeList,
          "layout": "vertical",
          "spacing": "sm",
          "type": "box"
        }
      ],
      "layout": "vertical",
      "spacing": "xl",
      "type": "box"
    },
    "footer": {
      "contents": [{
          "action": {
            "label": "ยืนยัน",
            "text": "ยืนยัน",
            "type": "message"
          },
          "style": "primary",
          "type": "button"
        },
        {
          "action": {
            "label": "ยกเลิก",
            "text": "ยกเลิก",
            "type": "message"
          },
          "style": "primary",
          "type": "button"
        }
      ],
      "layout": "horizontal",
      "spacing": "sm",
      "type": "box"
    }
  }
  res.json({
    output: template
  });
});

// app.listen(process.env.PORT || 80, function () {
//   console.log('App listening on port 5000!');
// })

app.listen(3000, function () {
  console.log('App listening on port 5000!');
})