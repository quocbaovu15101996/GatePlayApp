import React, { FunctionComponent } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import LinearGradient from "react-native-linear-gradient";
import { startApp } from "../../libs/navigation/Utils";
import { ICON_LOGIN } from "../../utils/enum";

const Login: FunctionComponent = () => {
  const onPressLogin = () => {
    startApp();
  };

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#481E34", "#16192B"]}
        end={{ x: 1, y: 1 }}
        start={{ x: 0, y: 0 }}
        style={styles.content}
      >
        <View style={{ flexDirection: "row" }}>
          <FastImage source={ICON_LOGIN.logo} style={styles.iconLogo} />
          <View style={{ justifyContent: "center" }}>
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              GATEPLAY
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                backgroundColor: "#433A45",
                paddingLeft: 6,
              }}
            >
              P L A T F O R M
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={onPressLogin} style={{ marginTop: 30 }}>
          <LinearGradient
            colors={["#FD5F57", "#FC2E66"]}
            end={{ x: 1, y: 0 }}
            start={{ x: 0, y: 0 }}
            style={{
              width: 200,
              height: 40,
              backgroundColor: "green",
              borderRadius: 30,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>LOGIN</Text>
          </LinearGradient>
        </TouchableOpacity>
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
});

export default Login;
