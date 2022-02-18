import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import ItemList from "../components/ItemList";

import data from "../data/data";

const List = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        {data.length &&
          data.map((item) => (
            <ItemList
              key={item.id}
              picture={item.picture}
              author={item.author}
              about={item.about}
              tags={item.tags}
              comments={item.comments}
            />
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default List;
