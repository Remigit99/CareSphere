import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState, useRef } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { categoriesData } from "../../../constants/mockData/categories";


import profileImg from "@/assets/images/my_profile_img.png";


const Home = () => {
 

  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profileImgContainer}>
            <Image source={profileImg} style={styles.image1} />
            {/* <Image source={onboarding1} style={styles.image1} /> */}
          </View>
          <View>
            <Text style={styles.welcome}>Hi Abiodun</Text>
            <Text style={styles.headerMsg}>Welcome To CareSphere!</Text>
          </View>
        </View>
        {/* <View>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={search}
            onChange={(search) => setSearch(search)}
          />
        </View> */}


        <View>
          <FlatList
          data={categoriesData}
          renderItem={(item) => <View><Text>{item.title}</Text></View>}
          keyExtractor={item => item.id}
          style={styles.flatlist}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: "#b6c5d1",
  },
  profileHeaderContainer: {
    backgroundColor: "#1B3D6E",
    padding: 10,
    paddingVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    // display: "none"
  },

  welcome: {
    color: "#fff",
    fontSize: 20,
    // marginTop: 20,
    // fontWeight: 600,
  },
  headerMsg: {
    fontSize: 12,
    color: "#fff",
  },

  image1Container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image1: {
    width: 70,
    height: 70,
    borderRadius: 200,
  },

  searchInput: {
    backgroundColor: "white",
    marginHorizontal: 32,
    marginVertical: 16,
    padding: 16,
    borderRadius: 32,
    fontFamily: "QuicksandMedium"
  },

  flatlist:{
    backgroundColor: "red"
  }

});
