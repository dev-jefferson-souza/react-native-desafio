import { userModelLogin } from "../../models/userModel";
import { api } from "../api";

const uri = "/user/";

function userGET(id: number) {
  return api.get(uri + id);
}

function userPOST(user: userModelLogin) {
  return api.post(uri, user);
}

function userLOGIN(user: userModelLogin) {
  return api.post(uri + "login", user);
}

const userService = {
  userGET,
  userPOST,
  userLOGIN,
};
export default userService;
