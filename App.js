import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import FormInput from "./components/FormInput";
import ListItem from "./components/ListItem";
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
      <FormInput
        textInputHandler={textInputHandler}
        text={text}
        setGoalHandler={setGoalHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => <ListItem item={itemData.item.value} />}
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
});
