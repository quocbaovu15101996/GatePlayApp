import { Layout, Options } from "react-native-navigation";
import { isArray, isString } from "lodash";

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

export { component, stack };
