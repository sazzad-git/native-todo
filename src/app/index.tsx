import React from "react";
import { StyleSheet, View } from "react-native";
import ActionButton from "../components/ActionButton";
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.todoContainer}>
        <TodoCard />
      </View>
      <ActionButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  todoContainer: {
    padding: 20,
    gap: 10,
  },
});

export default Home;
