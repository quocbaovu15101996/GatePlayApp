import { ProgressBar } from "@components/elements/ProgressBar";
import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import useDebounce from "@hooks/useDebounce";
import { textBoldMedium } from "src/styles/text.style";
import Colors from "src/styles/colors";

type Props = {
  style?: StyleProp<ViewStyle>;
  textStyle?: TextStyle;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  enabledColor?: string;
  disabledColor?: string;
  title: string;
};

export const ActionButton: React.FC<Props> = React.memo(
  ({
    title,
    disabled,
    disabledColor,
    enabledColor,
    onPress,
    loading,
    style,
    textStyle,
    children,
  }) => {
    const debouncePress = useDebounce(() => onPress?.());

    return (
      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor: disabled ? disabledColor : enabledColor,
          },
          style,
        ]}
        activeOpacity={0.8}
        disabled={disabled || loading}
        onPress={debouncePress}
      >
        {loading ? (
          <ProgressBar color={"white"} />
        ) : (
          <>
            <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            {children}
          </>
        )}
      </TouchableOpacity>
    );
  }
);

ActionButton.defaultProps = {
  loading: false,
  disabled: false,
  enabledColor: Colors.primaryB300,
  disabledColor: Colors.ink300,
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    width: "100%",
    paddingVertical: 0,
    borderRadius: 23,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...textBoldMedium,
    color: "white",
  },
});
