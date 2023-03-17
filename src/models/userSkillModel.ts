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

export interface userSkillFromUser {
  id: number;
  name: string;
  version: string;
  description: string;
  updatedAt: string;
  imageUrl: string;
  skillId: number;
  knowledgeLevel: number;
}

export interface userSkillPostModel {
  user: user;
  skill: skill;
}

export interface userSkillUpdateModel {
  knowledgeLevel: number;
}
