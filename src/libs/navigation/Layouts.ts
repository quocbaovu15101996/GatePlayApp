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

const stackMyMap = [
  component(Screens.MyMap, {
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
    stack: {
      id: APP_STACK_ID.myMap,
      children: stackMyMap
    }
  }
};

export { component, stack, layoutAuthenticate, layoutRoot };
