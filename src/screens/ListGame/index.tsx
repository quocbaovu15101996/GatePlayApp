import React, { FunctionComponent } from "react";
import { StyleSheet, Text, View } from "react-native";

const ListGame: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <Text>ListGame</Text>
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

export default ListGame;
