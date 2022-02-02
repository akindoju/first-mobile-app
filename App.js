import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  const textInputHandler = (enteredText) => {
    setText(enteredText);
  };

  const buttonClickHandler = () => {
    console.log(text);
  };

  const setGoalHandler = () => {
    const newArr = [...goals];
    newArr.push(text);
    setGoals(newArr);
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.input}
          value={text}
          onChangeText={textInputHandler}
        />
        <Button title="Add" onPress={setGoalHandler} />
      </View>
      <View>
        {goals.map((goal, idx) => (
          <View key={idx} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
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
