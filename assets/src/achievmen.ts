import { IAchievment } from './levelInterface';

let achievments: IAchievment[] = [{
    achievmentId: 1,
    chooses: [{ stageId: 2, optionId: 1 }],
    name: "خوابالو",
    pic: "assets/image/svg/bed.svg",
    desc: "زیاد خوابیدن"
}, {
    achievmentId: 2,
    chooses: [{ stageId: 10, optionId: 1 }, { stageId: 10, optionId: 2 }, { stageId: 10, optionId: 3 }],
    name: "مامور مرتب سازی",
    pic: "assets/image/svg/brush.svg",
    desc: "مرتب کردن همه چیز",
    rebuild: true
}, {
    achievmentId: 3,
    chooses: [],
    name: "دروغگو!",
    pic: "assets/image/svg/sad.svg",
    desc: "اولین دروغ"
}, {
    achievmentId: 4,
    chooses: [],
    name: "فراری",
    pic: "assets/image/svg/runner.svg",
    desc: "فرار کردن از کلاس"
}, {
    achievmentId: 5,
    chooses: [],
    name: "تمام شدن",
    pic: "assets/image/svg/exhausted.svg",
    desc: "بی انرژی"
}, {
    achievmentId: 6,
    chooses: [],
    name: "همه کاره مدرسه",
    pic: "assets/image/svg/student-books.svg",
    desc: "مدرسه ما: همه بخش های مدرسه رو تجربه کنی"
}, {
    achievmentId: 7,
    chooses: [],
    name: "بچه مثبت",
    pic: "assets/image/svg/devil.svg",
    desc: "شر مطلق",
    rebuild: true
}, {
    achievmentId: 8,
    chooses: [],
    name: "خلاف",
    pic: "assets/image/svg/angel.svg",
    desc: "خیر مطلق",
    rebuild: true
}, {
    achievmentId: 9,
    chooses: [],
    name: "تمام شد!",
    pic: "assets/image/svg/cup.svg",
    desc: "تمام کردن بازی"
}, {
    achievmentId: 10,
    chooses: [{ stageId: 45, optionId: 1 }, { stageId: 45, optionId: 2 }, { stageId: 45, optionId: 3 }, { stageId: 45, optionId: 4 }],
    name: "به همه جا رسیدی!",
    pic: "assets/image/svg/cup-with-leaves-branches.svg",
    desc: "همه پایان ها"
}]

/*
زیاد خوابیدن
مرتب کردن همه چیز
فرار کردن از کلاس
تمام کردن بازی
اولین دروغ
بی انرژی
همه پایان ها
شر مطلق
خیر مطلق
مدرسه ما: همه بخش های مدرسه رو تجربه کنی
*/