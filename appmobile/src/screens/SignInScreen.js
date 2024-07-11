import React, { useState } from "react";
import { View, Text, Image, useWindowDimensions, StyleSheet, TextInput } from "react-native";
import LOGO from "../../assets/android-logo.png";

const SignInScreen = () => {
  const { height } = useWindowDimensions();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.root}>
      <Image source={LOGO} style={[styles.logo]} resizeMode="contain" />
      <View style={styles.inputsContainer}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
    height: "100%",
    width: "100%",
    display: "flex",
  },
  logo: {
    flex: 1,
    width: "70%",
    maxWidth: 300,
    maxHeight: 200,
  },
  text: {
    textAlign: "center",
    fontSize: "large",
    fontWeight: "bold",
    padding: 20
  },
  inputsContainer: {
    flex: 3,
    width: "100%",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default SignInScreen;
