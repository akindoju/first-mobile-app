import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  const textInputHandler = (enteredText) => {
    setText(enteredText);
  };

  const setGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        key: Math.random().toString(),
        value: text,
      },
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.input}
          value={text}
          onChangeText={textInputHandler}
        />
        <Button title="Add" onPress={setGoalHandler} />
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20,
  },

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

  listItem: {
    padding: 10,
    marginTop: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
