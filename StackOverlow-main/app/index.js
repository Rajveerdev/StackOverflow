import { StyleSheet, Text, View, FlatList } from "react-native";
import QuestionListItems from "../src/component/QuestionListItems";
import questions from '../data/questions';

export default function Page() {
  return (
    <View style={styles.container}>
      <FlatList
        data={questions.items}
        renderItem={({ item }) => <QuestionListItems question={item} />}
        showsVerticalScrollIndicator={false}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});
