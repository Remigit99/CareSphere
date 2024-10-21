import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";

import FBook from "../../assets/images/facebook.png";
// import InstaG from "../../assets/images/instagram.jfif";
// import Twitter from "../../assets/images/x.png";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.signUpContainer}>
      <ScrollView>
        <View>
          <Text style={styles.signUp}>Sign Up</Text>
        </View>
        <form style={styles.signUpForm}>
          <View style={styles.inputGroup}>
            <TextInput style={styles.textInput} placeholder="Email" />
          </View>

          <View style={styles.inputGroup}>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.inputGroup}>
            <TextInput style={styles.textInput} placeholder="Phone Number" />
          </View>
          <View style={styles.ageGender}>
            <View style={styles.inputGroup}>
              <TextInput style={styles.textInput} placeholder="Age" />
            </View>

            <View style={styles.inputGroup}>
              <TextInput style={styles.textInput} placeholder="Gender" />
            </View>
          </View>

          <View>
            <TextInput style={styles.textInput} placeholder="" />
            <Text>I agree to the terms and conditions</Text>
          </View>

          <CustomButton title="Sign Up" />
        </form>

        <View style={styles.signUpBottom}>
          <View>
            <Text style={styles.already}>
              Already have an account?{" "}
              <Link href="/(auth)/sign-in" style={styles.toSignIn}>
                Sign In
              </Link>
            </Text>
          </View>

          <View>
            <Text>SignIn with your social account</Text>
            <View>
              <Image source={FBook} style={styles.socialImage} />
              {/* <Image source={InstaG} /> */}
              {/* <Image source={Twitter} /> */}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  signUpContainer: {
    marginHorizontal: 16,
  },
  signUp: {
    fontSize: 36,
    fontFamily: "QuicksandBold",
    marginVertical: 20,
    // marginHorizontal: 32
  },
  signUpForm: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginHorizontal: 32,
  },

  inputGroup: {
    paddingHorizontal: 10,
    paddingVertical: 16,
    backgroundColor: "#e1e6eb",
    borderRadius: 10,
  },
  textInput: {
    fontFamily: " QuicksandSemiBold",
  },
ageGender:{
  display:"flex",
  flexDirection:"row",
  justifyContent: "space-between",
  alignContent: "center",
  gap: 48,
  width: "contain"
},
  signUpBottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  socialImage: {
    width: 32,
    height: 32,
    borderRadius: 100,
  },
  already: {
    fontFamily: "QuicksandSemiBold",
    marginBottom: 10,
  },
  toSignIn: {
    fontFamily: "QuicksandBold",
    fontWeight: 700,
  },
});
