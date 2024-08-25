import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";
import { featuresData } from "../../constants/mockData/features";
import { router } from "expo-router";
import CustomButton from "../../components/CustomButton";

const Onboarding = () => {
  const [search, setSearch] = useState("");
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

const isLastSlide = activeIndex === featuresData.length - 1

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => router.replace("/(auth)/sign-up")}
          style={styles.skipBtn}
        >
          <Text style={styles.skipBtnText}>Skip</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Swiper
          style={styles.swiperWrapper}
          loop={true}
          ref={swiperRef}
          onIndexChanged={(index) => setActiveIndex(index)}
          autoplay={false}
          dot={<View style={styles.dots} />}
          activeDot={<View style={styles.activeDots} />}
        >
          {featuresData.map((item, index) => (
            <View key={index} style={styles.swiperItem}>
              <Image
                source={item.illustration}
                resizeMode="contain"
                style={styles.onboardingIllustrations}
              />
              <Text style={styles.onboardingIllustrationsText}>
                {item.title}
              </Text>
              <Text style={styles.onboardingdesc}>{item.desc}</Text>
            </View>
          ))}
        </Swiper>
      </View>
      <CustomButton title={isLastSlide ? "Get Started":"Next"} onPress={isLastSlide ? router.replace("/(auth)/sign-up"): swiperRef.current?.scrollBy(1) } />
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  skipBtn: {
    backgroundColor: "#b6c5d2",
    display: "flex",
    justifyContent: "flex-end",
    alignSelf: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 24,
    marginVertical: 32,
    marginRight: 32,
    borderRadius: 32,
  },
  skipBtnText: {
    color: "white",
    fontFamily: "QuicksandBold",
    fontSize: 18,
  },
  
  swiperWrapper: {
    // backgroundColor: "white",
    height: 450,
  },
  dots: {
    backgroundColor: "blue",
    width: 10,
    height: 10,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDots: {
    backgroundColor: "red",
    width: 10,
    height: 10,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },

  swiperItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  onboardingIllustrations: {
    width: 300,
    height: 250,
    resizeMode: "contain",
    borderRadius: 32,
  },
  onboardingIllustrationsText: {
    fontSize: 32,
    fontWeight: 600,
  },
  onboardingdesc:{
    textAlign: 'center',
    marginVertical: 20,
    marginHorizontal: 32,
    fontSize:18,
    fontFamily: "QuicksandMedium"
  },
  // CustomBtn:{
  //   textAlign: "center",
  //   paddingVertical: 16,
  //   paddingHorizontal:32 ,
  //   borderRadius: 32
  // }


});
