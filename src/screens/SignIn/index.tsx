import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

const SignIn: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignIn;
