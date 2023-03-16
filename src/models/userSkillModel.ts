import { skillModel } from "./skillsModel";
import { userModel } from "./userModel";

interface user {
  id: number;
}

interface skill {
  id: number;
}
export interface userSkillModel {
  id: number;
  user: userModel;
  skill: skillModel;
  knowledgeLevel: number;
  createdAt: string;
  updatedAt: string;
}

export interface userSkillPostModel {
  user: user;
  skill: skill;
}

export interface userSkillUpdateModel {
  knowledgeLevel: number;
}
