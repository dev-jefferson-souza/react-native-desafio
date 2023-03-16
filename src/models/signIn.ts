import { userModelLogin } from "./userModel";

export interface signInProps {
  savePassword: boolean;
  user: userModelLogin;
}
