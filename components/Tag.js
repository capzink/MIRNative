import { View, Text } from "react-native";

import styles from "./tag.style.js";

const Tag = (props) => {
  const { title } = props;

  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{title.toUpperCase()}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  tag: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "green",
    marginRight: 10,
    marginBottom: 5,
  },

  tagText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "600",
  },
});
export default Tag;
