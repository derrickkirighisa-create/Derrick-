import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function App() {
  const [food, setFood] = useState("");
  const [foods, setFoods] = useState<string[]>([]);

  const addFood = () => {
    if (food.trim() !== "") {
      setFoods([...foods, food]);
      setFood("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🍔 Food Dashboard</Text>
      <Text style={styles.subtitle}>Welcome to your app</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Add Food</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter food name"
          value={food}
          onChangeText={setFood}
        />

        <TouchableOpacity style={styles.button} onPress={addFood}>
          <Text style={styles.buttonText}>Add Food</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Today's Food</Text>

        {foods.length === 0 ? (
          <Text style={styles.empty}>No food added yet.</Text>
        ) : (
          foods.map((item, index) => (
            <Text key={index} style={styles.foodItem}>
              🍴 {item}
            </Text>
          ))
        )}
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Dashboard</Text>
        <Text style={styles.info}>Total Foods: {foods.length}</Text>
        <Text style={styles.info}>Status: Active ✅</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#222",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  empty: {
    color: "#777",
  },
  foodItem: {
    fontSize: 17,
    marginBottom: 10,
  },
  info: {
    fontSize: 17,
    marginBottom: 8,
  },
});
