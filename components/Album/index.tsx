import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import { AlbumComp } from "../../types";

export type AlbumProps = {
  album: AlbumComp;
  styleForFirst: object;
};

const Album = (props: AlbumProps) => {
  const navigation = useNavigation();

  const pressHandler = () => {
    navigation.navigate("AlbumScreen", { props });
  };

  return (
    <TouchableWithoutFeedback onPress={pressHandler}>
      <View style={styles.container}>
        <Image
          source={{ uri: props.album.imageUri }}
          style={[styles.image, props.styleForFirst]}
        />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;
