import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { featuresData } from "../constants/mockData/features";
import { categoriesData } from "../constants/mockData/categories";
import Swiper from "react-native-swiper";

// import onboarding1 from "@/assets/images/onboarding1.png";
import profileImg from "@/assets/images/my_profile_img.png";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const Home = () => {
  const [search, setSearch] = useState("");
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0)

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
          <Swiper
          style={styles.swiperWrapper}
            loop={false}
            ref={swiperRef}
            onIndexChanged={(index) => setActiveIndex(index)}
            autoplay={true}
            dot={
              <View
                style={styles.dots}
              />
            }
            activeDot={
              <View
                style={styles.activeDots}

                
              />
            }
          >
            {featuresData.map((item, index) => (
              <View key={index}  style={styles.swiperItem}>
                <Text>{item.title}</Text>
              </View>
            ))}
          </Swiper>
        </View>

        <View>
          <Text>
            loremThe following packages should be updated for best compatibility
            with the installed expo version: jest-expo@51.0.3 - expected
            version: ~51.0.4 Your project may not work correctly until you
            install the expected versions of the packages.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#b6c5d1",
    backgroundColor: "#b6c5d1",
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
    // primaryColor: #0A690E
    // secondary: #5c9a56 j
    // text: #00000
    // subtextcolor:# 727272

    //New Colors
    // primaryColor: #1B3D6E  -> INDIGO DYE
    // primaryColor2: #0dbad2  -> Pacific Blue

    // secondaryColor: #f6b32f  -> honey yellow
    // secondaryColor2: #a2cf5f  ->  yellow green

    // neutral
    // text: #444444  -> onyx
    // text: #737373  -> sonic silver
    // text: #111111  -> rich black fogra 39
    // text: #ffffff  -> white
    // text: #1b3d6e  -> indigo dye -60%
    // text: #b6c5d1  -> beau blue
    //
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
    // fontFamily: "inh"
  },

  swiperWrapper:{
  backgroundColor: "white",
  height: 150
  },
  swiperItem:{

  }
  ,
  dots:{
    backgroundColor: "blue",
    width: 10,
    height: 10,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  }
  ,
  activeDots:{
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  }
});
