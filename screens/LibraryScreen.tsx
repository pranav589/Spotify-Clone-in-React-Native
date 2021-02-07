import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import PlaylistsScreen from "./PlaylistsScreen";

const LibraryScreen = () => {
  const navigation = useNavigation();
  const podcastHandler = () => {
    navigation.navigate("PodcastScreen");
  };
  const playlistsHandler = () => {
    navigation.navigate("LibraryScreen");
  };

  const artistsHandler = () => {
    navigation.navigate("ArtistsScreen");
  };

  const albumsHandler = () => {
    navigation.navigate("AlbumsScreen", { color: "white" });
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.titleMusic}>Music</Text>
          <Text style={styles.titlePodcast} onPress={podcastHandler}>
            Podcast
          </Text>
        </View>
        <View style={styles.container1}>
          <Text
            style={[styles.tabs, styles.playlists]}
            onPress={playlistsHandler}
          >
            Playlists
          </Text>
          <Text style={[styles.tabs]} onPress={artistsHandler}>
            Artists
          </Text>
          <Text style={[styles.tabs]} onPress={albumsHandler}>
            Albums
          </Text>
        </View>
        <PlaylistsScreen />
      </View>
    </>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: "10%",
  },
  titleMusic: {
    color: "white",
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: "5%",
    marginRight: "6%",
  },
  titlePodcast: {
    color: "gray",
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: "5%",
    marginRight: "6%",
  },
  text: {
    flexDirection: "row",
  },
  tabs: {
    color: "grey",
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  container1: {
    flexDirection: "row",
  },
  playlists: {
    color: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#1DB954",
  },
});
