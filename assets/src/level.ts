import { IStage } from './levelInterface';

let levelInfo:IStage[] = [{
        stageId: 1,
        level: 1,
        section: 1,
        name: "بیدار شدن",
        desc: "ساعت زنگ می زند. می خواهی چکار کنی؟",
        background: "bed.jpg",
        options: [{
                optionId: 1,
                title: "قطع زنگ و خوابیدن",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 2,
                    addedTime: 15,
                    addedEnergy: 20,
                    score: 10
                }
            },
            {
                optionId: 2,
                title: " بیدار شدن و شستن و شو",
                color: "btn-outline-warning",
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
                title: "قطع زنگ و دوباره خوابیدن",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 3,
                    addedTime: 15,
                    addedEnergy: 5,
                    score: 5
                }
            },
            {
                optionId: 2,
                title: "بیدار شدن",
                color: "btn-outline-warning",
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
                title: "سریع بیدار شدن",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 10,
                    addedTime: 5,
                    addedEnergy: 10,
                    score: 15
                }
            },
            {
                optionId: 2,
                title: "به آرامی بیدار شدن",
                color: "btn-outline-warning",
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
                color: "btn-outline-secondary",
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
                color: "btn-outline-warning",
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
                color: "btn-outline-info",
                event: {
                    nextStage: 10,
                    addedTime: 5,
                    addedEnergy: -15,
                    score: 15
                }
            },
            {
                optionId: 4,
                title: "رفتن برای صبحانه",
                color: "btn-outline-danger",
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
                title: "کنترل وسایل داخل کیف و برداشتن تکالیف",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 15,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "برداشتن کیف و رفتن",
                color: "btn-outline-info",
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
                color: "btn-outline-secondary",
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
                color: "btn-outline-danger",
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
                color: "btn-outline-warning",
                event: {
                    nextStage: 20,
                    addedTime: 5,
                    addedEnergy: 20,
                    score: 5
                }
            },
            {
                optionId: 4,
                title: "ترک میز صبحانه",
                color: "btn-outline-info",
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
                title: "آره نوشتم",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 26,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 5
                }
            },
            {
                optionId: 2,
                title: "نه ننوشتم",
                color: "btn-outline-warning",
                event: {
                    nextStage: 26,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 5
                }
            },
            {
                optionId: 3,
                title: "قطع صحبت و رفتن",
                color: "btn-outline-info",
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
                title: "آره کمی مرتب کردم",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 27,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 5
                }
            },
            {
                optionId: 2,
                title: "نه نیازی به مرتب کردن نیست",
                color: "btn-outline-primary",
                event: {
                    nextStage: 27,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 5
                }
            },
            {
                optionId: 3,
                title: "قطع صحبت و رفتن",
                color: "btn-outline-warning",
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
        desc: "مادر:امروز با دوستات میری بیرون بعد مردسه؟",
        background: "breakfast.jpg",
        options: [{
                optionId: 1,
                title: "آره باهاشون میرم بیرون",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 30,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "نه فکر نکنم",
                color: "btn-outline-warning",
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
        desc: "زنگ تفریح دوست داری چه کار کنی؟",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "بازی با بچه ها",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 31,
                    addedTime: 15,
                    addedEnergy: -50,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "صحبت با دوستان",
                color: "btn-outline-warning",
                event: {
                    nextStage: 33,
                    addedTime: 15,
                    addedEnergy: -10,
                    score: 10
                }
            },
            {
                optionId: 3,
                title: "نشستن یک گوشه",
                color: "btn-outline-danger",
                event: {
                    nextStage: 34,
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
        desc: " در هنگام بازی با بچه های دیگه یکی جر می زنه",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "تو هم جر می زنی",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 32,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: -10
                }
            },
            {
                optionId: 2,
                title: "جلوی دیگران تحقیرش می کنی",
                color: "btn-outline-info",
                event: {
                    nextStage: 32,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: -5
                }
            },
            {
                optionId: 3,
                title: "با مشت بهش حمله می کنی",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 32,
                    addedTime: 5,
                    addedEnergy: -30,
                    score: -25
                }
            },
            {
                optionId: 4,
                title: "گذشت کنی",
                color: "btn-outline-danger",
                event: {
                    nextStage: 36,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 25
                }
            },
            {
                optionId: 5,
                title: "از بازی بکشی کنار",
                color: "btn-outline-primary",
                event: {
                    nextStage: 36,
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
        desc: "بین چند تا از بچه ها زد و خورد راه افتاده!",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "به مدیر یا ناظم خبر می دهم",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 36,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "سعی می کنم از هم جدایشان کنم",
                color: "btn-outline-warning",
                event: {
                    nextStage: 36,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 10
                }
            },
            {
                optionId: 3,
                title: "فقط تماشا می کنم",
                color: "btn-outline-primary",
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
        stageId: 33,
        level: 4,
        section: 4,
        name: "در مدرسه",
        desc: " بحثی در مورد کسی در جمع دوستان می شود؟",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "تو هم مثل دیگران پشت سرش صحبت می کنی",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 36,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: -30
                }
            },
            {
                optionId: 2,
                title: "بحث رو عوض کنی",
                color: "btn-outline-danger",
                event: {
                    nextStage: 36,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 15
                }
            },
            {
                optionId: 3,
                title: "هیچی نگی",
                color: "btn-outline-warning",
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
        section: 5,
        name: "سر کلاس",
        desc: "معلم اعلام می کنه تکالیفتون رو تحویل بدین!",
        background: "school.jpg",
        options: [{
                optionId: 1,
                title: "تکالیفت رو تحویل بدی",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 38,
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
                title: "بگی تکلیف ننوشتم",
                color: "btn-outline-warning",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: -5,
                    score: 20
                }
            },
            {
                optionId: 3,
                title: "به خاطر رفتن به دستشویی کلاس رو بپیچونی!",
                color: "btn-outline-danger",
                event: {
                    nextStage: 38,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 10
                }
            }
        ]
    },
    {
        stageId: 38,
        level: 4,
        section: 5,
        name: "در مدرسه",
        desc: "بعد از مدرسه دوست داری چه کار کنی؟",
        background: "way.jpg",
        options: [{
                optionId: 1,
                title: "با بچه ها می ریم پارک",
                color: "btn-outline-info",
                event: {
                    nextStage: 40,
                    addedTime: 180,
                    addedEnergy: -40,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "میرم کتابخونه",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 40,
                    addedTime: 120,
                    addedEnergy: -50,
                    score: 100
                }
            },
            {
                optionId: 3,
                title: "میروم خونه",
                color: "btn-outline-danger",
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
                title: "گفتن حقیقت",
                color: "btn-outline-info",
                event: {
                    nextStage: 41,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "دروغ گفتن",
                color: "btn-outline-danger",
                event: {
                    nextStage: 41,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: -20
                }
            },
            {
                optionId: 3,
                title: "سکوت کردن",
                color: "btn-outline-secondary",
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
                title: "گفتن حقیقت",
                color: "btn-outline-info",
                event: {
                    nextStage: 45,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "دروغ گفتن",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 45,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: -20
                }
            },
            {
                optionId: 3,
                title: "سکوت کردن",
                color: "btn-outline-danger",
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
        options: [{
                optionId: 1,
                title: "چت با دوستان",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 45,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "پست در صفحه های اجتماعی",
                color: "btn-outline-danger",
                event: {
                    nextStage: 45,
                    addedTime: 10,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 3,
                title: "انجام تکالیف",
                color: "btn-outline-info",
                event: {
                    nextStage: 45,
                    addedTime: 30,
                    addedEnergy: -30,
                    score: 100
                }
            },
            {
                optionId: 4,
                title: "خوابیدن",
                color: "btn-outline-warning",
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