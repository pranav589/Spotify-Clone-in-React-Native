import React from "react";
import { View, Text, FlatList } from "react-native";
import { AlbumComp } from "../../types";
import Album from "../Album";
import styles from "./styles";

export type AlbumCategoryProps = {
  title: string;
  albums: [AlbumComp];
  styleForBottom: object;
  styleForFirst: object;
};

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={props.albums}
        renderItem={({ item, index }) => (
          <Album album={item} styleForFirst={props.styleForFirst} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        style={props.styleForBottom}
      />
    </View>
  );
};

export default AlbumCategory;
