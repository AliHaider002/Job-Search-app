import React, { useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { SIZES, icons } from "../../../constants";
import { Image } from "react-native";
import { FlatList } from "react-native";

const jobTypes = ["Full-Time", "Part-Time", "Internship"];

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full-Time");
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 25,
          }}
        >
          Hello Ali Haider
        </Text>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Find Your Perfect Job
        </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value=""
            onChange={() => {}}
            placeholder="What you are looking for"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            alt="searchIcon"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)} onPress={()=>{
              setActiveJobType(item)
              router.push(`/search/${item}`)
            }}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal
        />
      </View>
    </View>
  );
};

export default Welcome;
