level1 = [
    {
        stageId: 1,
        level: 1,
        section: 1,
        name: "بیدار شدن",
        desc: "ساعت زنگ می زند. می خواهی چکار کنی؟",
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
        options: [{
                optionId: 1,
                title: "قطع زنگ و دوباره خوابیدن",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 2,
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
        options: [{
                optionId: 1,
                title: "مرتب کردن تخت",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 10,
                    addedTime: 5,
                    addedEnergy: 5,
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
                    addedEnergy: 5,
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
                    addedEnergy: 5,
                    score: 15
                }
            },
            {
                optionId: 4,
                title: "بی خیال شدن",
                color: "btn-outline-info",
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
        options: [{
                optionId: 1,
                title: "کنترل وسایل داخل کیف",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 15,
                    addedTime: 5,
                    addedEnergy: 5,
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
                optionId: 1,
                title: "نوشیدن چای",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 20,
                    addedTime: 5,
                    addedEnergy: 10,
                    score: 5
                }
            },
            {
                optionId: 1,
                title: "خوردن لقمه",
                color: "btn-outline-secondary",
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
                color: "btn-outline-secondary",
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
                color: "btn-outline-secondary",
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
        options: [{
                optionId: 1,
                title: "آره کمی مرتب کردم",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 27,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 5
                }
            },
            {
                optionId: 2,
                title: "نه نیازی به مرتب کردن نیست",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 27,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 5
                }
            },
            {
                optionId: 3,
                title: "قطع صحبت و رفتن",
                color: "btn-outline-secondary",
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
        options: [{
                optionId: 1,
                title: "آره باهاشون میرم بیرون",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 30,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "نه فکر نکنم",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 30,
                    addedTime: 5,
                    addedEnergy: 0,
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
                color: "btn-outline-secondary",
                event: {
                    nextStage: 31,
                    addedTime: 15,
                    addedEnergy: 10,
                    score: 10
                }
            },
            {
                optionId: 3,
                title: "نشستن یک گوشه",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 31,
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
        section: 1,
        name: "در مدرسه",
        desc: "بین چند تا از بچه ها زد و خورد راه افتاده!",
        options: [{
                optionId: 1,
                title: "به مدیر یا ناظم خبر می دهم",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 32,
                    addedTime: 5,
                    addedEnergy: -10,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "سعی می کنم از هم جدایشان کنم",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 32,
                    addedTime: 5,
                    addedEnergy: 10,
                    score: 10
                }
            },
            {
                optionId: 3,
                title: "فقط تماشا می کنم",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 32,
                    addedTime: 5,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    },
    {
        stageId: 32,
        level: 4,
        section: 1,
        name: "در مدرسه",
        desc: "بعد از مدرسه دوست داری چه کار کنی؟",
        options: [{
                optionId: 1,
                title: "با بچه ها می ریم پارک",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 33,
                    addedTime: 180,
                    addedEnergy: -100,
                    score: 20
                }
            },
            {
                optionId: 2,
                title: "میرم کتابخونه",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 33,
                    addedTime: 120,
                    addedEnergy: -120,
                    score: 100
                }
            },
            {
                optionId: 3,
                title: "میروم خونه",
                color: "btn-outline-secondary",
                event: {
                    nextStage: 33,
                    addedTime: 20,
                    addedEnergy: 0,
                    score: 20
                }
            }
        ]
    }
];