export interface INeedOption {
    stageId: number,
    optionId: number,
    message?: string
}

export interface IEvent {
    nextStage: number,
    addedTime: number,
    addedEnergy: number,
    score: number,
    needOptions?: INeedOption[]
}

// let event: IEvent = {
//     nextStage: 12,
//     addedEnergy: 14,
//     addedTime: 15,
//     score: 18
// }

export interface IOption {
    optionId: number,
    title: string,
    color: string,
    event: IEvent
}

// let option: IOption = {
//     optionId: 2,
//     title: "بگی تکلیف ننوشتم",
//     color: "btn-outline-warning",
//     event: {
//         nextStage: 32,
//         addedTime: 5,
//         addedEnergy: -5,
//         score: 20,
//         needOption: [{ stageId: 2, optionId: 10 }]
//     }
// }

export interface IStage {
    stageId: number,
    level: number,
    section: number,
    name: string,
    desc: string,
    background: string,
    options: IOption[]
}

// var level: ISage[] = []