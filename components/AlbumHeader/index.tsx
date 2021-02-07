import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AlbumComp } from "../../types";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";

export type AlbumHeaderProps = {
  album: AlbumComp;
};

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;

  return (
    <LinearGradient
      colors={["#3f6b6b", "#121212", "#000"]}
      style={{ width: "100%", paddingBottom: 10 }}
    >
      <View style={styles.container}>
        <Image
          source={{ uri: album.params.props.album.imageUri }}
          style={styles.image}
        />

        <Text style={styles.name}>{album.params.props.album.name}</Text>

        <View style={styles.creatorContainer}>
          <Text style={styles.creator}>By Spotify</Text>
          <Text style={styles.likes}>
            ● {album.params.props.album.noOfLikes}
          </Text>
        </View>
        <TouchableOpacity>
          <View style={styles.button}>
            <AntDesign
              name="caretright"
              size={24}
              color="white"
              style={styles.buttonText}
            />
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default AlbumHeader;
