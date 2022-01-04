import { Navigation } from "react-native-navigation";
import addLayoutProcessors from "./libs/navigation/LayoutProcessors";
import { startLogin } from "./libs/navigation/Utils";
import { configureClient } from "./queries/client";
import { registerScreens } from "./screens";

const start = () => {
  const { client: queryClient } = configureClient();
  registerScreens(queryClient);
  addLayoutProcessors();
  Navigation.events().registerAppLaunchedListener(() => {
    startLogin();
  });
};

export { start };
