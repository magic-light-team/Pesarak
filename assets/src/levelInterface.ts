export interface IStage {
    stageId: number,
    level: number,
    section: number,
    name: string,
    desc: string,
    background: string,
    options: IOption[],

    setGameTime?: number,
}

export interface IOption {
    optionId: number,
    title: string,
    color: string,
    event: IEvent
}

export interface IEvent {
    nextStage: number,
    addedTime: number,
    addedEnergy: number,
    score: number,

    needOptions?: INeedOption[],
}

export interface INeedOption {
    stageId: number,
    optionId: number,
    message?: string
}

export interface IAchievment {
    achievmentId: number,
    chooses: IChoose[],
    name: string,
    pic?: string,
    desc?: string
}

export interface IChoose {
    stageId: number,
    optionId: number
}