import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const ActionButton = () => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.8}>
      <FontAwesome6 name="add" size={24} color="black" style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF",
    width: 80,
    height: 80,
    borderRadius: 80,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    right: 24,
  },
  icon: {
    fontSize: 40,
    color: "white",
  },
});

export default ActionButton;
