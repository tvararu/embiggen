import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 50
  }
});

export default () => (
  <View style={styles.container}>
    <Text style={styles.text}>Hello world!</Text>
  </View>
);
