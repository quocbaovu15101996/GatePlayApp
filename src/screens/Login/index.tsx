import { API_URL } from "@env";
import React, { FunctionComponent, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import useDebounce from "src/hooks/useDebounce";
import { getRequestUrl } from "src/libs/api";
import { Navigation } from "src/libs/navigation";
import { component } from "src/libs/navigation/Layouts";
import { request } from "src/libs/request";
import { Storage } from "src/modules/Storage";
import { textMedium, textSmall } from "src/styles/text.style";
import { ICON_LOGIN } from "src/utils/enum";
import { scale } from "src/utils/Scale";
import { Screens } from "../Screens";

const Login: FunctionComponent = () => {
  const testFetchApi = async () => {
    const url = getRequestUrl("public/v1/market/get-summaries");
    const { data } = await request<any>(url);
  };

  useEffect(() => {
    testFetchApi();
  }, []);

  const onPressLogin = useDebounce(() => {
    Navigation.push(
      Storage.currentScreenStackId,
      component(Screens.SignIn, {
        bottomTabs: { visible: false, drawBehind: true },
        topBar: { visible: false, height: 0 },
      })
    );
  }, 300);

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#481E34", "#16192B"]}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={styles.content}
      >
        <View style={styles.viewLogo}>
          <FastImage source={ICON_LOGIN.logo} style={styles.iconLogo} />
          <View style={styles.viewAppName}>
            <Text style={styles.textAppName}>GATEPLAY</Text>
            <Text style={styles.textPlatForm}>P L A T F O R M</Text>
          </View>
        </View>

        <TouchableOpacity onPress={onPressLogin} style={{ marginTop: 30 }}>
          <LinearGradient
            colors={["#FD5F57", "#FC2E66"]}
            end={{ x: 1, y: 0 }}
            start={{ x: 0, y: 0 }}
            style={styles.gradientBtn}
          >
            <Text style={styles.textLogin}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>
        <Text style={styles.textSub}>
          Don't have an account?{" "}
          <Text style={styles.textSignUp}>Sign up now!</Text>
        </Text>
      </LinearGradient>
    </SafeAreaView>
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
  },
  iconLogo: {
    height: 70,
    width: 70,
  },
  textPlatForm: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#433A45",
    paddingLeft: 6,
  },
  viewLogo: {
    flexDirection: "row",
  },
  viewAppName: {
    justifyContent: "center",
  },
  textAppName: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    paddingLeft: 6,
  },
  textLogin: {
    color: "white",
    fontWeight: "bold",
  },
  gradientBtn: {
    width: scale(250),
    height: 40,
    backgroundColor: "green",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textSub: {
    ...textSmall,
    marginTop: 20,
  },
  textSignUp: {
    ...textMedium,
    color: "#FD2D67",
  },
});

export default Login;
