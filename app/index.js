import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import onboarding1 from "@/assets/images/onboarding1.png";

const Home = () => {
  return (
    <SafeAreaView>

    
    <View style={styles.mainContainer}>
      <Text style={styles.welcome}>Welcome To UberDrive</Text>

      <View style={styles.image1Container}>
        <Image source={onboarding1} style={styles.image1} />
      </View>
    </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    mainContainer:{
        paddingHorizontal: 10
    },

  welcome: {
    color: "green",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    fontWeight: 500
  },

  image1Container:{
    display:"flex",
    justifyContent: "center",
    alignItems:"center",
    // primaryColor: #0A690E
    // secondary: #5c9a56 j
    // text: #00000
    // subtextcolor:# 727272

  },

  image1: {
    width: 370,
    height: 300,
    aspectRatio: 1/1
  },
});
