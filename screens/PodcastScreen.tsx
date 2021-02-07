import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const PodcastScreen = () => {
  const navigation = useNavigation();

  const musicHandler = () => {
    navigation.navigate("LibraryScreen", { color: "white" });
  };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.text}>
          <Text style={styles.titleMusic} onPress={musicHandler}>
            Music
          </Text>
          <Text style={[styles.titleMusic, { color: "white" }]}>Podcast</Text>
        </View>
        <View style={styles.container1}>
          <Text style={styles.text1}>Looking for something to listen to?</Text>
          <TouchableOpacity>
            <Text style={styles.button}>BROWSE PODCASTS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PodcastScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: "10%",
  },
  titleMusic: {
    color: "grey",
    fontSize: 27,
    fontWeight: "bold",
    marginBottom: "5%",
    marginRight: "6%",
  },
  text: {
    flexDirection: "row",
  },
  container1: {
    alignItems: "center",
    height: "80%",
    justifyContent: "center",
  },
  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "white",
    color: "black",
    marginTop: 20,
    padding: 15,
    borderRadius: 50,
    width: 250,
    textAlign: "center",
    letterSpacing: 1,
    fontWeight: "700",
  },
});
