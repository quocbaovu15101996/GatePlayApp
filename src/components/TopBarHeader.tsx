import React, { FC } from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import FastImage from "react-native-fast-image";
import { textLarge } from "src/styles/text.style";
import { ICON_LOGIN } from "src/utils/enum";
import { scale } from "src/utils/Scale";

type Props = {
  title: string;
  style?: ViewStyle;
};

const TopBarHeader: FC<Props> = ({ title, style }) => {
  return (
    <View style={[styles.container, style]}>
      <FastImage source={ICON_LOGIN.logo} style={styles.iconLogo} />
      <Text style={styles.textTitle}>{title}</Text>
    </View>
  );
};

export { TopBarHeader };

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  iconLogo: {
    height: scale(30),
    width: scale(30),
  },
  textTitle: {
    ...textLarge,
    color: "white",
  },
});
