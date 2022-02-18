import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Message } from "iconoir-react-native";

import Tag from './Tag';

const itemList = (props) => {
  const { picture, author, about, tags, comments, goTo } = props;

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.image__container}>
          <Image
            style={styles.image}
            source={{
              uri: picture,
            }}
          />
        </View>
        <View style={styles.detail__container}>
          <Text style={styles.title__text} numberOfLines={2}>
            {about}
          </Text>
          <Text style={styles.author__text}>{author}</Text>
          <View style={styles.tags__container}>
            <ScrollView style={styles.tags__scroll}>
              {tags.map((item, index) => (
                <Tag key={index} title={item} />
              ))}
            </ScrollView>
          </View>
          <TouchableOpacity style={styles.comment__button} onPress={goTo}>
            <Message color="silver" height={24} width={24} />
            <Text style={styles.comment__text}>{comments.length} Comments</Text>
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

  image__container: {
    width: "40%",
    height: "100%",
  },

  image: {
    maxWidth: "100%",
    height: "100%",
  },

  detail__container: {
    width: "60%",
    height: "100%",
    paddingLeft: 10,
  },
  title__text: {
    color: "#000",
    fontSize: 18,
    fontWeight: "600",
  },

  author__text: {
    marginTop: 1,
    color: "silver",
    fontSize: 15,
    fontWeight: "500",
  },

  tags__container: {
    marginTop: 10,
    width: "100%",
    height: 40,
  },

  tags__scroll: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  comment__button: {
    position: "absolute",
    bottom: 0,
    left: 15,
    width: 100,
    flexDirection: "row",
    alignItems: "center",
  },

  comment__text: {
    marginLeft: 10,
    color: "silver",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default itemList;
