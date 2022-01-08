import { KeyboardAwareScrollView } from "@codler/react-native-keyboard-aware-scroll-view";
import React, { FC, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { FooterOptions } from "src/components/login/FooterOptions";
import { GradientButton } from "src/components/login/GradientButton";
import { LoginHeader } from "src/components/login/LoginHeader";
import TextField from "src/components/login/TextField";
import { startApp } from "src/libs/navigation/Utils";
import { submitLogin } from "src/queries/Login/login.queries";
import Colors from "src/styles/colors";
import { textBoldMedium, textMedium } from "src/styles/text.style";

type Props = {};

type State = {
  loading: boolean;
  email: string;
  password: string;
  errorMess?: string;
};
const SignIn: FC<Props> = (props) => {
  const [state, updateState] = useState<State>({
    loading: false,
    email: "",
    password: "",
    errorMess: "",
  });

  const callbackSuccess = (data: LoginSuccess) => {
    updateState((prevState) => ({
      ...prevState,
      loading: false,
    }));
  };

  const callbackError = (errMessage?: string) => {
    updateState((prevState) => ({
      ...prevState,
      loading: false,
      errorMess: errMessage,
    }));
  };

  const onPressLogin = () => {
    startApp();
    // updateState((prevState) => ({
    //   ...prevState,
    //   loading: true,
    // }));
    // submitLogin(state.email, state.password, callbackSuccess, callbackError);
  };

  const onChangeEmail = (text: string) => {
    updateState((prevState) => ({
      ...prevState,
      loading: false,
      email: text,
    }));
  };

  const onChangePassWord = (text: string) => {
    updateState((prevState) => ({
      ...prevState,
      loading: false,
      password: text,
    }));
  };

  return (
    <LinearGradient
      colors={["#481E34", "#16192B"]}
      end={{ x: 1, y: 1 }}
      start={{ x: 0, y: 0 }}
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <KeyboardAwareScrollView
          bounces={false}
          style={styles.container}
          enableOnAndroid={true}
          keyboardDismissMode={"on-drag"}
          keyboardShouldPersistTaps={"handled"}
          showsVerticalScrollIndicator={false}
        >
          <LoginHeader
            title={"GatePlay Login"}
            desc={`LOGIN TO\nYOUR ACCOUNT`}
          />
          <Text style={styles.textErrorMessage}>{state.errorMess}</Text>
          <TextField
            onChangeText={onChangeEmail}
            style={styles.textEmail}
            placeholder={"Email"}
          />
          <TextField
            onChangeText={onChangePassWord}
            style={styles.textPassWord}
            placeholder={"PassWord"}
            secureTextEntry={true}
          />
          <View style={styles.viewFogotPW}>
            <Text style={styles.textFogotPW}>Fogot your Password?</Text>
          </View>
          <GradientButton
            title={"LOGIN"}
            onPress={onPressLogin}
            style={styles.btnLogin}
            disabled={false}
            loading={state.loading}
          />

          <FooterOptions />
        </KeyboardAwareScrollView>
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
    marginHorizontal: 24,
  },
  textEmail: {
    paddingHorizontal: 14,
  },
  textPassWord: {
    marginTop: 12,
    paddingHorizontal: 14,
  },
  viewFogotPW: {
    alignItems: "flex-end",
    marginTop: 8,
  },
  textFogotPW: {
    ...textBoldMedium,
    color: Colors.red700,
  },
  btnLogin: {
    marginTop: 24,
  },
  textErrorMessage: {
    ...textMedium,
    color: Colors.red700,
    marginTop: 30,
    marginBottom: 8,
  },
});

export default SignIn;
