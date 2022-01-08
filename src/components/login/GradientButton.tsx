import React, { FC } from "react";
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import useDebounce from "src/hooks/useDebounce";
import { textLarge } from "src/styles/text.style";
import { ProgressBar } from "../elements/ProgressBar";

type Props = {
  onPress: () => void;
  title: string;
  titleStyle?: TextStyle;
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
};

const GradientButton: FC<Props> = ({
  onPress,
  title,
  titleStyle,
  style,
  disabled,
  loading,
}) => {
  const debounceOnPress = useDebounce(() => {
    onPress?.();
  }, 300);

  return (
    <TouchableOpacity
      onPress={debounceOnPress}
      style={[styles.btnLogin, style]}
      activeOpacity={0.9}
      disabled={disabled}
    >
      <LinearGradient
        colors={disabled ? ["#B1B1B1", "#979797"] : ["#FD5F57", "#FC2E66"]}
        end={{ x: 1, y: 0 }}
        start={{ x: 0, y: 0 }}
        style={styles.gradientBtn}
      >
        {loading ? (
          <ProgressBar color={"white"} />
        ) : (
          <Text style={[styles.textLogin, titleStyle]}>{title}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export { GradientButton };

const styles = StyleSheet.create({
  gradientBtn: {
    width: "100%",
    height: "100%",
    backgroundColor: "green",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnLogin: {
    width: "100%",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  textLogin: {
    fontWeight: "bold",
    ...textLarge,
    color: "white",
  },
});
