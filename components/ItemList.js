import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Message } from "iconoir-react-native";

import styles from "./itemList.style.js";
import Tag from "../tag/Tag.js";

const itemList = (props) => {
  const { picture, author, about, tags, comments, goTo } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={styles.images}
            source={{
              uri: picture,
            }}
          />
        </View>
        <View style={styles.detail}>
          <Text style={styles.title} numberOfLines={2}>
            {about}
          </Text>
          <Text style={styles.author}>{author}</Text>
          <View style={styles.tags}>
            <ScrollView style={styles.tagsScroll}>
              {tags.map((item, index) => (
                <Tag key={index} title={item} />
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.commentButton} onPress={goTo}>
            <Message color="silver" height={24} width={24} />
            <Text style={styles.comment}>{comments.length} Comments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    paddingHorizontal: 20,
    paddingVertical: 25,
    flexDirection: "row",
    borderBottomWidth: 1,
  },

  images: {
    width: "40%",
    height: "100%",
  },

  image: {
    maxWidth: "100%",
    height: "100%",
  },

  detail: {
    width: "60%",
    height: "100%",
    paddingLeft: 10,
  },
  title: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },

  author: {
    marginTop: 1,
    color: "silver",
    fontSize: 15,
    fontWeight: "500",
  },

  tags: {
    marginTop: 10,
    width: "100%",
    height: 40,
  },

  tagsScroll: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  commentButton: {
    position: "absolute",
    bottom: 0,
    left: 15,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
  },

  comment: {
    marginLeft: 10,
    color: "silver",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default itemList;
