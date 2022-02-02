import React from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const FormInput = ({ text, setGoalHandler, textInputHandler }) => {
  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Enter Goal"
        style={styles.input}
        value={text}
        onChangeText={textInputHandler}
      />
      <Button title="Add" onPress={setGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  input: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    padding: 10,
  },
});

export default FormInput;
