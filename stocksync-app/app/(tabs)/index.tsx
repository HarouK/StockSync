import {View, Text, StyleSheet, ScrollView } from "react-native";

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

    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        245 Products
      </Text>

      <Text style={styles.cardDescription}>
        Active inventory items
      </Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        18 Low Stock
      </Text>

      <Text style={styles.cardDescription}>
        Needs restocking
      </Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        12 Out of Stock
      </Text>

      <Text style={styles.cardDescription}>
        Currently unavailable
      </Text>
    </View>

    <View style={styles.card}>
      <Text style={styles.cardTitle}>
        ₱24K Sales
      </Text>

      <Text style={styles.cardDescription}>
        Weekly revenue
      </Text>
    </View>

  
<Text style={styles.sectionTtitle}>
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
  borderColor: "#E5E7EB",

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
  backgroundColor: "#E8F1FF",
},

cardOrange: {
  backgroundColor: "#FFF4E5",
},

cardRed: {
  backgroundColor: "#FFECEC",
},

cardGreen: {
  backgroundColor: "#EAF7EE",
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
  fontWeight: "bold",
},

cardDescription: {
  marginTop: 8,
  color: "gray",
  lineHeight: 20,
},


});
