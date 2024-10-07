import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Button,
} from "react-native";
import menuList from "../chef_menu/menu.json";
import  { RadioButton }  from 'react-native-paper';




export default function App() {
  interface menuItems {
    dishName: string;
    description: string;
    course: string;
    price: number;
  }

  let totalItems = 0

  const [menuArray, setMenuArray] = useState<menuItems[]>([]);
  const [inputDish, setInputDish] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const [inputPrice, setInputPrice] = useState("");

  const [selectedCourse, setSelectedCourse] = useState("")

  const handleCourse = (value:string) => {
    setSelectedCourse(value);
  };

  const addToArray = () => {

    const priceValue = Number(inputPrice);
    
    const newMenu: menuItems = {
      dishName: inputDish,
      description: inputDesc,
      course: selectedCourse,
      price: priceValue,
    };

    setMenuArray([...menuArray, newMenu]);

    setSelectedCourse("");
    setInputDesc("");
    setInputDish("");
    setInputPrice("");
  }


  return (
    <ScrollView style={styles.background}>
      <View >
        <Text style={styles.welcomeText}> Welcome to the Menu </Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={setInputDish}
          placeholder="Dish Name"
        ></TextInput>

        <TextInput
          style={styles.inputBox}
          onChangeText={setInputDesc}
          placeholder="Description"
        ></TextInput>

        {/* <TextInput
          style={styles.inputBox}
          onChangeText={setSelectedCourse}
          placeholder="Course"
        ></TextInput> */}

        <TextInput
           value={inputPrice}
           onChangeText={setInputPrice}
           keyboardType="numeric"
           placeholder="Price"
           style = {styles.inputBox}
        ></TextInput>

       
        <RadioButton.Group onValueChange={handleCourse} value={selectedCourse}>
          <View style={styles.selctionButtons}>
              <RadioButton value="Starter" />
              <Text style = {styles.textItalicCenter}>Starter</Text>
          </View>

          <View style={styles.selctionButtons}>
              <RadioButton value="Main" />
              <Text style = {styles.textItalicCenter}> Main </Text>
          </View>

          <View style={styles.selctionButtons}>
              <RadioButton value="Dessert" />
              <Text style = {styles.textItalicCenter}>Dessert</Text>
          </View>
        </RadioButton.Group>
        

        <Pressable style={styles.button} onPress={addToArray}>
          <Text style={styles.buttonText}> Add Menu Item</Text>
        </Pressable>

        <View style={styles.card}>
          {menuArray.map((item) => {
            ++totalItems
            console.log(totalItems)
            return (
              <>
                <Text style={styles.dishNameText}> {item.dishName} </Text>
                <View style = {styles.descriptionCard}>
                  <Text style={styles.descriptionText}> {item.description} </Text>
                </View>
                <Text style={styles.courseText}> {item.course} </Text>
                <Text style={styles.priceText}> {item.price} </Text>
                <Text style={styles.lineBreak}>~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</Text>
              </>
            );
          })}
        </View>

        <View style={styles.card}>
          <Text style = {styles.buttonText}> Total Number of Items on the menu: {totalItems}</Text>
        </View>

      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#d99e14",
  },

  selctionButtons: { 
    flexDirection: 'row', 
    alignSelf: 'center',
    marginVertical: 10 
  },

  textItalicCenter: {
    textAlign: 'center',
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

  dishNameText:{
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
