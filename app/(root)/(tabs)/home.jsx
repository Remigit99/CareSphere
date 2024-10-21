import { StyleSheet, Text, View, FlatList, Platform } from "react-native";
import React, { useState, useRef } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { categoriesData } from "../../../constants/mockData/categories";
import { helpData } from "../../../constants/mockData/help";

import profileImg from "@/assets/images/my_profile_img.png";

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
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

        {/* Cat  Help */}
        <View style={styles.categoriesContainer}>
          <View style={styles.catHeader}>
            <View>
              <Text style={styles.catHeaderText}>How can we help?</Text>
            </View>

            {/* <View>
              <Text>See all</Text>
            </View> */}
          </View>

          <View style={styles.catContent}>
            {helpData.map((item) => (
              <View style={[styles.catItem, styles.catHelp]} key={item.id}>
                <View style={{alignSelf: "center",}}>{item.icon}</View>
                <Text style={{ fontSize: 16, color: "white", textAlign: "center" }}>{item.text}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Cat  Health */}

        <View style={styles.categoriesContainer}>
          {/* <FlatList
          data={categoriesData}
          renderItem={(item) => <View><Text style={{color: "white"}}>{item.title}</Text></View>}
          keyExtractor={item => item.id}
          style={styles.flatlist}
          /> */}

          <View style={styles.catHeader}>
            <View>
              <Text style={styles.catHeaderText}>Health Categories</Text>
            </View>

            <View>
              <Text style={styles.catHeaderText}>See all</Text>
            </View>
          </View>

          <View style={styles.catContent}>
            {categoriesData.map((item) => (
              <View style={styles.catItem} key={item.id}>
                <Text style={{fontSize: 18, color: "white" }}>{item.title}</Text>
                <View>{item.icon}</View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeArea:{
    flex: 1,
    // backgroundColor:"red" 
  },
  mainContainer: {
    // backgroundColor: "#b6c5d1",
    backgroundColor: "#dce5ec", //variant
    flex: 1
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
    fontFamily: "QuicksandMedium",
  },

  flatlist: {
    backgroundColor: "red",
    flex: 1,
  },
  categoriesContainer: {
    backgroundColor: "#dce5ec", //variant
    paddingVertical: 24,
    paddingHorizontal: 10,
    marginVertical: 20,
    marginHorizontal: 10,
    // shadowOffset: {width: 5, height: 5},
    // shadowOpacity: 0.4,
    // ...Platform.select({
    //   ios:{

    //   },
    //   android:{

    //   }
    // })
  },
  catHeaderText:{
    fontSize: 24
  },

  catContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // textAlign: "center",
    columnGap: 12
   
  },
  catItem: {
    backgroundColor: "#0dbad2",
    padding: 8,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    gap: 8,
    borderRadius:16
  },
  catHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  catHelp: {
    flexShrink: 1,
  },
});
