import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import quranForKids from "./Quran.json"; // Correct the path to your JSON file

const Kids = () => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    // Filter the data based on the length of the 'QuranarText' property
    const filteredItems = quranForKids.quranar.filter(
      (item) => item.QuranarText.length <= 374
    );
    setFilteredData(filteredItems);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.alert}>
          هذا الركن مخصص للاطفال يحتوي علي السور القصيره في القران الكريم لتكون
          سهله الحفظ للاطفال
        </Text>
        <View>
          {filteredData.map((item, index) => (
            <View key={index}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                {item.soraName}
              </Text>
              <Text style={{fontSize:15,fontWeight:"500"}}>{item.QuranarText}</Text>
            </View>
          ))}
        </View>
      <Text style={{marginTop:30,fontWeight:"bold"}}>لا تنسنا من دعوة صالحة بظهر الغيب</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  alert: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Kids;
