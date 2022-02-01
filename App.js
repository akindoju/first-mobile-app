import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [text, setText] = useState("Hello there");

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <Button onPress={() => setText("Hello Mate")} title="Click Me" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
