import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation} from "@react-navigation/native";

const AlbumsScreen = () => {
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
          <Text style={[styles.tabs]} onPress={playlistsHandler}>
            Playlists
          </Text>
          <Text style={[styles.tabs]} onPress={artistsHandler}>
            Artists
          </Text>
          <Text style={[styles.tabs, styles.albums]} onPress={albumsHandler}>
            Albums
          </Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.content}>Your albums will appear here</Text>
        </View>
      </View>
    </>
  );
};

export default AlbumsScreen;

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
  albums: {
    color: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#1DB954",
  },
  container2: {
    alignItems: "center",
    height: "70%",
    justifyContent: "center",
  },
  content: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
