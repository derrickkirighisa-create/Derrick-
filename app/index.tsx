import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function App() {
  const [food, setFood] = useState("");
  const [foods, setFoods] = useState<string[]>([]);

  const addFood = () => {
    if (food.trim() === "") return;

    setFoods([...foods, food.trim()]);
    setFood("");
  };

  const removeFood = (index: number) => {
    setFoods(foods.filter((_, i) => i !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🍽️ Food Dashboard</Text>
      <Text style={styles.subtitle}>Manage your favourite foods</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          placeholder="Enter food name"
          value={food}
          onChangeText={setFood}
        />

        <TouchableOpacity style={styles.addButton} onPress={addFood}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>My Foods</Text>

      <ScrollView>
        {foods.length === 0 ? (
          <Text style={styles.empty}>No foods added yet.</Text>
        ) : (
          foods.map((item, index) => (
            <View style={styles.foodItem} key={index}>
              <Text style={styles.foodText}>🍴 {item}</Text>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeFood(index)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 25,
  },

  inputRow: {
    flexDirection: "row",
    marginBottom: 30,
  },

  input: {
    flex: 1,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },

  addButton: {
    marginLeft: 10,
    backgroundColor: "#222",
    paddingHorizontal: 20,
    justifyContent: "center",
    borderRadius: 10,
  },

  addText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },

  empty: {
    color: "#777",
    fontSize: 16,
  },

  foodItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  foodText: {
    fontSize: 17,
    fontWeight: "500",
  },

  deleteButton: {
    paddingVertical: 7,
    paddingHorizontal: 10,
    backgroundColor: "#eee",
    borderRadius: 8,
  },

  deleteText: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
