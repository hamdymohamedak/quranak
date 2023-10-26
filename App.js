import React, { Suspense } from "react";
import { StatusBar, View, StyleSheet, ActivityIndicator } from "react-native";
import Home from "./components/Home";
import Quran from "./components/Quran";
import Hadith from "./components/Hadith";
import Surah from "./components/Surah";
import Fehres from "./components/Fehres";
import Kids from "./components/Kids";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Suspense fallback={<ActivityIndicator size="large" color="black" />}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group
              screenOptions={{ headerStyle: { backgroundColor: "#012937" } }}
            >
              <Stack.Screen
                options={{
                  title: "Home",
                  headerTitleStyle: { color: "white", fontWeight: "bold" },
                }}
                name="Home"
                component={Home}
              />
              <Stack.Screen
                options={{
                  title: "Quran",
                  headerTitleStyle: { color: "white", fontWeight: "bold" },
                  headerTintColor: "white", // Set the back arrow color to white
                }}
                name="Quran"
                component={Quran}
              />
              <Stack.Screen
                options={{
                  title: "Tafser",
                  headerTitleStyle: { color: "white", fontWeight: "bold" },
                  headerTintColor: "white",
                }}
                name="Hadith"
                component={Hadith}
              />
              <Stack.Screen
                options={{
                  title: "Surah",
                  headerTitleStyle: { color: "white", fontWeight: "bold" },
                  headerTintColor: "white",
                }}
                name="Surah"
                component={Surah}
              />
              <Stack.Screen
                options={{
                  title: "Fehres",
                  headerTitleStyle: { color: "white", fontWeight: "bold" },
                  headerTintColor: "white",
                }}
                name="Fehres"
                component={Fehres}
              />
              <Stack.Screen
                options={{
                  title: "Kids",
                  headerTitleStyle: { color: "white", fontWeight: "bold" },
                  headerTintColor: "white",
                }}
                name="Kids"
                component={Kids}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Suspense>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
