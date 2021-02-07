import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Card from "../components/Cards";

const content = [
  {
    type: "Mini",
    price: "From ₹7",
    day: "FOR 1 DAY",
    desc:
      "Day adn week plans . Ad-free music on mobile . Download 30 songs on 1 mobile device",
    buttonText: "VIEW PLANS",
    terms: "Terms and conditions",
    white: "apply.",
    backgroundColor: "#2C61AE",
  },
  {
    type: "Premium Individual",
    price: "Free",
    day: "FOR 1 MONTH",
    desc:
      "Try Premium free for 1 month .  Subscribe with card . Auto-renew . Ad-free music . Download to listen offline . Cancel anytime",
    buttonText: "TRY 1 MONTH FREE",
    terms:
      "Only ₹119/month after. Offer only for users who are new to Premium.",
    white: "Terms apply.",
    backgroundColor: "#209620",
  },
  {
    type: "Premium Family",
    price: "Free",
    day: "FOR 1 MONTH",
    desc:
      "Up to 6 Premium account . For family who live together . Block explicit music . Add-free music . Download 10,000 songs/device, on up to 5 devies per account . Auto-renews monthly",
    buttonText: "TRY 1 MONTH FREE",
    terms:
      "Only ₹179/month after. Offer only for users who are new to Premium. For up to 6 family members living at the same address.",
    white: "Terms apply.",
    backgroundColor: "#A22DA3",
  },
];

const PremiumScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={content}
          renderItem={({ item, index }) => {
            if (index === content.length - 1)
              return (
                <Card content={item} styleForLast={{ marginBottom: "20%" }} />
              );
            else return <Card content={item} />;
          }}
          ListHeaderComponent={() => (
            <View>
              <Text style={styles.title}>Try Premium free for 1 month</Text>
              <TouchableOpacity>
                <Text style={styles.button}>GET PREMIUM</Text>
              </TouchableOpacity>

              <Text style={styles.terms}>
                Only ₹119/month after. Offer only for users who are new to
                Premium.
              </Text>
              <Text style={styles.terms1}>
                <Text style={{ color: "white" }}>Terms </Text>apply.
              </Text>
              <View style={styles.container1}>
                <Text style={styles.spotify}>Spotify Free</Text>
                <Text style={styles.plan}>CURRENT PLAN</Text>
              </View>
            </View>
          )}
          keyExtractor={(item) => item.desc}
        />
      </View>
    </>
  );
};

export default PremiumScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: "white",
    marginTop: "18%",
    fontSize: 23,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
    marginTop: 20,
    padding: 15,
    textAlign: "center",
    borderRadius: 50,
    letterSpacing: 1,
    fontSize: 15,
    fontWeight: "700",
  },
  terms: {
    color: "grey",
    marginTop: 10,
    textAlign: "center",
  },
  terms1: {
    color: "grey",
    textAlign: "center",
  },
  container1: {
    backgroundColor: "#2C2D2C",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  spotify: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  plan: {
    color: "grey",
  },
});
