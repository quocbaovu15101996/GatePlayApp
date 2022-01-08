import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "src/styles/colors";
import { textMedium } from "src/styles/text.style";

const FooterOptions: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textOptionOne}>
        Don't have an account?{" "}
        <Text style={styles.textActionOptionOne}>Sign up now!</Text>
      </Text>
      <Text style={styles.textOptionTwo}>
        Do you need help? Consult our
        <Text style={styles.textActionOptionTwo}>Help</Text>
      </Text>
    </View>
  );
};

export { FooterOptions };

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
  },
  textOptionOne: {
    ...textMedium,
    color: "#B1B1B1",
  },
  textActionOptionOne: {
    color: Colors.red700,
  },
  textOptionTwo: {
    ...textMedium,
    color: "white",
  },
  textActionOptionTwo: {
    color: Colors.red700,
  },
});
