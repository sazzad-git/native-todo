import React, { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import ActionButton from "../components/ActionButton";
import AddTodo from "../components/AddTodo";
import Header from "../components/Header";
import TodoCard from "../components/TodoCard";

export interface TodoData {
  title: string;
  isCompleted: boolean;
  time: string;
}

const Home = () => {
  const [data, setData] = useState<TodoData[]>([]);
  const [todo, setTodo] = useState("");
  const [open, setOpen] = useState(false);

  const onSubmitTodo = () => {
    if (!todo) {
      Alert.alert("warning", "please enter your todo");
    }

    let finalData: TodoData = {
      title: todo,
      isCompleted: false,
      time: new Date().toDateString(),
    };

    setData([...data, finalData]);
    setTodo("");
    setOpen(false);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.todoContainer}>
        <FlatList
          data={data}
          contentContainerStyle={{ gap: 10 }}
          ListEmptyComponent={() => (
            <Text style={styles.noDataFound}>No Data Found</Text>
          )}
          renderItem={({ item }) => (
            <TodoCard
              title={item.title}
              time={item.time}
              isCompleted={item.isCompleted}
            />
          )}
        />
      </View>
      <AddTodo
        isActive={open}
        onClose={() => setOpen(false)}
        value={todo}
        onChangeText={(e) => setTodo(e)}
        onPressSubmit={onSubmitTodo}
      />
      <ActionButton onPress={() => setOpen(true)} />
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
  noDataFound: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 120,
  },
});

export default Home;
