export interface userSkillModel {
    knowledgeLevel: number,
    createdAt: string,
    user: number,
    skill: number,
}

export interface userSkillModelUPDATE {
    knowledgeLevel: number,
    updatedAt: string,
    skill: number,
    createdAt: string,
    user: number
}