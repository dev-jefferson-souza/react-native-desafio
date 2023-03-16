import { AxiosResponse } from "axios";
import { skillModel } from "../../models/skillsModel";
import { api } from "../api";

const uri: string = "/skill/";

function skillGETALL(): Promise<AxiosResponse> {
  return api.get(uri);
}

function skillGET(id: number): Promise<AxiosResponse> {
  return api.get(uri + id);
}

function skillPOST(user: skillModel): Promise<AxiosResponse> {
  console.log(user);
  return api.post(uri, user);
}

function skillUPDATE(
  id: number,
  skillUpdated: skillModel
): Promise<AxiosResponse> {
  return api.put(uri + id, skillUpdated);
}

function skillDELETE(id: number): Promise<AxiosResponse> {
  return api.delete(uri + id);
}

const skillService = {
  skillGETALL,
  skillGET,
  skillPOST,
  skillUPDATE,
  skillDELETE,
};
export default skillService;
