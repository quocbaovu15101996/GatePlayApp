import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { textSSLarge } from "src/styles/text.style";
import { ICON_LOGIN } from "src/utils/enum";
import { scale } from "src/utils/Scale";
import { TopBarHeader } from "../TopBarHeader";

type Props = {
  title: string;
  desc: string;
};

const LoginHeader: FC<Props> = ({ title, desc }) => {
  return (
    <>
      <TopBarHeader title={title} />
      <View style={styles.viewLogo}>
        <FastImage source={ICON_LOGIN.logo} style={styles.iconLogo2} />
        <Text style={styles.textDes}>{desc}</Text>
      </View>
    </>
  );
};

export { LoginHeader };

const styles = StyleSheet.create({
  viewLogo: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
  },
  textDes: {
    ...textSSLarge,
    color: "white",
    fontWeight: "500",
    textAlign: "center",
  },
  iconLogo2: {
    height: scale(90),
    width: scale(90),
  },
});
