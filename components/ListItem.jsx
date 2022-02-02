import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ListItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginTop: 5,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default ListItem;
