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
                title: " رفتن برای صبحانه",
                color: "btn-outline-info",
                event: {
                    nextStage: 20,
                    addedTime: 0,
                    addedEnergy: 0,
                    score: 0
                }
            }
        ]
    }
];