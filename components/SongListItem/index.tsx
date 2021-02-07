import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Song } from "../../types";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";

export type SongListItemProps = {
  song: Song;
  styleForLast: object;
};

const SongListItem = (props: SongListItemProps) => {
  const { song } = props;

  return (
    <TouchableOpacity
      style={props.styleForLast}
      onPress={() => props.songHandler(song)}
    >
      <View style={styles.container}>
        <Image source={{ uri: song.imageUri }} style={styles.image} />
        <View style={styles.container2}>
          <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {song.name}
            </Text>
            <Text style={styles.artist} numberOfLines={1}>
              {song.artistsHeadline}
            </Text>
          </View>
          <View>
            <Entypo name="dots-three-vertical" size={20} color="white" />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SongListItem;
