import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Button,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Spacer from "../components/Spacer";
import QuestionList from "../components/Questions";
import triviaApi from "../api/trivia";

const ListScreen = () => {
  const [questions, setQuestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //console.log(questions);
  const Questions = async () => {
    try {
      const response = await triviaApi.get("/questions");

      setQuestions(response.data);
    } catch (err) {
      setErrorMessage("could not load the questions");
    }
  };

  const visibility = () => {
    setVisibleAnswer(!visibleAnswer);
  };

  useEffect(() => {
    Questions();
  }, []);

  return (
    <SafeAreaView>
      <Spacer>
        <Text style={styles.textStyle}>Practice Questions</Text>
      </Spacer>
      <FlatList
        data={questions.questions}
        keyExtractor={(questions) => questions.id}
        renderItem={ ({ item }) => <QuestionList item={item} /> }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
  },
});

export default ListScreen;
