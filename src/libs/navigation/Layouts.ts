import { Layout, LayoutRoot, Options } from "react-native-navigation";
import { isArray, isString } from "lodash";
import { APP_STACK_ID, TAB_ROOT_ID } from "src/utils/enum";
import { Screens } from "src/screens/Screens";

type CompIdOrLayout = string | Layout;

const stack = (
  rawChildren: CompIdOrLayout | CompIdOrLayout[],
  id?: string,
  options?: Options
): Layout => {
  const childrenArray = isArray(rawChildren) ? rawChildren : [rawChildren];
  const children = childrenArray.map((child) => component(child));
  return { stack: { children, id, options } };
};

const component = <P = Record<string, number | string>>(
  compIdOrLayout: CompIdOrLayout,
  options?: Options,
  passProps?: P
): Layout<P> => {
  return isString(compIdOrLayout)
    ? { component: { name: compIdOrLayout, options, passProps } }
    : (compIdOrLayout as Layout<P>);
};

const layoutAuthenticate: LayoutRoot = {
  root: {
    stack: {
      id: APP_STACK_ID.login,
      children: [
        {
          component: {
            name: Screens.Login,
            options: {
              statusBar: {
                style: "dark",
                visible: false,
              },
              animations: {
                push: {
                  waitForRender: true,
                },
                pop: {
                  waitForRender: true,
                },
                setStackRoot: {
                  waitForRender: true,
                },
              },
              topBar: {
                visible: false,
                height: 0,
              },
            },
          },
        },
      ],
    },
  },
};

const stackGameList = [
  component(Screens.GameList, {
    statusBar: {
      style: "dark",
      visible: false,
    },
    topBar: {
      visible: false,
      height: 0,
    },
  }),
];

const stackAccount = [
  component(Screens.Profile, {
    statusBar: {
      style: "dark",
      visible: false,
    },
    topBar: {
      visible: false,
      height: 0,
    },
  }),
];

const stackErace = [
  component(Screens.Erace, {
    statusBar: {
      style: "dark",
      visible: false,
    },
    topBar: {
      visible: false,
      height: 0,
    },
  }),
];

const layoutRoot: LayoutRoot = {
  root: {
    bottomTabs: {
      options: {
        bottomTabs: {
          currentTabIndex: 1,
        },
      },
      id: TAB_ROOT_ID,
      children: [
        stack(stackGameList, APP_STACK_ID.gameList, {
          sideMenu: {
            right: {
              enabled: true,
            },
          },
          bottomTab: {
            testID: "GAMELIST_SCREEN_TAB",
            text: "Game List",
            textColor: "#373D57",
            selectedTextColor: "#F96655",
            icon: require("assets/bottomTabs/gameList.png"),
            selectedIcon: require("assets/bottomTabs/selected_gameList.png"),
          },
          bottomTabs: {
            backgroundColor: "#151928",
          },
          popGesture: true,
        }),
        stack(stackAccount, APP_STACK_ID.profile, {
          sideMenu: {
            left: {
              enabled: false,
            },
          },
          bottomTab: {
            testID: "PROFILE_SCREEN_TAB",
            text: "Account/Wallet",
            textColor: "#373D57",
            selectedTextColor: "#F96655",
            icon: require("assets/bottomTabs/account.png"),
            selectedIcon: require("assets/bottomTabs/selected_account.png"),
          },
          bottomTabs: {
            backgroundColor: "#151928",
          },
          popGesture: true,
        }),
        stack(stackErace, APP_STACK_ID.erace, {
          sideMenu: {
            left: {
              enabled: false,
            },
          },
          bottomTab: {
            testID: "ERACE_SCREEN_TAB",
            text: "Erace",
            textColor: "#373D57",
            selectedTextColor: "#F96655",
            icon: require("assets/bottomTabs/erace.png"),
            selectedIcon: require("assets/bottomTabs/selected_erace.png"),
          },
          bottomTabs: {
            backgroundColor: "#151928",
          },
          popGesture: true,
        }),
      ],
    },
  },
};

export { component, stack, layoutAuthenticate, layoutRoot };
