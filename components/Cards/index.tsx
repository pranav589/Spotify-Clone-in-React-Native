import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

export type CardProps = {
  content: {
    type: string;
    day: string;
    price: string;
    desc: string;
    buttonText: string;
    terms: string;
    white: string;
    backgroundColor: string;
  };
  styleForLast: object;
};

const Card = (props: CardProps) => {
  const { content, styleForLast } = props;
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: content.backgroundColor },
        styleForLast,
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.pack}>{content.type}</Text>
        <View style={styles.price}>
          <Text style={styles.rupee}>{content.price}</Text>
          <Text style={styles.days}>{content.day}</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>{content.desc}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{content.buttonText}</Text>
      </TouchableOpacity>
      <Text style={styles.terms}>
        {content.terms} <Text style={styles.apply}>{content.white}</Text>
      </Text>
    </View>
  );
};

export default Card;
