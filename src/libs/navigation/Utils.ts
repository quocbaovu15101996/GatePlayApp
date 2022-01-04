import { LayoutRoot, Navigation } from "react-native-navigation";
import { Storage } from "src/modules/Storage";
import { APP_STACK_ID } from "src/utils/enum";
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
                style: "dark",
                visible: false,
                drawBehind: true,
              },
            },
          },
        },
      ],
    },
  },
};

export function startLogin(): void {
  Storage.currentScreenStackId = APP_STACK_ID.login;
  Navigation.setRoot(layoutAuthenticate);
}

const layoutRoot: LayoutRoot = {
  root: {
    bottomTabs: {
      id: "BOTTOM_TABS_LAYOUT",
      children: [
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
                textColor: "#373D57",
                selectedTextColor: "#F96655",
                icon: require("../../../assets/bottomTabs/listgame.png"),
                selectedIcon: require("../../../assets/bottomTabs/selected_listgame.png"),
              },
              bottomTabs: {
                backgroundColor: "#151928",
              },
            },
          },
        },
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
                textColor: "#373D57",
                selectedTextColor: "#F96655",
                icon: require("../../../assets/bottomTabs/account.png"),
                selectedIcon: require("../../../assets/bottomTabs/selected_account.png"),
                iconWidth: 10,
                iconHeight: 10,
              },
              bottomTabs: {
                backgroundColor: "#151928",
              },
            },
          },
        },
        {
          stack: {
            id: "ERACE_TAB",
            children: [
              {
                component: {
                  id: "ERACE_SCREEN",
                  name: Screens.Erace,
                },
              },
            ],
            options: {
              bottomTab: {
                testID: "ERAC_SCREEN_TAB",
                text: "Erace",
                textColor: "#373D57",
                selectedTextColor: "#F96655",
                icon: require("../../../assets/bottomTabs/erace.png"),
                selectedIcon: require("../../../assets/bottomTabs/selected_erace.png"),
              },
              bottomTabs: {
                backgroundColor: "#151928",
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
