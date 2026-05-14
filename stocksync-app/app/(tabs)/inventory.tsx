import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function InventoryScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const [products, setProducts] = useState([
    {
      name: "Wireless Mouse",
      price: "₱899",
      stock: "In Stock",
    },
    {
      name: "Mechanical Keyboard",
      price: "₱2499",
      stock: "Low Stock",
    },
    {
      name: "USB-C Cable",
      price: "₱299",
      stock: "Out of Stock",
    },
  ]);

  const addProduct = () => {
    const newProduct = {
      name: productName,
      price: `₱${productPrice}`,
      stock:
        Number(productQuantity) <= 0
          ? "Out of Stock"
          : Number(productQuantity) <= 5
          ? "Low Stock"
          : "In Stock",
    };

    setProducts([...products, newProduct]);

    setProductName("");
    setProductPrice("");
    setProductQuantity("");

    setModalVisible(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Inventory</Text>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search products..."
          style={styles.searchInput}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <Ionicons name="add" size={28} color="white" />
        </TouchableOpacity>
      </View>

      {products.map((item, index) => (
        <View key={index} style={styles.productCard}>
          <View>
            <Text style={styles.productName}>
              {item.name}
            </Text>

            <Text style={styles.productPrice}>
              {item.price}
            </Text>
          </View>

          <View
            style={
              item.stock === "In Stock"
                ? styles.stockBadge
                : item.stock === "Low Stock"
                ? styles.lowStockBadge
                : styles.outBadge
            }
          >
            <Text
              style={
                item.stock === "In Stock"
                  ? styles.stockText
                  : item.stock === "Low Stock"
                  ? styles.lowStockText
                  : styles.outText
              }
            >
              {item.stock}
            </Text>
          </View>
        </View>
      ))}

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>

            <Text style={styles.modalTitle}>
              Add Product
            </Text>

            <TextInput
              placeholder="Product name"
              style={styles.modalInput}
              value={productName}
              onChangeText={setProductName}
            />

            <TextInput
              placeholder="Price"
              style={styles.modalInput}
              value={productPrice}
              onChangeText={setProductPrice}
            />

            <TextInput
              placeholder="Quantity"
              style={styles.modalInput}
              value={productQuantity}
              onChangeText={setProductQuantity}
            />

            <TouchableOpacity
              style={styles.saveButton}
              onPress={addProduct}
            >
              <Text style={styles.saveButtonText}>
                Save Product
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
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

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  searchInput: {
    flex: 1,
    backgroundColor: "white",
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    marginRight: 12,
  },

  addButton: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: "#2563EB",
    justifyContent: "center",
    alignItems: "center",
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

  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },

  modalContent: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  modalInput: {
    borderWidth: 1,
    borderColor: "#E5E7EB",
    borderRadius: 12,
    padding: 14,
    marginTop: 12,
  },

  saveButton: {
    backgroundColor: "#2563EB",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 18,
  },

  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});