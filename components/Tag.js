import { View, Text } from "react-native";

import { StyleSheet } from "react-native";

const TagComponent = (props) => {
  const { title } = props;

  return (
    <View style={styles.tag__container}>
      <Text style={styles.tag__text}>{title.toUpperCase()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  tag__container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginRight: 10,
    marginBottom: 5,
  },

  tag__text: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
});

export default TagComponent;
