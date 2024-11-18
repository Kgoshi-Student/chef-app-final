import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Button, Pressable } from "react-native";

interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: number;
}

export default function FilterScreen({ navigation, route }: any) {
  const [selectedCourse, setSelectedCourse] = useState("Starter");
  const menuArray: MenuItem[] = route.params?.menu || [];

  
  }
