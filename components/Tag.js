import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

const TagComponent = (props) => {
  const { title } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 6,  
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: "grey",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
});

export default TagComponent;
