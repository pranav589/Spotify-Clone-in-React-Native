import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";

export type ModalCompProps = {
  close: boolean;
};

const ModalComp = (props: ModalCompProps) => {
  const [text, setText] = useState("");
  const [type, setType] = useState(false);

  const onType = (val) => {
    setText(val);
    setType(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient
        colors={["#9AA29D", "#373B38", "#000"]}
        style={[
          {
            width: "100%",
            paddingBottom: 10,
            height: Dimensions.get("screen").height,
          },
          styles.container,
        ]}
        start={{ x: 0.3, y: 0.0 }}
        end={{ x: 0.5, y: 0.8 }}
      >
        <Text style={styles.text}>Give your playlist a name</Text>
        <TextInput style={styles.input} onChangeText={onType} value={text} />
        <View style={styles.buttons}>
          <Text style={styles.cancel} onPress={props.close}>
            CANCEL
          </Text>
          <Text style={styles.skip} onPress={() => props.addPlaylist({ text })}>
            {type ? "CREATE" : "SKIP"}
          </Text>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

export default ModalComp;
