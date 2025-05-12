import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#007AFF"} barStyle={"light-content"} />
      <Text style={styles.title}>My Todo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#007AFF",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {},
});
export default Header;
