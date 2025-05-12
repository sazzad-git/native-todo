import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Modal from "react-native-modal";

const AddTodo = ({
  isActive,
  onClose,
  value,
  onChangeText,
  onPressSubmit,
}: {
  isActive: boolean;
  onClose: any;
  value: string;
  onChangeText: (item: string) => void;
  onPressSubmit: () => void;
}) => {
  return (
    <Modal
      isVisible={isActive}
      style={styles.modal}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Add Todo</Text>
        <TextInput
          style={styles.inputContainer}
          placeholder="Enter Your Todo"
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity style={styles.button} onPress={onPressSubmit}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  container: {
    padding: 20,
    backgroundColor: "white",
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    shadowColor: "#000",
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  inputContainer: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    fontSize: 16,
    color: "black",
    borderColor: "black",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default AddTodo;
