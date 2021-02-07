import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";
import Genre from "../Genre";

export type GenreListProps = {
  genreList: {
    title: string;
    genres: [];
  };
  styleForLast: object;
  styleForTop: object;
};

const GenreList = (props: GenreListProps) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, props.styleForTop]}>
        {props.genreList.title}
      </Text>
      <FlatList
        data={props.genreList.genres}
        renderItem={({ item, index }) => <Genre genre={item} />}
        style={[
          { flexDirection: "row", width: "100%", flexWrap: "wrap" },
          props.styleForLast,
        ]}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default GenreList;
