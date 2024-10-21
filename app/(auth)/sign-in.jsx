import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Button,
  ActivityIndicator,
  Alert,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";

import FBook from "../../assets/images/facebook.png";
// import InstaG from "../../assets/images/instagram.jfif";
// import Twitter from "../../assets/images/x.png";

const SignIn = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <SafeAreaView style={styles.signInContainer}>
      <ScrollView>
        <View style={styles.signInheader}>
          <Text style={styles.signWelcome}>Welcome</Text>
          <Text style={styles.signWelcome}>Back!</Text>
        </View>
        <form style={styles.signInForm}>
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

          <CustomButton
            title="Sign In"
            onPress={() => router.push("/(root)/(tabs)/home")}
          />
        </form>

        <Button
          title="Open Modal"
          color="green"
          onPress={() => setIsVisible(true)}
        />

        <Button
          title="Alert"
          color="red"
          onPress={() => Alert.alert("Invalid Password", [{ text: "Cancel" }])}
        />

        <Modal
          visible={isVisible}
          animationType="slide"
          presentationStyle="formSheet"
          onRequestClose={() => setIsVisible(false)}
        >
          <Text>This is a Modal</Text>
          <Button
            title="Close"
            color="red"
            onPress={() => setIsVisible(false)}
          />
        </Modal>
        <View style={styles.forgetPass}>
          <Link href="/forget-password" style={styles.forgetPassLink}>
            Forget Password?
          </Link>
        </View>

        <View style={styles.signInBottom}>
          <View>
            <Text style={styles.already}>
              Don't have an account?{" "}
              <Link href="/(auth)/sign-up" style={styles.toSignIn}>
                Sign Up
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
          {/* <ActivityIndicator size="large" color="midnightblue"  /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  signInContainer: {
    marginHorizontal: 16,
  },
  signInheader: {
    marginTop: 48,
    marginBottom: 20,
  },
  signWelcome: {
    fontSize: 36,
    fontFamily: "QuicksandBold",
    // marginHorizontal: 32
  },
  signInForm: {
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
  ageGender: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    gap: 48,
    width: "contain",
  },
  signInBottom: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  forgetPass: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 24,
  },
  forgetPassLink: {
    fontWeight: 800,
    fontFamily: "QuicksandSemiBold",
    fontSize: 16,
    color: "#1B3D6E",
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
