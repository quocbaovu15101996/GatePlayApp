import React, { FunctionComponent, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { GradientButton } from "src/components/login/GradientButton";
import { pushSingleScreen } from "src/libs/navigation/Utils";
import { Storage } from "src/modules/Storage";
import { textBoldLarge, textMedium } from "src/styles/text.style";
import { ICON_LOGIN } from "src/utils/enum";
import { scale } from "src/utils/Scale";
import { Screens } from "../Screens";

const UI = {
  login: 0,
  signIn: 1,
  signUp: 2,
  verifyOTP: 3,
  resetPassword: 4,
};

const Login: FunctionComponent = () => {
  const [showUI, setShowUI] = useState<number>(UI.login);

  const directSignIn = () => {
    pushSingleScreen(Storage.currentScreenStackId, Screens.SignIn);
  };

  return (
    <LinearGradient
      colors={["#481E34", "#16192B"]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <View style={styles.viewLogo}>
          <FastImage source={ICON_LOGIN.logo} style={styles.iconLogo} />
          <View style={styles.viewAppName}>
            <Text style={styles.textAppName}>GATEPLAY</Text>
            <Text style={styles.textPlatForm}>P L A T F O R M</Text>
          </View>
        </View>
        <GradientButton
          title={"LOGIN"}
          onPress={directSignIn}
          style={{ marginTop: 40 }}
        />
        <Text style={styles.textSub}>
          Don't have an account?{" "}
          <Text style={styles.textSignUp}>Sign up now!</Text>
        </Text>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 64,
  },
  iconLogo: {
    height: scale(90),
    width: scale(90),
  },
  textPlatForm: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "#433A45",
    paddingLeft: 6,
  },
  viewLogo: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  viewAppName: {
    justifyContent: "center",
  },
  textAppName: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  textSub: {
    ...textMedium,
    marginTop: 24,
  },
  textSignUp: {
    ...textBoldLarge,
    color: "#FD2D67",
  },
});

export default Login;
