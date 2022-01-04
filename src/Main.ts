import { Navigation } from "react-native-navigation";
import addLayoutProcessors from "./libs/navigation/LayoutProcessors";
import { startLogin } from "./libs/navigation/Utils";
import { registerScreens } from "./screens";

const start = () => {
  registerScreens();
  addLayoutProcessors();
  Navigation.events().registerAppLaunchedListener(() => {
    startLogin();
  });
};

export { start };
