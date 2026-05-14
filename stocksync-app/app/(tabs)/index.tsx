import {View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export default function HomeScreen() {
  return (
  <ScrollView style={styles.container}>

    <View style={styles.header}>
      <Text style={styles.title}>
        Stock Sync
      </Text>

      <Text style={styles.subtitle}>
        Inventory Dashboard
      </Text>
    </View>

    <View style={[styles.card, styles.cardBlue]}>

      <Ionicons
      name="cube-outline"
      size={28}
      color="#3B82F6"
      style={styles.cardIcon}
      />

      <Text style={styles.cardTitle}>
        245 Products
      </Text>

      <Text style={styles.cardDescription}>
        Active inventory items
      </Text>
    </View>

    <View style={[styles.card, styles.cardOrange]}>

      <Ionicons
      name="warning-outline"
      size={28}
      color="#F59E0B"
      style={styles.cardIcon}
      />
      

      <Text style={styles.cardTitle}>
        18 Low Stock
      </Text>

      <Text style={styles.cardDescription}>
        Needs restocking
      </Text>
    </View>

    <View style={[styles.card, styles.cardRed]}>

      <Ionicons
      name="close-circle-outline"
      size={28}
      color="#EF4444"
      style={styles.cardIcon}
      />
      

      <Text style={styles.cardTitle}>
        12 Out of Stock
      </Text>

      <Text style={styles.cardDescription}>
        Currently unavailable
      </Text>
    </View>

    <View style={[styles.card, styles.cardGreen]}>

      <Ionicons
      name="cash-outline"
      size={28}
      color="#10B981"
      style={styles.cardIcon}
      />
      
      <Text style={styles.cardTitle}>
        ₱24K Sales
      </Text>

      <Text style={styles.cardDescription}>
        Weekly revenue
      </Text>
    </View>

  
<Text style={styles.sectionTitle}>
  Recent Inventory</Text> 
    <View style={styles.activityCard}>
      <Text style={styles.activityTitle}>
        Wireless Mouse
      </Text>

      <Text style={styles.activitySubtitle}>
        45 units remaining
      </Text>
    </View>

    <View style={styles.activityCard}>
      <Text style={styles.activityTitle}>
        Mechanical Keyboard
      </Text>

      <Text style={styles.activitySubtitle}>
        12 units remaining
      </Text>
    </View>

  </ScrollView>
)};

const styles = StyleSheet.create({
  header: {
  marginBottom: 28,
  marginTop: 8,
  },

subtitle: {
  color: "#6B7280",
  marginTop: 15,
},
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F7FA",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 6,
  },

  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
  backgroundColor: "white",
  padding: 20,
  borderRadius: 20,
  marginBottom: 16,

  borderWidth: 1,
  borderStyle:"solid",
  borderColor: "#D1D5DB",

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.03,
  shadowRadius: 2,

  elevation: 1,
},

  cardBlue: {
  backgroundColor: "#EEF4FF",
},

cardOrange: {
  backgroundColor: "#FFF7ED",
},

cardRed: {
  backgroundColor: "#FEF2F2",
},

cardGreen: {
  backgroundColor: "#F0FDF4",
},

sectionTitle: {
  fontSize: 20,
  fontWeight: "bold",
  marginTop: 12,
  marginBottom: 16,
},

activityCard: {
  backgroundColor: "white",
  padding: 18,
  borderRadius: 18,
  marginBottom: 14,

  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.06,
  shadowRadius: 5,

  elevation: 2,
},

activityTitle: {
  fontSize: 16,
  fontWeight: "600",
},

activitySubtitle: {
  marginTop: 6,
  color: "gray",
},

cardTitle: {
  fontSize: 18,
  fontWeight: "700",
},

cardDescription: {
  marginTop: 8,
  color: "#6B7280",
  lineHeight: 20,
},

cardIcon: {
  marginBottom: 14,
},


});
