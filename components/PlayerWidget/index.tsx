import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Sound } from "expo-av/build/Audio";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useSelector } from "react-redux";

const PlayerWidget = () => {
  const songData = useSelector((state) => {
    return state;
  });

  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [duration, setDuration] = useState<Number | null>(null);
  const [position, setPosition] = useState<Number | null>(null);
  const [liked, setLiked] = useState<Boolean>(false);

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying);
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
    }
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const playCurrentSong = async () => {
    const { sound: newSound } = await Sound.createAsync(
      { uri: songData.uri },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(newSound);
  };

  useEffect(() => {
    playCurrentSong();
  }, [songData]);

  const playPauseHandler = async () => {
    if (!sound) {
      return;
    }
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  const getProgress = () => {
    if (sound === null || position === null || duration === null) {
      return 0;
    }
    return (position / duration) * 100;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: `${getProgress()}%` }]} />
      <View style={styles.row}>
        <Image source={{ uri: songData.imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {songData.name}
            </Text>
            <Text style={styles.artist} numberOfLines={1}>
              {songData.artistsHeadline}
            </Text>
          </View>

          <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => setLiked(!liked)}>
              <AntDesign
                name={liked ? "heart" : "hearto"}
                size={24}
                color="white"
                style={{ padding: 10 }}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={playPauseHandler}>
              <Ionicons
                name={isPlaying ? "pause" : "play"}
                size={26}
                color="white"
                style={{ padding: 10 }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
