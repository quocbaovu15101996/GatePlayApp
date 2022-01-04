import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationFunctionComponent } from "react-native-navigation";

const Erace: NavigationFunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Erace</Text>
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

export default Erace;
