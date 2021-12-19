import { HOME_ROUTER, LOGIN_ROUTER } from "../utils/consts";
import Login from "./Login";
import Home from "./Home";

export const publicRoutes = [
  {
    path: LOGIN_ROUTER,
    Component: Login
  }
];

export const privateRoutes = [
  {
    path: HOME_ROUTER,
    Component: Home
  }
];