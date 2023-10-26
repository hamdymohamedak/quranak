import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Suspense } from "react";
const Quran = () => {
  const [quran, setQuran] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cachedData = await AsyncStorage.getItem("quranData");

        if (cachedData) {
          setQuran(JSON.parse(cachedData));
          setIsLoading(false);
        } else {
          const response = await fetch(
            "https://api.alquran.cloud/v1/quran/en.asad"
          );
          const json = await response.json();
          setQuran(json.data.surahs);
          setIsLoading(false);

          await AsyncStorage.setItem(
            "quranData",
            JSON.stringify(json.data.surahs)
          );
        }
      } catch (error) {
        console.error("Error:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const styles = StyleSheet.create({
    loadingContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      width: "100%",
      marginBottom: 30,
      marginTop: 30,
    },
  });

  return (
    <ScrollView>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <Suspense fallback={<ActivityIndicator size="large" color="black" />}>
          <View style={styles.container}>
            {quran.map((data, index) => (
              <View key={data.number}>
                <Text style={{ fontSize: 20 }}>
                  {data.name}
                  <Text> {data.englishName} </Text>
                </Text>
                {data.ayahs.map((ayah, ayahIndex) => (
                  <Text style={{ padding: 15 }} key={ayahIndex}>
                    {" "}
                    {ayah.text}{" "}
                  </Text>
                ))}
                <Text style={{ fontWeight: "bold" }}>
                  English Name Translation: {data.englishNameTranslation}{" "}
                </Text>
                <Text
                  style={{
                    borderBottomColor: "black",
                    borderWidth: 2,
                    borderTopColor: "transparent",
                    borderLeftColor: "transparent",
                    borderRightColor: "transparent",
                    width: "50%",
                    textAlign: "center",
                    marginBottom: 20,
                  }}
                >
                  ترتيب السوره: {index + 1}{" "}
                </Text>
              </View>
            ))}
          </View>
        </Suspense>
      )}
    </ScrollView>
  );
};
export default Quran;
