import { AxiosResponse } from "axios";
import { userModel } from "../../models/userModel";
import { api } from "../api";

const uri : string = '/users/'

function userGET(id: number) : Promise<AxiosResponse> {
    return api.get(uri + id);
}

function userPOST(user : userModel) : Promise<AxiosResponse> {
    console.log(user)
    return api.post(uri, user);
}

function userUPDATE(id: number, userUpdated: userModel) : Promise<AxiosResponse> {
    return api.put(uri + id, userUpdated);
}

function userDELETE(id: number) : Promise<AxiosResponse> {
    return api.delete(uri + id);
}

const userService = {
    userGET,
    userPOST,
    userUPDATE,
    userDELETE,
}
export default userService