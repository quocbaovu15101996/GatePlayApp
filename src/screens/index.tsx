import { Navigation } from "react-native-navigation";
import ListGame from "./ListGame";
import Login from "./Login";
import Profile from "./Profile";
import { Screens } from "./Screens";
import SignIn from "./SignIn";

function registerScreens(): void {
  Navigation.registerComponent(Screens.Login, () => Login);
  Navigation.registerComponent(Screens.SignIn, () => SignIn);
  Navigation.registerComponent(Screens.ListGame, () => ListGame);
  Navigation.registerComponent(Screens.Profile, () => Profile);
}

export { registerScreens };
