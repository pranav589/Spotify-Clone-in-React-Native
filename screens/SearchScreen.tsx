import React from "react";
import { View } from "react-native";
import SearchHeader from "../components/SearchHeader";
import GenreList from "../components/GenreList";
import { FlatList } from "react-native-gesture-handler";
import searchGenres from "../data/searchGenres";

const SearchScreen = () => {
  return (
    <View>
      <FlatList
        data={searchGenres}
        renderItem={({ item, index }) => {
          if (index === 0)
            return (
              <GenreList genreList={item} styleForTop={{ marginTop: "10%" }} />
            );
          else if (index == searchGenres.length - 1)
            return (
              <GenreList
                genreList={item}
                styleForLast={{ marginBottom: "18%" }}
              />
            );
          else return <GenreList genreList={item} />;
        }}
        ListHeaderComponent={() => <SearchHeader />}
        keyExtractor={(item) => item.key}
      />
    </View>
  );
};

export default SearchScreen;
