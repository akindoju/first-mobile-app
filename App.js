import { useState } from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";
import FormInput from "./components/FormInput";
import ListItem from "./components/ListItem";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const textInputHandler = (enteredText) => {
    setText(enteredText);
  };

  const setGoalHandler = () => {
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: text,
      },
    ]);
    setIsModalOpen(false);
    setText("");
  };

  const removeGoalHandler = (goalId) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsModalOpen(true)} />
      <FormInput
        textInputHandler={textInputHandler}
        text={text}
        setGoalHandler={setGoalHandler}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goals}
        renderItem={(itemData) => (
          <ListItem
            item={itemData.item.value}
            removeListItem={() => removeGoalHandler(itemData.item.id)}
          />
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
});
