import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AnalyticsScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Analytics
      </Text>

      <View style={[styles.card, styles.blueCard]}>
        <Ionicons
          name="cube-outline"
          size={30}
          color="#2563EB"
        />

        <Text style={styles.cardTitle}>
          245 Products
        </Text>

        <Text style={styles.cardSubtitle}>
          Total inventory items
        </Text>
      </View>

      <View style={[styles.card, styles.greenCard]}>
        <Ionicons
          name="checkmark-circle-outline"
          size={30}
          color="#16A34A"
        />

        <Text style={styles.cardTitle}>
          210 In Stock
        </Text>

        <Text style={styles.cardSubtitle}>
          Available products
        </Text>
      </View>

      <View style={[styles.card, styles.orangeCard]}>
        <Ionicons
          name="warning-outline"
          size={30}
          color="#EA580C"
        />

        <Text style={styles.cardTitle}>
          18 Low Stock
        </Text>

        <Text style={styles.cardSubtitle}>
          Needs restocking
        </Text>
      </View>

      <View style={[styles.card, styles.redCard]}>
        <Ionicons
          name="close-circle-outline"
          size={30}
          color="#DC2626"
        />

        <Text style={styles.cardTitle}>
          12 Out of Stock
        </Text>

        <Text style={styles.cardSubtitle}>
          Unavailable products
        </Text>
      </View>

      <View style={[styles.card, styles.purpleCard]}>
        <Ionicons
          name="cash-outline"
          size={30}
          color="#7C3AED"
        />

        <Text style={styles.cardTitle}>
          ₱24,500 Sales
        </Text>

        <Text style={styles.cardSubtitle}>
          Weekly revenue
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },

  card: {
    backgroundColor: "white",
    borderRadius: 22,
    padding: 20,
    marginBottom: 18,

    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    marginTop: 16,
  },

  cardSubtitle: {
    marginTop: 8,
    color: "#6B7280",
    fontSize: 15,
  },

  blueCard: {
    backgroundColor: "#EFF6FF",
  },

  greenCard: {
    backgroundColor: "#F0FDF4",
  },

  orangeCard: {
    backgroundColor: "#FFF7ED",
  },

  redCard: {
    backgroundColor: "#FEF2F2",
  },

  purpleCard: {
    backgroundColor: "#F5F3FF",
  },
});