import React from "react";
import { View, Button, TextInput, StyleSheet, Modal } from "react-native";

const FormInput = ({
  text,
  setGoalHandler,
  textInputHandler,
  isModalOpen,
  setIsModalOpen,
}) => {
  return (
    <Modal visible={isModalOpen} animationType="slide">
      <View style={styles.form}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.input}
          value={text}
          onChangeText={textInputHandler}
        />
        <View style={styles.buttons}>
          <View style={{ width: "30%" }}>
            <Button title="Add" onPress={setGoalHandler} />
          </View>
          <View style={{ width: "30%" }}>
            <Button
              title="Cancel"
              onPress={() => setIsModalOpen(false)}
              color="red"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  form: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 20,
  },

  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
});

export default FormInput;
