import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const QuestionList = ({ item }) => {
  const [visibleAnswer, setVisibleAnswer] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Text>{item.question}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setVisibleAnswer(!visibleAnswer)}>
        <Text style={{ color: "#fff" }}>
          {visibleAnswer ? "Hide" : "Tap to see"} Answer
        </Text>
      </TouchableOpacity>

      <Text style={{ paddingBottom: 10 }}>
        {visibleAnswer ? item.answer : null}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },

  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10,
    width: "40%",
  },
});

export default QuestionList;
