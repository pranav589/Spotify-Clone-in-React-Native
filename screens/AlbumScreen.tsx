import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";

import SongListItem from "../components/SongListItem";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import AlbumHeader from "../components/AlbumHeader";
import { useDispatch } from "react-redux";

const AlbumScreen = () => {
  const route = useRoute();
  const [songs, setSongs] = useState([]);
  const dispatch = useDispatch();

  const songHandler = (song) => {
    dispatch({ type: "SONG_LOAD", payload: song });
  };

  useEffect(() => {
    setSongs(route.params.props.album.songs);
  }, []);

  return (
    <View>
      <FlatList
        data={songs}
        renderItem={({ item, index }) => {
          if (index == songs.length - 1)
            return (
              <TouchableOpacity>
                <SongListItem
                  song={item}
                  styleForLast={{ marginBottom: "18%" }}
                  songHandler={songHandler}
                />
              </TouchableOpacity>
            );
          else return <SongListItem song={item} songHandler={songHandler} />;
        }}
        ListHeaderComponent={() => <AlbumHeader album={route} />}
      />
    </View>
  );
};

export default AlbumScreen;
