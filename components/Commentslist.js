import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const Commentlist = (props) => {
  const { comment } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.comment__text}>{comment}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 10,
    borderBottomWidth: 1,
  },

  comment__text: {
    textAlign: "justify",
  },
});

export default Commentlist;
