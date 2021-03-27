// var list=[]
// item= {
//     "contents": [{
//             "align": "start",
//             "color": "#000000",
//             "size": "md",
//             "text": "name",
//             "type": "text",
//             "weight": "regular"
//         },
//         {
//             "align": "end",
//             "color": "#000000",
//             "size": "md",
//             "text": "20 บาท",
//             "type": "text",
//             "weight": "bold"
//         }
//     ],
//     "layout": "baseline",
//     "type": "box"
// }

// list.push(item)
// list.push(item)
// list.push(item)
// for(i = 0; i < list.length; i++){
//     console.log(parseInt( list[i].contents[1].text.split(" ")[0]))
// }


{
    "type": "bubble",
    "body": {
      "action": {
        "label": "Action",
        "type": "uri",
        "uri": "https://linecorp.com"
      },
      "contents": [
        {
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
          "contents": xxxxxxxxxxxxx,
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
      "contents": [
        {
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