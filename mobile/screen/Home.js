import React, { useState } from "react";
import { TextInput, Text, FAB } from "react-native-paper";

import {
  Button,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import NormalCard from "../components/NormalCard";
import Data from "../data/dummyData";
import {
  dlManelToUnicode,
  singlishToUnicode,
  unicodeToDlManel,
} from "sinhala-unicode-coverter";
import Modal from "../components/Modal";;
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [modelVisible, setModelVisible] = useState(false);

  const data = Data;

  // Filter the data based on the search query
  const filteredData = data.filter((item) =>
    item.topic.includes(unicodeToDlManel(searchQuery))
  );

  return (
    <View style={{ flex: 1 }}>
      {!modelVisible ? (
        <View>
          
          <TextInput
            placeholder="Search by topic..."
            onChangeText={setSearchQuery}
            value={searchQuery}
            style={styles.searchBar}
            left={<TextInput.Icon icon="text-box-search-outline" />}
          />

          <ScrollView>
            <View style={styles.home}>
              {/* Render the filtered data */}
              {filteredData.map((value, index) => (
                <NormalCard key={index} data={value} />
              ))}
            </View>
          </ScrollView>
          <FAB
            icon="lead-pencil"
            style={styles.fab}
            onPress={() => setModelVisible(true)}
          />
        </View>
      ) : (
        <Modal visibleModel={modelVisible} setVisibleModel={setModelVisible} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    alignItems: "center",
    marginBottom: 70,
  },
  searchBar: {
    backgroundColor: "white",
  },
  fab: {
    backgroundColor: "#e3fff6",
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    marginBottom: 70,
  },
});
