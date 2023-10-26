import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

const Ahhades = () => {
  const [text, setText] = useState("");
  const [tafseer, setTafseer] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsLoading(true); // Set isLoading to true before making the API request
    fetch(`https://api-quran.cf/quransql/index.php?text=${text}&type=tafser1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          setTafseer(data.result[0]);
        } else {
          setTafseer("لم يتم العثور على تفسير لهذه الكلمة");
        }
      })
      .catch((error) => console.error("حدث خطأ: ", error))
      .finally(() => setIsLoading(false)); // Set isLoading to false after the request is complete
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>تفسير</Text>
      <TextInput
        onChangeText={(text) => setText(text)}
        style={styles.textInput}
        placeholder="اكتب الكلمة"
      />
      <Button title="ابحث" onPress={handleSearch} />
      {isLoading ? ( // Conditional rendering based on isLoading
        <ActivityIndicator size={"large"} />
      ) : (
        <Text style={styles.tafseer}>{tafseer}</Text>
      )}
      <Text style={{ marginTop: 30, fontWeight: "bold" }}>
        لا تنسنا من دعوة صالحة بظهر الغيب
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    width: "60%",
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  tafseer: {
    fontSize: 18,
    marginTop: 20,
    textAlign: "center",
  },
});

export default Ahhades;
