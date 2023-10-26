import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import bg from "../assets/bgHome.jpeg";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
          position: "absolute",
        }}
        source={bg}
      />
      <View style={styles.buttonContainer}>
        <Text style={styles.btn} onPress={() => navigation.navigate("Quran")}>
          قران <Feather name="book-open" size={24} color="gold" />
        </Text>
        <Text style={styles.btn} onPress={() => navigation.navigate("Hadith")}>
          تفسير
          <AntDesign name="book" size={24} color="gold" />
        </Text>
        <Text style={styles.btn} onPress={() => navigation.navigate("Surah")}>
          القران بالانجليزيه 
          <AntDesign name="book" size={24} color="gold" />
        </Text>
        <Text style={styles.btn} onPress={() => navigation.navigate("Fehres")}>
         الفهرس
         <Feather name="book-open" size={24} color="gold" />
        </Text>
        <Text style={styles.btn} onPress={() => navigation.navigate("Kids")}>
         ركن الاطفال
         <Feather name="book-open" size={24} color="gold" />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  btn: {
    backgroundColor: "white",
    color: "black",
    width: "70%",
    height: "10%",
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 5,
    fontSize: 20,
    fontWeight: "bold",
    elevation: 20,
    shadowColor: "white",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default Home;
