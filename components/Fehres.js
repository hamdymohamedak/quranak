import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SelectDropdown from "react-native-select-dropdown";
const Fehres = () => {
  const [FehresData, setFehresData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState("ar");

  useEffect(() => {
    setIsLoading(true); // Set isLoading to true before fetching new data

    fetch(`https://www.mp3quran.net/api/v3/suwar?language=${selectedLanguage}`)
      .then((res) => res.json())
      .then((data) => {
        setFehresData(data.suwar);
        setIsLoading(false);

        // Save the fetched data to AsyncStorage
        AsyncStorage.setItem("fehresData", JSON.stringify(data.suwar));
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  }, [selectedLanguage]);

  const languages = [
    "ar",
    "eng",
    "fr",
    "ru",
    "de",
    "es",
    "tr",
    "cn",
    "th",
    "ur",
    "bn",
    "bs",
    "ug",
    "fa",
    "tg",
    "ml",
    "tl",
    "id",
    "pt",
    "ha",
    "sw",
  ];

  return (
    <ScrollView>
      <SelectDropdown
        data={languages}
        defaultButtonText="لغه عرض اسم السوره"
        onSelect={(selectedItem, index) => {
          setSelectedLanguage(selectedItem);
        }}
      />
      {isLoading ? (
        <View style={styles.Container}>
          <ActivityIndicator size={"large"} color={"black"} />
        </View>
      ) : (
        <View style={styles.Container}>
          {FehresData.map((fehres) => (
            <View style={styles.parent} key={fehres.id}>
              <Text style={{ fontSize: 25 }}> اسم السوره: {fehres.name}</Text>
              <Text style={{ fontSize: 25 }}>
                <Text style={{ fontWeight: "bold" }}>اول</Text> صفحه لها رقم:
                {fehres.start_page}
              </Text>
              <Text style={{ fontSize: 25 }}>
                <Text style={{ fontWeight: "bold" }}>اخر</Text> صفحه لها رقم:
                {fehres.end_page}{" "}
              </Text>
            </View>
          ))}
        </View>
      )}
      <Text style={{ marginTop: 30, fontWeight: "bold" }}>
        لا تنسنا من دعوة صالحة بظهر الغيب
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  parent: {
    marginBottom: 20,
    borderWidth: 10,
    borderBottomColor: "black",
    borderTopColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
  },
});

export default Fehres;
