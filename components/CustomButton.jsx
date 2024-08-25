import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({ onPress, title, customBtnstyle, ...props }) => (
  <TouchableOpacity onPress={onPress} style={styles.customBtnstyle}>
    <Text style={styles.customBtnTextstyle}>{title}</Text>
  </TouchableOpacity>
);

export default CustomButton;

const styles = StyleSheet.create({
  customBtnstyle: {
    backgroundColor: "#1B3D6E",
    textAlign: "center",
    paddingVertical: 16,
    paddingHorizontal: 32,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 32,
    width: "max-content",
    marginVertical: 32,
    marginHorizontal: "auto",
  },
  customBtnTextstyle: {
    color: "white",
    fontFamily: "QuicksandSemiBold",
    fontSize: 20,
  },
});
