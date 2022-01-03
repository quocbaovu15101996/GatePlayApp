import { LayoutRoot, Navigation } from "react-native-navigation";
import { Screens } from "../../screens/Screens";

const layoutAuthenticate: LayoutRoot = {
  root: {
    stack: {
      id: "StackLogin",
      children: [
        {
          component: {
            name: Screens.Login,
            options: {
              topBar: {
                visible: false,
                height: 0,
              },
              statusBar: {
                visible: false,
                drawBehind: false,
              },
            },
          },
        },
      ],
    },
  },
};

export function startLogin(): void {
  Navigation.setRoot(layoutAuthenticate);
}

const layoutRoot: LayoutRoot = {
  root: {
    bottomTabs: {
      id: "BOTTOM_TABS_LAYOUT",
      children: [
        {
          stack: {
            id: "PROFILE_TAB",
            children: [
              {
                component: {
                  id: "PROFILE_SCREEN",
                  name: Screens.Profile,
                },
              },
            ],
            options: {
              bottomTab: {
                testID: "PROFILE_SCREEN_TAB",
                text: "Account/Wallet",
                selectedTextColor: "#009FE0",
                icon: require("../../../assets/bottomTabs/home.png"),
                selectedIcon: require("../../../assets/bottomTabs/selected_home.png"),
              },
            },
          },
        },
        {
          stack: {
            id: "LISTGAME_TAB",
            children: [
              {
                component: {
                  id: "LISTGAME_SCREEN",
                  name: Screens.ListGame,
                },
              },
            ],
            options: {
              bottomTab: {
                testID: "LISTGAME_SCREEN_TAB",
                text: "Game List",
                selectedTextColor: "#009FE0",
                icon: require("../../../assets/bottomTabs/me.png"),
                selectedIcon: require("../../../assets/bottomTabs/selected_me.png"),
              },
            },
          },
        },
      ],
    },
  },
};

export function startApp(): void {
  Navigation.setRoot(layoutRoot);
}
