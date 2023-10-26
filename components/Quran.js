import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  ActivityIndicator,
} from "react-native";
import QuranJson from "./Quran.json";

const Quran = () => {
  const [quranData, setQuranData] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Array.isArray(QuranJson.quranar)) {
      setQuranData(QuranJson.quranar);
    }
    setIsLoading(false);
  }, []);

  const handleChangeTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const containerStyle = {
    ...styles.container,
    backgroundColor: isDarkMode ? "#0F0F0F" : "white",
  };

  const textStyle = {
    fontSize: 18,
    fontWeight: "500",
    color: isDarkMode ? "white" : "#0F0F0F",
  };

  return (
    <ScrollView style={{ backgroundColor: isDarkMode ? "white" : "#0F0F0F" }}>
      {isLoading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <View>
          <Button
            title={isDarkMode ? "Light Mode" : "Dark Mode"}
            onPress={handleChangeTheme}
          />
          <View style={containerStyle}>
            {quranData.map((data, index) => (
              <View style={styles.item} key={index}>
                <Text style={styles.title}>{data.soraName}</Text>
                <Text style={textStyle}>{data.QuranarText}</Text>
              </View>
            ))}
            <Text
              style={{
                marginTop: 30,
                fontWeight: "bold",
                color: isDarkMode ? "white" : "#0F0F0F",
              }}
            >
              لا تنسنا من دعوة صالحة بظهر الغيب
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  item: {
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Quran;
