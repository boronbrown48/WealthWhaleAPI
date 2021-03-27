{
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
                "contents": [{
                        "contents": [{
                                "align": "start",
                                "color": "#000000",
                                "size": "md",
                                "text": "<<catagory>> <<detail>>",
                                "type": "text",
                                "weight": "regular"
                            },
                            {
                                "align": "end",
                                "color": "#000000",
                                "size": "md",
                                "text": "<<num>> บาท",
                                "type": "text",
                                "weight": "bold"
                            }
                        ],
                        "layout": "baseline",
                        "type": "box"
                    },
                    {
                        "contents": [{
                                "align": "start",
                                "color": "#000000",
                                "size": "md",
                                "text": "<<catagory>> <<detail>>",
                                "type": "text",
                                "weight": "regular"
                            },
                            {
                                "align": "end",
                                "color": "#000000",
                                "size": "md",
                                "text": "<<num>> บาท",
                                "type": "text",
                                "weight": "bold"
                            }
                        ],
                        "layout": "baseline",
                        "type": "box"
                    },
                    {
                        "margin": "none",
                        "type": "separator"
                    },
                    {
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
                                "text": "<<num>> บาท",
                                "type": "text",
                                "weight": "bold"
                            }
                        ],
                        "layout": "baseline",
                        "type": "box"
                    }
                ],
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