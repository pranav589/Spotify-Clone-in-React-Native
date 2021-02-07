import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ArtistsScreen = () => {
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
          <Text style={[styles.tabs, styles.artists]} onPress={artistsHandler}>
            Artists
          </Text>
          <Text style={[styles.tabs]} onPress={albumsHandler}>
            Albums
          </Text>
        </View>

        <View style={styles.container2}>
          <Text style={styles.head}>Your artists will appear here</Text>
          <Text style={styles.subHead}>
            You can add a few artists you like now
          </Text>
          <TouchableOpacity>
            <Text style={styles.button}>ADD ARTISTS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ArtistsScreen;

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
  artists: {
    color: "white",
    borderBottomWidth: 2,
    borderBottomColor: "#1DB954",
  },
  head: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subHead: {
    color: "gray",
    fontSize: 15,
    marginBottom: 15,
  },
  button: {
    color: "black",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
    width: 175,
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "700",
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
  },
});
