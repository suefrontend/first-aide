import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { ThemeColors } from "../../../theme";
import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "expo-font";

export default function Register(props) {
  const {
    switchHandler,
    registerHandler,
    nameTypeHandler,
    emailTypeHandler,
    cityTypeHandler,
  } = props;

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
        className="text-white text-center mt-4 mb-3 text-base"
        style={[styles.buttontext, { fontFamily: "PoppinsMedium" }]}
      >
        Please enter your name, email and city
      </Text>
      <View style={styles.gradientContainer}>
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
          style={[styles.input, styles.text, { fontFamily: "PoppinsSemibold" }]}
          placeholder="name"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="white"
          onChangeText={(text) => nameTypeHandler(text)}
        />
      </View>
      {/* Left inner border */}
      <View style={styles.gradientContainer}>
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
          style={[styles.input, styles.text, { fontFamily: "PoppinsSemibold" }]}
          placeholder="email"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="white"
          onChangeText={(text) => emailTypeHandler(text)}
        />
      </View>
      <View style={styles.gradientContainer}>
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
          style={[styles.input, styles.text, { fontFamily: "PoppinsSemibold" }]}
          placeholder="city"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="white"
          onChangeText={(text) => cityTypeHandler(text)}
        />
      </View>
      <Pressable
        onPress={registerHandler}
        className="bg-white p-3 rounded mb-4"
        style={styles.shadowbutton}
      >
        <Text
          className="text-center font-bold text-lg"
          style={[
            styles.red,
            styles.buttontext,
            { fontFamily: "PoppinsSemibold" },
          ]}
        >
          Sign Up
        </Text>
      </Pressable>

      <Pressable onPress={switchHandler}>
        <Text
          className="text-center text-white underline"
          style={[
            styles.shadowtext,
            styles.text,
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
  input: {
    backgroundColor: "rgba(0,0,0,0.15)",
    textAlign: "center",
  },
  shadowtext: {
    textShadowColor: "rgba(0, 0, 0, 0.2)",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    textShadowRadius: 2,
  },
  shadowbutton: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
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
});
