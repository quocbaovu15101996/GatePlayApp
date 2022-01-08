import React, { FC, useRef } from "react";
import {
  Animated,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from "react-native";

type Props = TextInputProps & {
  onChangeText: (text: string) => void;
  style?: ViewStyle;
  leftIcon?: any;
  rightIcon?: any;
  wrongType?: boolean;
};

const BORDER_COLOR_DEFAULT = "rgba(75,80,114, 1)";
const BORDER_COLOR_ACTIVE = "rgba(211,204,208, 1)";
// const BORDER_COLOR_WRONG = "rgba(249,93,88, 1)";

const TextField: FC<Props> = (props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const value = useRef<string>("");

  const onChangeText = (text: string) => {
    value.current = text;
    props.onChangeText?.(text);
  };

  const onFocus = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const onBlur = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const color = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [BORDER_COLOR_DEFAULT, BORDER_COLOR_ACTIVE],
  });

  return (
    <Animated.View
      style={[props.style, styles.container, { borderColor: color }]}
    >
      {props.leftIcon}
      <TextInput
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholderTextColor={"#D6E1FF"}
        onChangeText={onChangeText}
        style={styles.textStyle}
      />
      {props.rightIcon}
    </Animated.View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  textStyle: {
    flex: 1,
    color: "white",
  },
  container: {
    height: 47,
    width: "100%",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 32,
    flexDirection: "row",
  },
});
