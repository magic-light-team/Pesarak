"use strict";
exports.__esModule = true;
var levelInfo = [{
        stageId: 1,
        level: 1,
        section: 1,
        name: "بیدار شدن",
        desc: "ساعت زنگ می زند. می خواهی چکار کنی؟",
        background: "bed.jpg",
        options: [{
                optionId: 1,
                title: "قطع زنگ و خوابیدن &larr;",
                color: "btn",
                event: {
                    nextStage: 2,
                    addedTime: 15,
                    addedEnergy: 20,
                    score: 10
                }
            },
            {
                optionId: 2,
                title: "شست و شو و بیدار شدن &larr;",
                color: "btn",
                event: {
                    nextStage: 10,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 15
                }
            }
        ]
    },
    {
        stageId: 2,
        level: 1,
        section: 1,
        name: "بیدار شدن",
        desc: "باز هم ساعت زنگ می زند. نمی خواهی بیدار شوی؟",
        background: "bed.jpg",
        options: [{
                optionId: 1,
                title: "قطع زنگ و دوباره خوابیدن &larr;",
                color: "btn",
                event: {
                    nextStage: 3,
                    addedTime: 15,
                    addedEnergy: 5,
                    score: 5
                }
            },
            {
                optionId: 2,
                title: "بیدار شدن &larr;",
                color: "btn",
                event: {
                    nextStage: 10,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 15
                }
            }
        ]
    },
    {
        stageId: 3,
        level: 1,
        section: 1,
        name: "بیدار شدن",
        desc: "دیگه فرصتی برای خوابیدن نداری، باید بیدار شوی!",
        background: "bed.jpg",
        options: [{
                optionId: 1,
                title: "سریع بیدار شدن &larr;",
                color: "btn",
                event: {
                    nextStage: 10,
                    addedTime: 5,
                    addedEnergy: 10,
                    score: 15
                }
            },
            {
                optionId: 2,
                title: "به آرامی بیدار شدن &larr;",
                color: "btn",
                event: {
                    nextStage: 10,
                    addedTime: 10,
                    addedEnergy: 5,
                    score: 5
                }
            }
        ]
    },
    {
        stageId: 10,
        level: 2,
        section: 1,
        name: "مرتب کردن اتاق",
        desc: "دوست داری کجا رو مرتب کنی؟",
        background: "room.jpg",
        options: [{
                optionId: 1,
                title: "مرتب کردن تخت",
                color: "btn",
                event: {
                    nextStage: 10,
                    addedTime: 5,
                    addedEnergy: -15,
                    score: 15
                }
            },
            {
                optionId: 2,
                title: "مرتب کردن میز",
                color: "btn",
                event: {
                    nextStage: 10,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 15
                }
            },
            {
                optionId: 3,
                title: "مرتب کردن زمین",
                color: "btn",
                event: {
                    nextStage: 10,
                    addedTime: 5,
                    addedEnergy: -15,
                    score: 15
                }
            },
            {
                optionId: 4,
                title: "رفتن برای صبحانه &larr;",
                color: "btn",
                event: {
                    nextStage: 15,
                    addedTime: 0,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 15,
        level: 2,
        section: 2,
        name: "جمع کردن وسایل مدرسه",
        desc: "چه کارهایی رو می خواهی انجام بدهی؟",
        background: "roomtable.jpg",
        options: [{
                optionId: 1,
                title: "کنترل وسایل داخل کیف و تکالیف",
                color: "btn",
                event: {
                    nextStage: 15,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "برداشتن کیف و رفتن &larr;",
                color: "btn",
                event: {
                    nextStage: 20,
                    addedTime: 0,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 20,
        level: 3,
        section: 1,
        name: "خوردن صبحانه",
        desc: "چه چیز هایی دوست داری بخوری؟",
        background: "breakfast.jpg",
        options: [{
                optionId: 1,
                title: "نوشیدن شیر",
                color: "btn",
                event: {
                    nextStage: 20,
                    addedTime: 5,
                    addedEnergy: 15,
                    score: 5
                }
            },
            {
                optionId: 2,
                title: "نوشیدن چای",
                color: "btn",
                event: {
                    nextStage: 20,
                    addedTime: 5,
                    addedEnergy: 10,
                    score: 5
                }
            },
            {
                optionId: 3,
                title: "خوردن لقمه",
                color: "btn",
                event: {
                    nextStage: 20,
                    addedTime: 5,
                    addedEnergy: 20,
                    score: 5
                }
            },
            {
                optionId: 4,
                title: "ترک میز صبحانه &larr;",
                color: "btn",
                event: {
                    nextStage: 25,
                    addedTime: 0,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 25,
        level: 3,
        section: 2,
        name: "صحبت با والدین",
        desc: "پدر: مشقات رو نوشتی؟",
        background: "breakfast.jpg",
        options: [{
                optionId: 1,
                title: "آره نوشتم &larr;",
                color: "btn",
                event: {
                    nextStage: 26,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 5
                }
            },
            {
                optionId: 2,
                title: "نه ننوشتم &larr;",
                color: "btn",
                event: {
                    nextStage: 26,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 5
                }
            },
            {
                optionId: 3,
                title: "قطع صحبت و رفتن &larr;",
                color: "btn",
                event: {
                    nextStage: 30,
                    addedTime: 0,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 26,
        level: 3,
        section: 2,
        name: "صحبت با والدین",
        desc: "پدر: اتاقت رو تمیز کردی؟",
        background: "breakfast.jpg",
        options: [{
                optionId: 1,
                title: "آره کمی مرتب کردم &larr;",
                color: "btn",
                event: {
                    nextStage: 27,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 5
                }
            },
            {
                optionId: 2,
                title: "نه نیازی به مرتب کردن نیست &larr;",
                color: "btn",
                event: {
                    nextStage: 27,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 5
                }
            },
            {
                optionId: 3,
                title: "قطع صحبت و رفتن &larr;",
                color: "btn",
                event: {
                    nextStage: 30,
                    addedTime: 0,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 27,
        level: 3,
        section: 2,
        name: "صحبت با والدین",
        desc: "مادر:امروز با دوستات میری بیرون بعد مردسه؟ &larr;",
        background: "breakfast.jpg",
        options: [{
                optionId: 1,
                title: "آره باهاشون میرم بیرون &larr;",
                color: "btn",
                event: {
                    nextStage: 30,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "نه فکر نکنم &larr;",
                color: "btn",
                event: {
                    nextStage: 30,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 20
                }
            }
        ]
    },
    {
        stageId: 30,
        level: 4,
        section: 1,
        name: "در مدرسه",
        desc: "زنگ تفریح دوست داری چه کار کنی؟ &larr;",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "بازی با بچه ها",
                color: "btn",
                event: {
                    nextStage: 31,
                    addedTime: 15,
                    addedEnergy: -50,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "صحبت با دوستان &larr;",
                color: "btn",
                event: {
                    nextStage: 33,
                    addedTime: 15,
                    addedEnergy: -10,
                    score: 10
                }
            },
            {
                optionId: 3,
                title: "نشستن یک گوشه &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 15,
                    addedEnergy: 0,
                    score: 5
                }
            }
        ]
    },
    {
        stageId: 31,
        level: 4,
        section: 2,
        name: "در مدرسه",
        desc: " در هنگام بازی با بچه های دیگه یکی جر می زنه &larr;",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "تو هم جر می زنی",
                color: "btn",
                event: {
                    nextStage: 32,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: -10
                }
            },
            {
                optionId: 2,
                title: "جلوی دیگران تحقیرش می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 32,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: -5
                }
            },
            {
                optionId: 3,
                title: "با مشت بهش حمله می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 32,
                    addedTime: 5,
                    addedEnergy: -30,
                    score: -25
                }
            },
            {
                optionId: 4,
                title: "گذشت کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 25
                }
            },
            {
                optionId: 5,
                title: "از بازی بکشی کنار &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: -25
                }
            }
        ]
    },
    {
        stageId: 32,
        level: 4,
        section: 3,
        name: "در مدرسه",
        desc: "بین چند تا از بچه ها زد و خورد راه افتاده! ",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "به مدیر یا ناظم خبر می دهم &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "سعی می کنم از هم جدایشان کنم &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 10
                }
            },
            {
                optionId: 3,
                title: "فقط تماشا می کنم &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 33,
        level: 4,
        section: 4,
        name: "در مدرسه",
        desc: " بحثی در مورد کسی در جمع دوستان می شود؟",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "تو هم مثل دیگران پشت سرش صحبت می کنی &larr;",
                color: "btn btn-wide",
                event: {
                    nextStage: 34,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: -30
                }
            },
            {
                optionId: 2,
                title: "بحث رو عوض کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 15
                }
            },
            {
                optionId: 3,
                title: "هیچی نگی &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 34,
        level: 4,
        section: 4,
        name: "در مدرسه",
        desc: " احمد:چقدر تو مسیر مدرسه گدا زیاد شده. چقدر حال بهم زن شده خیابون",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "موافقت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 35,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: -10
                }
            },
            {
                optionId: 2,
                title: "مخالفت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 35,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 15
                }
            },
            {
                optionId: 3,
                title: "سکوت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 35,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 35,
        level: 4,
        section: 4,
        name: "در مدرسه",
        desc: " \u0633\u067E\u0647\u0631: \u0627\u06CC\u0646 \u0628\u0648\u0641\u0647 \u0686\u0631\u0627 \u0647\u0632\u0627\u0631 \u062A\u0648\u0645\u0646 \u06A9\u0634\u06CC\u062F\u0647 \u0631\u0648 \u0633\u0627\u0646\u062F\u0648\u06CC\u0686\u0627\n        \u062F\u06CC\u06AF\u0647 \u0645\u0632\u0647 \u06AF\u0648\u0634\u062A \u06AF\u0631\u0628\u0647 \u06AF\u0631\u0641\u062A\u0647 \u062A\u0627\u0632\u0647 \u06AF\u0631\u0648\u0646 \u062A\u0631\u0634\u0645 \u06A9\u0631\u062F\u0647",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "موافقت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 36,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: -10
                }
            },
            {
                optionId: 2,
                title: "مخالفت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 36,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 15
                }
            },
            {
                optionId: 3,
                title: "سکوت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 36,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 36,
        level: 4,
        section: 4,
        name: "در مدرسه",
        desc: " \u0645\u0627\u0647\u0627\u0646: \u0628\u0686\u0647 \u0647\u0627 \u0627\u06CC\u0646 \u06A9\u06CC\u0641 \u067E\u0648\u0644 \u0631\u0648 \u0631\u0648\u06CC \u0632\u0645\u06CC\u0646 \u067E\u06CC\u062F\u0627 \u06A9\u0631\u062F\u0645 \n        \u06A9\u06CC \u0645\u06CC \u062E\u0648\u0627\u062F \u0628\u0631\u06CC\u0645 \u062E\u0648\u0631\u0627\u06A9\u06CC \u0628\u062E\u0631\u06CC\u0645",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "موافقت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 37,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: -30
                }
            },
            {
                optionId: 2,
                title: "مخالفت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 37,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 25
                }
            },
            {
                optionId: 3,
                title: "سکوت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 37,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 37,
        level: 4,
        section: 4,
        name: "در مدرسه",
        desc: ' علی:یه بچه سر کوچه دیدم پایه این پولامونو بزاربم رو هم یه تن ماهی بخریم براش؟',
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "موافقت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 30
                }
            },
            {
                optionId: 2,
                title: "مخالفت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 15
                }
            },
            {
                optionId: 3,
                title: "سکوت می کنی &larr;",
                color: "btn",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 38,
        level: 4,
        section: 5,
        name: "سر کلاس",
        desc: "معلم اعلام می کنه تکالیفتون رو تحویل بدین!",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "تکالیفت رو تحویل بدی &larr;",
                color: "btn",
                event: {
                    nextStage: 39,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 50,
                    needOptions: [{
                            stageId: 15,
                            optionId: 1,
                            message: "تکالیف رو جا گذاشتی"
                        }]
                }
            },
            {
                optionId: 2,
                title: "بگی تکلیف ننوشتم &larr;",
                color: "btn",
                event: {
                    nextStage: 39,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 20
                }
            },
            {
                optionId: 3,
                title: "به خاطر رفتن به دستشویی کلاس رو بپیچونی! &larr;",
                color: "btn btn-wide",
                event: {
                    nextStage: 39,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 10
                }
            }
        ]
    },
    {
        stageId: 39,
        level: 4,
        section: 5,
        name: "در مدرسه",
        desc: "بعد از مدرسه دوست داری چه کار کنی؟",
        background: "way.jpg",
        setGameTime: 1400,
        options: [{
                optionId: 1,
                title: "با بچه ها می ریم پارک &larr;",
                color: "btn",
                event: {
                    nextStage: 40,
                    addedTime: 180,
                    addedEnergy: -40,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "میرم کتابخونه &larr;",
                color: "btn",
                event: {
                    nextStage: 40,
                    addedTime: 120,
                    addedEnergy: -50,
                    score: 100
                }
            },
            {
                optionId: 3,
                title: "میروم خونه &larr;",
                color: "btn",
                event: {
                    nextStage: 40,
                    addedTime: 20,
                    addedEnergy: 0,
                    score: 20
                }
            }
        ]
    },
    {
        stageId: 40,
        level: 5,
        section: 1,
        name: "در خانه",
        desc: "پدر: روزت چطور بود؟",
        background: "room.jpg",
        options: [{
                optionId: 1,
                title: "گفتن حقیقت &larr;",
                color: "btn",
                event: {
                    nextStage: 41,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "دروغ گفتن &larr;",
                color: "btn",
                event: {
                    nextStage: 41,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: -20
                }
            },
            {
                optionId: 3,
                title: "سکوت کردن &larr;",
                color: "btn",
                event: {
                    nextStage: 41,
                    addedTime: 0,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 41,
        level: 5,
        section: 2,
        name: "در خانه",
        desc: "مادر:دوستات رو دیدی؟",
        background: "room.jpg",
        options: [{
                optionId: 1,
                title: "گفتن حقیقت &larr;",
                color: "btn",
                event: {
                    nextStage: 45,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "دروغ گفتن &larr;",
                color: "btn",
                event: {
                    nextStage: 45,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: -20
                }
            },
            {
                optionId: 3,
                title: "سکوت کردن &larr;",
                color: "btn",
                event: {
                    nextStage: 45,
                    addedTime: 0,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 45,
        level: 5,
        section: 5,
        name: "در خانه",
        desc: "دیگه آفتاب غروب کرده، دوست داری الان چه کار کنی؟",
        background: "room.jpg",
        setGameTime: 2100,
        options: [{
                optionId: 1,
                title: "چت با دوستان &larr;",
                color: "btn",
                event: {
                    nextStage: -1,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "پست در صفحه های اجتماعی &larr;",
                color: "btn",
                event: {
                    nextStage: -1,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 3,
                title: "انجام تکالیف &larr;",
                color: "btn",
                event: {
                    nextStage: -1,
                    addedTime: 30,
                    addedEnergy: -30,
                    score: 100
                }
            },
            {
                optionId: 4,
                title: "خوابیدن &larr;",
                color: "btn",
                event: {
                    nextStage: -1,
                    addedTime: 0,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    }
];
