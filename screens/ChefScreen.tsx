import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View, Button, Pressable } from "react-native";
import { RadioButton } from "react-native-paper";

interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: number;
}

export default function ChefScreen({ navigation, route }: any) {
  const [menuArray, setMenuArray] = useState<MenuItem[]>(route.params?.menu || []);
  const [inputDish, setInputDish] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const addMenuItem = () => {
    const newItem: MenuItem = { dishName: inputDish, description: inputDesc, course: selectedCourse, price: parseFloat(inputPrice) };
    setMenuArray([...menuArray, newItem]);
    setInputDish("");
    setInputDesc("");
    setInputPrice("");
    setSelectedCourse("");
  };

  const removeMenuItem = (index: number) => {
    setMenuArray(menuArray.filter((_, i) => i !== index));
  };

  return (
    <ScrollView style={styles.background}>
      <View>
        <Text style={styles.welcomeText}>Chef Screen</Text>
        <TextInput value={inputDish} onChangeText={setInputDish} placeholder="Dish Name" style={styles.inputBox} />
        <TextInput value={inputDesc} onChangeText={setInputDesc} placeholder="Description" style={styles.inputBox} />
        <TextInput value={inputPrice} onChangeText={setInputPrice} keyboardType="numeric" placeholder="Price" style={styles.inputBox} />
        <RadioButton.Group onValueChange={setSelectedCourse} value={selectedCourse}>
          {["Starter", "Main", "Dessert"].map(course => (
            <View key={course} style={styles.selctionButtons}>
              <RadioButton value={course} />
              <Text>{course}</Text>
            </View>
          ))}
        </RadioButton.Group>
        <Pressable
          style={styles.button}
        >
          <Text style={styles.buttonText} onPress={addMenuItem}> Add Dish </Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Home", { menu: menuArray })}
        >
          <Text style={styles.buttonText}> Back to Home</Text>
        </Pressable>

        {menuArray.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.dishNameText}> {item.dishName} </Text>
            <Button title="Remove This Dish" onPress={() => removeMenuItem(index)} />
          </View>
        ))}
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
