import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";
import ModalComp from "../ModalComp";

const Playlist = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [playlists, setPlaylists] = useState([{ text: "Favorite", key: "1" }]);

  const addPlaylist = (playlist) => {
    playlist.key = Math.random().toString();
    setPlaylists((currentPlaylist) => {
      return [...currentPlaylist, playlist];
    });
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.create}
        onPress={() => setModalVisible(true)}
      >
        <AntDesign name="plussquare" size={50} color="grey" />
        <Text style={styles.text}>Create playlist</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.liked}>
        <AntDesign
          name="hearto"
          size={24}
          color="white"
          style={[styles.heart]}
        />
        <Text style={styles.text}>Liked Songs</Text>
      </TouchableOpacity>
      <FlatList
        data={playlists}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.liked}>
            <AntDesign
              name="hearto"
              size={24}
              color="white"
              style={styles.heart}
            />
            <Text style={styles.text}>{item.text}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.key}
      />

      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <ModalComp
          close={() => setModalVisible(false)}
          addPlaylist={addPlaylist}
        />
      </Modal>
    </View>
  );
};

export default Playlist;
