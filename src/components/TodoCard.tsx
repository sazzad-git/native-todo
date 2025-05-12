import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TodoData } from "../app";

const TodoCard = ({ title, time, isCompleted }: TodoData) => {
  const [isActive, setIsActive] = useState(isCompleted);
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => setIsActive(!isActive)}
    >
      <View style={styles.todoContainer}>
        <MaterialIcons
          name={isActive ? "radio-button-on" : "radio-button-off"}
          size={24}
          color={isActive ? "#7A7777" : "black"}
        />
        <Text style={[isActive ? styles.inactiveTitles : styles.title]}>
          {title}
        </Text>
      </View>
      <Text style={[styles.time, isActive && { color: "#7A7777" }]}>
        {time}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(32,31,31,0.2)",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    // marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
  },
  time: {
    fontSize: 12,
    color: "black",
    fontWeight: "400",
  },
  inactiveTitles: {
    fontSize: 18,
    color: "#&A7777",
    fontWeight: "300",
    textDecorationLine: "line-through",
  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
export default TodoCard;
