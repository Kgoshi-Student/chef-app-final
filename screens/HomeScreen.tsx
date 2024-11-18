import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: number;
}

export default function HomeScreen({ navigation, route }: any) {
  const [menuArray, setMenuArray] = useState<MenuItem[]>(
    route.params?.menu || []
  );
  const [averages, setAverages] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const courses = ["Starter", "Main", "Dessert"];
    const averages = courses.reduce((acc, course) => {
      const items = menuArray.filter((item) => item.course === course);
      const avg = items.length
        ? items.reduce((sum, item) => sum + item.price, 0) / items.length
        : 0;
      acc[course] = avg;
      return acc;
    }, {} as { [key: string]: number });
    setAverages(averages);
  }, [menuArray]);

  return (
    <ScrollView style={styles.background}>
      <View>
        <Text style={styles.welcomeText}>Welcome to the Menu</Text>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Chef", { menu: menuArray })}
        >
          <Text style={styles.buttonText}> Go to Chef Screen</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Filter", { menu: menuArray })}
        >
          <Text style={styles.buttonText}> Go to Filter Screen</Text>
        </Pressable>

        {menuArray.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.dishNameText}> {item.dishName} </Text>
            <View style={styles.descriptionCard}>
              <Text style={styles.descriptionText}> {item.description} </Text>
            </View>
            <Text style={styles.courseText}> {item.course} </Text>
            <Text style={styles.priceText}> {item.price} </Text>
            <Text style={styles.lineBreak}>
              ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </Text>
          </View>
        ))}

        <View>
          {Object.entries(averages).map(([course, avg]) => (
            <Text key={course} style={styles.priceText}>
              Average Price for {course}'s: R{avg}
            </Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#d99e14",
  },

  selctionButtons: {
    flexDirection: "row",
    alignSelf: "center",
    marginVertical: 10,
  },

  textItalicCenter: {
    textAlign: "center",
    fontStyle: "italic",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  dishes: {
    textAlign: "center",
    fontFamily: "monospace",
  },

  inputBox: {
    borderRadius: 10,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
    fontStyle: "italic",
  },

  numberInputBox: {
    borderRadius: 10,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "black",
    fontWeight: "bold",
    alignSelf: "center",
    textAlign: "center",
  },

  lineBreak: {
    color: "white",
  },

  welcomeText: {
    fontFamily: "Niagara Solid",
    letterSpacing: 1.2,
    paddingTop: 60,
    color: "#5c543e",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    fontStyle: "italic",
  },

  button: {
    borderColor: "red",
    alignSelf: "center",
    height: 70,
    width: 200,
    backgroundColor: "#000000",
    borderRadius: 8,
    paddingTop: 20,
    marginTop: 10,
  },

  buttonText: {
    textAlign: "center",
    color: "#FFD700",
    fontStyle: "italic",
  },

  descriptionText: {
    textAlign: "center",
    color: "black",
    fontSize: 19,
    fontFamily: "sans-serif",
    fontStyle: "normal",
  },

  priceText: {
    textAlign: "center",
    color: "#9e0d0d",
    fontSize: 19,
    fontFamily: "sans-serif",
    fontStyle: "normal",
    fontWeight: "bold",
  },

  courseText: {
    textAlign: "center",
    color: "#FFD700",
    fontSize: 19,
    fontFamily: "sans-serif",
    fontStyle: "italic",
  },

  dishNameText: {
    textAlign: "center",
    color: "#FFD700",
    fontSize: 23,
    fontFamily: "Rage Italic",
    fontStyle: "normal",
    fontWeight: "bold",
  },

  card: {
    marginTop: 10,
    alignSelf: "center",
    borderWidth: 5,
    backgroundColor: "black",
    opacity: 0.7,
    padding: 10,
    marginBottom: 5,
  },

  descriptionCard: {
    marginTop: 10,
    alignSelf: "center",
    borderWidth: 5,
    backgroundColor: "white",
    padding: 10,
    marginBottom: 5,
  },
});