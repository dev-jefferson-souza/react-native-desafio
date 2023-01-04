import { AxiosResponse } from "axios";
import { userSkillModel } from "../../models/userSkillModel";
import { api } from "../api";

const uri : string = '/userSkills/'

function userSkillGETALL() : Promise<AxiosResponse> {
    return api.get(uri);
}

function userSkillGET(id: number) : Promise<AxiosResponse> {
    return api.get(uri + id);
}

function userSkillPOST(user : userSkillModel) : Promise<AxiosResponse> {
    console.log(user)
    return api.post(uri, user);
}

function userSkillUPDATE(id: number, userSkillUpdated: userSkillModel) : Promise<AxiosResponse> {
    return api.put(uri + id, userSkillUpdated);
}

function userSkillDELETE(id: number) : Promise<AxiosResponse> {
    return api.delete(uri + id);
}

const userSkillservice = {
    userSkillGETALL,
    userSkillGET,
    userSkillPOST,
    userSkillUPDATE,
    userSkillDELETE,
}
export default userSkillservice