import { IAchievment } from './levelInterface';

let achievments: IAchievment[] = [{
    achievmentId: 1,
    chooses: [{ stageId: 2, optionId: 1 }],
    name: "خوابالو",
    pic: "assets/image/svg/bed.svg",
    desc: "زیاد خوابیدن"
}, {
    achievmentId: 2,
    chooses: [{ stageId: 10, optionId: 1 },{ stageId: 10, optionId: 2 },{ stageId: 10, optionId: 3 }],
    name: "مامور مرتب سازی",
    pic: "assets/image/svg/bed.svg",
    desc: "مرتب کردن همه چیز"
}, {
    achievmentId: 3,
    chooses: [],
    name: "",
    pic: "",
    desc: "اولین دروغ"
}, {
    achievmentId: 4,
    chooses: [],
    name: "",
    pic: "",
    desc: "فرار کردن از کلاس"
}, {
    achievmentId: 5,
    chooses: [],
    name: "",
    pic: "",
    desc: "بی انرژی"
}, {
    achievmentId: 6,
    chooses: [],
    name: "",
    pic: "",
    desc: "مدرسه ما: همه بخش های مدرسه رو تجربه کنی"
}, {
    achievmentId: 7,
    chooses: [],
    name: "",
    pic: "",
    desc: "شر مطلق"
}, {
    achievmentId: 8,
    chooses: [],
    name: "",
    pic: "",
    desc: "خیر مطلق"
}, {
    achievmentId: 9,
    chooses: [],
    name: "",
    pic: "",
    desc: "تمام کردن بازی"
}, {
    achievmentId: 10,
    chooses: [{ stageId: 45, optionId: 1 },{ stageId: 45, optionId: 2 },{ stageId: 45, optionId: 3 },{ stageId: 45, optionId: 4 }],
    name: "به همه جا رسیدی!",
    pic: "",
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