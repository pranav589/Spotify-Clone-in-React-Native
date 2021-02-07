import React from "react";
import { View, Text, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const SearchHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search</Text>
      <View>
        <AntDesign
          name="search1"
          size={20}
          color="grey"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Artists, songs, or podcasts"
          placeholderTextColor="black"
        />
      </View>
    </View>
  );
};

export default SearchHeader;
