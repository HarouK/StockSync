import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";

export default function InventoryScreen() {
  return (
    <ScrollView style={styles.container}>

      <Text style={styles.title}>
        Inventory
      </Text>

      <TextInput
        placeholder="Search products..."
        placeholderTextColor="#9CA3AF"
        style={styles.searchBar}
      />

      <View style={styles.productCard}>
        <View>
          <Text style={styles.productName}>
            Wireless Mouse
          </Text>

          <Text style={styles.productPrice}>
            ₱899
          </Text>
        </View>

        <View style={styles.stockBadge}>
          <Text style={styles.stockText}>
            In Stock
          </Text>
        </View>
      </View>

      <View style={styles.productCard}>
        <View>
          <Text style={styles.productName}>
            Mechanical Keyboard
          </Text>

          <Text style={styles.productPrice}>
            ₱2499
          </Text>
        </View>

        <View style={styles.lowStockBadge}>
          <Text style={styles.lowStockText}>
            Low Stock
          </Text>
        </View>
      </View>

      <View style={styles.productCard}>
        <View>
          <Text style={styles.productName}>
            USB-C Cable
          </Text>

          <Text style={styles.productPrice}>
            ₱299
          </Text>
        </View>

        <View style={styles.outBadge}>
          <Text style={styles.outText}>
            Out of Stock
          </Text>
        </View>
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
    marginBottom: 20,
  },

  searchBar: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 16,
    marginBottom: 20,

    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  productCard: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 20,
    marginBottom: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderWidth: 1,
    borderColor: "#E5E7EB",
  },

  productName: {
    fontSize: 18,
    fontWeight: "700",
  },

  productPrice: {
    marginTop: 6,
    color: "#6B7280",
  },

  stockBadge: {
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },

  stockText: {
    color: "#15803D",
    fontWeight: "600",
  },

  lowStockBadge: {
    backgroundColor: "#FEF3C7",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },

  lowStockText: {
    color: "#D97706",
    fontWeight: "600",
  },

  outBadge: {
    backgroundColor: "#FEE2E2",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999,
  },

  outText: {
    color: "#DC2626",
    fontWeight: "600",
  },
});