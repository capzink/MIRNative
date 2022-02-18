import React from "react";
import { StyleSheet } from "react-native";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Message } from "iconoir-react-native";
import Tag from './Tag';

const itemList = (props) => {
  const { picture, author, about, tags, comments, goTo } = props;

  return (
    <View style={styles.bigContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: picture,
            }}
          />
        </View>
        <View style={styles.detailContainer}>
          <Text style={styles.Text} numberOfLines={2}>
            {about}
          </Text>
          <Text style={styles.authorText}>{author}</Text>
          <View style={styles.tags}>
            <ScrollView style={styles.scroll}>
              {tags.map((item, index) => (
                <Tag key={index} title={item} />
              ))}
            </ScrollView>
          </View>
            <Message color="silver" height={24} width={24} />
            <Text style={styles.smalltext}>{comments.length} Comments</Text>
          
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

  bigContainer: { 
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" },

  container: {
    width: "100%",
    height: 200,
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: "row",
    borderBottomWidth: 0.5,
  },

  imageContainer: {
    width: "35%",
    height: "100%",
  },

  image: {
    maxWidth: "100%",
    height: "100%",
  },

  detailContainer: {
    width: "60%",
    height: "100%",
    paddingLeft: 10,
  },
  Text: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },

  authorText: {
    marginTop: 1,
    color: "silver",
    fontSize: 12,
    fontWeight: "500",
  },

  tags: {
    marginTop: 10,
    width: "100%",
    height: 30,
  },

  scroll: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
  },

   smalltext: {
    marginLeft: 10,
    color: "silver",
    fontSize: 14,
    fontWeight: "600",
  },
});

export default itemList;
