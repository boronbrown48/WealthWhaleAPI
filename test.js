var list=[]
item= {
    "contents": [{
            "align": "start",
            "color": "#000000",
            "size": "md",
            "text": "name",
            "type": "text",
            "weight": "regular"
        },
        {
            "align": "end",
            "color": "#000000",
            "size": "md",
            "text": "20 บาท",
            "type": "text",
            "weight": "bold"
        }
    ],
    "layout": "baseline",
    "type": "box"
}

list.push(item)
list.push(item)
list.push(item)
for(i = 0; i < list.length; i++){
    console.log(parseInt( list[i].contents[1].text.split(" ")[0]))
}
