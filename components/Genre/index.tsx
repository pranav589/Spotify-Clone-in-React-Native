import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import styles from "./styles";

export type GenreProps = {
  genre: {
    name: string;
    color: string;
  };
};

const Genre = (props: GenreProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            backgroundColor: props.genre.color,
            margin: 10,
            width: Dimensions.get("screen").width / 2 - 30,
            padding: 10,
            height: 65,
            textAlign: "center",
            borderRadius: 5,
          }}
        >
          {props.genre.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Genre;
