import * as React from "react";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AlbumCategory from "../components/AlbumCategory";
import albumCategories from "../data/albumCategories";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#4D4B4A", "#2B2A2A", "#161616", "#000"]}
        style={{ width: "100%", paddingBottom: 10 }}
        start={{ x: 0.1, y: 0.1 }}
        end={{ x: 0.2, y: 0.3 }}
      >
        <FlatList
          data={albumCategories}
          renderItem={({ item, index }) => {
            if (index == albumCategories.length - 1)
              return (
                <AlbumCategory
                  title={item.title}
                  albums={item.albums}
                  styleForBottom={{ marginBottom: "18%" }}
                />
              );
            else if (index === 0)
              return (
                <View>
                  <AlbumCategory
                    title={item.title}
                    albums={item.albums}
                    styleForFirst={{ borderRadius: 10 }}
                  />
                  <Feather
                    name="settings"
                    size={24}
                    color="white"
                    style={{ position: "absolute", right: "8%", top: "13.5%" }}
                  />
                </View>
              );
            else
              return <AlbumCategory title={item.title} albums={item.albums} />;
          }}
          keyExtractor={(item) => item.id}
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
