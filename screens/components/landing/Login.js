import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeColors } from "../../../theme";
import { useFonts } from "expo-font";

export default function Login(props) {
  const { loginHandler, emailTypeHandler } = props;

  const [loaded] = useFonts({
    PoppinsMedium: require("../../../assets/fonts/Poppins_medium.ttf"),
    PoppinsSemibold: require("../../../assets/fonts/Poppins_semibold.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Text
        className="text-white text-center mt-3 mb-3 text-lg"
        style={[styles.text, { fontFamily: "PoppinsMedium" }]}
      >
        Please enter your email
      </Text>
      <View style={styles.gradientContainer}>
        {/* Left inner border */}
        <LinearGradient
          colors={["rgba(0,0,0,0.10)", "rgba(0,0,0,0.10)", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0.5, y: 0 }}
          style={[styles.leftGradient]}
        />
        {/* Top inner border */}
        <LinearGradient
          colors={["rgba(0,0,0,0.05)", "rgba(0,0,0,0.10)", "transparent"]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.3 }}
          style={[styles.topGradient]}
        />
        <TextInput
          className="p-2 mb-3 rounded-md border-2 border-white text-lg text-white"
          style={[styles.input, styles.text, { fontFamily: "PoppinsMedium" }]}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="white"
          clearTextOnFocus={true}
          onChangeText={(text) => emailTypeHandler(text)}
        />
      </View>
      <Pressable
        className="bg-white p-3 rounded mb-14"
        onPress={loginHandler}
        style={styles.shadowbutton}
      >
        <Text
          className="text-center text-lg"
          style={[
            styles.red,
            styles.buttontext,
            { fontFamily: "PoppinsSemibold" },
          ]}
        >
          Login
        </Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  red: {
    color: ThemeColors.red,
  },
  leftGradient: {
    position: "absolute",
    top: 2,
    bottom: 14,
    left: 0.5,
    width: 26,
  },
  topGradient: {
    position: "absolute",
    top: 2,
    left: 2,
    right: 0,
    height: 30,
  },
  shadowbutton: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  input: {
    backgroundColor: "rgba(0,0,0,0.2)",
    textAlign: "center",
  },
});
