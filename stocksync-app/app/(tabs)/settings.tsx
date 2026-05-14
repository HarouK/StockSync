import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#121212" : "#F3F4F6" },
      ]}
    >
      <Text
        style={[
          styles.title,
          { color: darkMode ? "white" : "black" },
        ]}
      >
        Settings
      </Text>

      <View
        style={[
          styles.profileCard,
          { backgroundColor: darkMode ? "#1E1E1E" : "white" },
        ]}
      >
        <Ionicons
          name="person-circle-outline"
          size={70}
          color="#2563EB"
        />

        <Text
          style={[
            styles.profileName,
            { color: darkMode ? "white" : "black" },
          ]}
        >
          StockSync Admin
        </Text>

        <Text style={styles.profileEmail}>
          admin@stocksync.com
        </Text>
      </View>

      <View
        style={[
          styles.settingCard,
          { backgroundColor: darkMode ? "#1E1E1E" : "white" },
        ]}
      >
        <View>
          <Text
            style={[
              styles.settingTitle,
              { color: darkMode ? "white" : "black" },
            ]}
          >
            Notifications
          </Text>

          <Text style={styles.settingSubtitle}>
            Enable stock alerts
          </Text>
        </View>

        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
        />
      </View>

      <View
        style={[
          styles.settingCard,
          { backgroundColor: darkMode ? "#1E1E1E" : "white" },
        ]}
      >
        <View>
          <Text
            style={[
              styles.settingTitle,
              { color: darkMode ? "white" : "black" },
            ]}
          >
            Dark Mode
          </Text>

          <Text style={styles.settingSubtitle}>
            Toggle app theme
          </Text>
        </View>

        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      <View
        style={[
          styles.settingCard,
          { backgroundColor: darkMode ? "#1E1E1E" : "white" },
        ]}
      >
        <View>
          <Text
            style={[
              styles.settingTitle,
              { color: darkMode ? "white" : "black" },
            ]}
          >
            App Version
          </Text>

          <Text style={styles.settingSubtitle}>
            Version 1.0.0
          </Text>
        </View>

        <Ionicons
          name="information-circle-outline"
          size={24}
          color="gray"
        />
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  profileCard: {
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
  },

  profileName: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
  },

  profileEmail: {
    color: "#6B7280",
    marginTop: 6,
  },

  settingCard: {
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  settingTitle: {
    fontSize: 17,
    fontWeight: "600",
  },

  settingSubtitle: {
    marginTop: 4,
    color: "#6B7280",
  },

  logoutButton: {
    backgroundColor: "#DC2626",
    padding: 18,
    borderRadius: 18,
    alignItems: "center",
    marginTop: 20,
  },

  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "700",
  },
});