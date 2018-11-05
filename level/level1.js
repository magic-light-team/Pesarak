level1 = [{
    "stageId": 1,
    "level": 1,
    "section": 1,
    "name": "بیدار شدن",
    "desc": "ساعت زنگ می زند. می خواهی چکار کنی؟",
    "options": [{
            "optionId": 1,
            "title": "قطع زنگ و خوابیدن",
            "color": "btn-outline-secondary",
            "event": {
                "nextStage": 2,
                "addedTime": 15,
                "addedEnergy": 20,
                "score": 10
            }
        },
        {
            "optionId": 2,
            "title": " بیدار شدن و شستن و شو",
            "color": "btn-outline-warning",
            "event": {
                "nextStage": 10,
                "addedTime": 5,
                "addedEnergy": 0,
                "score": 15
            }
        }
    ]
},
{
    "stageId": 2,
    "level": 1,
    "section": 1,
    "name": "بیدار شدن",
    "desc": "باز هم ساعت زنگ می زند. نمی خواهی بیدار شوی؟",
    "options": [{
            "optionId": 1,
            "title": "قطع زنگ و خوابیدن",
            "color": "btn-outline-secondary",
            "event": {
                "nextStage": 2,
                "addedTime": 15,
                "addedEnergy": 5,
                "score": 5
            }
        },
        {
            "optionId": 2,
            "title": "بیدار شدن",
            "color": "btn-outline-warning",
            "event": {
                "nextStage": 10,
                "addedTime": 5,
                "addedEnergy": 0,
                "score": 15
            }
        }
    ]
},
{
    "stageId": 10,
    "level": 1,
    "section": 2,
    "name": "آماده شدن",
    "desc": "حالا که بیدار شدی می خواهی چکار کنی؟",
    "options": [{
            "optionId": 1,
            "title": "مرتب کردن اتاق",
            "color": "btn-outline-secondary",
            "event": {
                "nextStage": 11,
                "addedTime": 15,
                "addedEnergy": 5,
                "score": 5
            }
        },
        {
            "optionId": 2,
            "title": "خوردن صبحانه",
            "color": "btn-outline-warning",
            "event": {
                "nextStage": 12,
                "addedTime": 5,
                "addedEnergy": 0,
                "score": 15
            }
        }
        ,
        {
            "optionId": 2,
            "title": "جمع کردن وسایل برای  مدرسه",
            "color": "btn-outline-info",
            "event": {
                "nextStage": 13,
                "addedTime": 5,
                "addedEnergy": 0,
                "score": 15
            }
        }
    ]
}];