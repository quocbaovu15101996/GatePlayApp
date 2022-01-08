import { Navigation, OptionsTopBar } from "react-native-navigation";
import { Storage } from "src/modules/Storage";
import Colors from "src/styles/colors";
import { APP_STACK_ID } from "src/utils/enum";
import { layoutAuthenticate, layoutRoot } from "./Layouts";

export function startLogin(): void {
  Storage.currentScreenStackId = APP_STACK_ID.login;
  Navigation.setRoot(layoutAuthenticate);
}

export function startApp(): void {
  Navigation.setRoot(layoutRoot);
}

export function pushSingleScreen(
  stackId: string,
  screenId: string,
  title?: string,
  passProps?: {
    [key: string]: any;
  },
  showHeader?: boolean,
  topBarOptions?: OptionsTopBar
): void {
  const headerVisible = showHeader ?? false;
  Navigation.push(stackId, {
    component: {
      name: screenId,
      passProps: {
        screenName: screenId,
        ...passProps,
      },
      options: {
        statusBar: {
          visible: false,
        },
        layout: {
          backgroundColor: Colors.mainColor,
          componentBackgroundColor: Colors.mainColor,
        },
        topBar: {
          animate: true,
          title: {
            text: title,
            alignment: "center",
            color: "#172b4d",
          },
          leftButtons: [
            {
              id: "_GOBACK",
              // icon: require("../../../assets/app/iconBack.png"),
              text: "back",
              color: "#172b4d",
            },
          ],
          height: headerVisible ? 50 : 0,
          visible: headerVisible,
          elevation: 1,
          ...topBarOptions,
        },
        sideMenu: {
          left: {
            enabled: false,
          },
        },
        bottomTabs: {
          drawBehind: true,
          animate: true,
          visible: false,
        },
      },
    },
  })
    .then(() => {
      // dismissAppOverlay();
    })
    .catch((e: Error) => {
      console.log(e);
    });
}
