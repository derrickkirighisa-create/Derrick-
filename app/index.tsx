impexport default function Dashboard(){return <View style={s.container}><Text style={s.eyebrow}>OVERVIEW</Text><Text style={s.title}>Dashboard</Text><Text style={s.subtitle}>Your workspace at a glance.</Text><View style={s.grid}>{widgets.map(w=><View key={w.id} style={s.card}><View style={s.badge}><Text style={s.badgeText}>{w.id}</Text></View><Text style={s.cardTitle}>{w.title}</Text><Text style={s.cardText}>Functionality coming later</Text></View>)}</View></View>}
ort { StyleSheet, Text, View } from 'react-native';
const widgeteximport React, { useState } from "react";
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
    setFoods([...foods, food]);
    setFood("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🍽️ Nikila</Text>

      <Text style={styles.subtitle}>
        Rekodi chakula unachokula kila siku
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Andika chakula ulichokula..."
        value={food}
        onChangeText={setFood}
      />

      <TouchableOpacity style={styles.button} onPress={addFood}>
        <Text style={styles.buttonText}>+ Ongeza Chakula</Text>
      </TouchableOpacity>

      <Text style={styles.heading}>Chakula nilichokula</Text>

      {foods.length === 0 ? (
        <Text style={styles.empty}>
          Bado hujaongeza chakula.
        </Text>
      ) : (
        foods.map((item, index) => (
          <View style={styles.foodCard} key={index}>
            <Text style={styles.foodText}>
              {index + 1}. {item}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    paddingTop: 60,
    backgroundColor: "#f5f7fa",
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 17,
    textAlign: "center",
    color: "#666",
    marginBottom: 30,
  },

  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    padding: 15,
    fontSize: 16,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#222",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 35,
    marginBottom: 15,
  },

  empty: {
    color: "#777",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },

  foodCard: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#eee",
  },

  foodText: {
    fontSize: 17,
  },
}); port default function Dashboard(){return <View style={s.container}><Text style={s.eyebrow}>OVERVIEW</Text><Text style={s.title}>Dashboard</Text><Text style={s.subtitle}>Your workspace at a glance.</Text><View style={s.grid}>{widgets.map(w=><View key={w.id} style={s.card}><View style={s.badge}><Text style={s.badgeText}>{w.id}</Text></View><Text style={s.cardTitle}>{w.title}</Text><Text style={s.cardText}>Functionality coming later</Text></Views=[{id:1,title:'Widget 1'},{id:2,title:'Widget 2'},{id:3,title:'Widget 3'}];
export default function Dashboard(){return <View style={s.container}><Text style={s.eyebrow}>OVERVIEW</Text><Text style={s.title}>Dashboard</Text><Text style={s.subtitle}>Your workspace at a glance.</Text><View style={s.grid}>{widgets.map(w=><View key={w.id} style={s.card}><View style={s.badge}><Text style={s.badgeText}>{w.id}</Text></View><Text style={s.cardTitle}>{w.title}</Text><Text style={s.cardText}>Functionality coming later</Text></View>)}</View></View>}
const s=StyleSheet.create({container:{flex:1,padding:24,backgroundColor:'#F8FAFC'},eyebrow:{fontSize:12,fontWeight:'800',letterSpacing:1.5,color:'#64748B',marginTop:18},title:{fontSize:34,fontWeight:'800',color:'#0F172A',marginTop:6},subtitle:{fontSize:15,color:'#64748B',marginTop:6,marginBottom:24},grid:{gap:14},card:{backgroundColor:'#FFF',borderRadius:20,padding:20,borderWidth:1,borderColor:'#E2E8F0',minHeight:145},badge:{width:34,height:34,borderRadius:17,backgroundColor:'#111827',alignItems:'center',justifyContent:'center',marginBottom:16},badgeText:{color:'#FFF',fontWeight:'800'},cardTitle:{fontSize:19,fontWeight:'800',color:'#0F172A'},cardText:{fontSize:14,color:'#64748B',marginTop:7}});
export default function Dashboard(){return <View style={s.container}><Text style={s.eyebrow}>OVERVIEW</Text><Text style={s.title}>Dashboard</Text><Text style={s.subtitle}>Your workspace at a glance.</Text><View style={s.grid}>{widgets.map(w=><View key={w.id} style={s.card}><View style={s.badge}><Text style={s.badgeText}>{w.id}</Text></View><Text style={s.cardTitle}>{w.title}</Text><Text style={s.cardText}>Functionality coming later</Text></View>)}</View></View>}
