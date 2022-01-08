import CodePush from "react-native-code-push";
import { Component } from "react";
import { AppState } from "react-native";
import { Navigation } from "react-native-navigation";
import { configureClient } from "./queries/client";
import { registerScreens } from "./screens";
import { startLogin } from "./libs/navigation/Utils";
import addLayoutProcessors from "./libs/navigation/LayoutProcessors";
import { setDefaultOptions } from "./libs/navigation/Options";
import Orientation from "react-native-orientation-locker";

const { client: queryClient } = configureClient();
registerScreens(queryClient);
addLayoutProcessors();
setDefaultOptions();
Orientation.lockToPortrait();

const CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL,
  installMode: CodePush.InstallMode.ON_NEXT_RESTART,
  mandatoryInstallMode: CodePush.InstallMode.ON_NEXT_RESTART,
  updateDialog: {
    appendReleaseDescription: true,
    title: "a new update is available!",
  },
};

class App extends Component {
  appState: string;
  constructor(props: {} | Readonly<{}>) {
    super(props);
    // Set app state and listen for state changes
    this.appState = AppState.currentState;
    AppState.addEventListener("change", this.handleAppStateChange);

    this.codePushSync();
    Navigation.events().registerAppLaunchedListener(() => {
      startLogin();
    });
  }

  handleAppStateChange = (nextAppState: string) => {
    if (
      this.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      this.handleOnResume();
    }
    this.appState = AppState.currentState;
  };

  codePushSync() {
    CodePush.sync(CodePushOptions);
  }

  handleOnResume() {
    this.codePushSync();
  }
}

export default App;
