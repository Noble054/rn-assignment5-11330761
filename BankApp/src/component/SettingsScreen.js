// screens/SettingsScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Text, Switch } from 'react-native';
import { useTheme } from '../component/ThemeContext';

const settings = [
  { id: '1', title: 'Language' },
  { id: '2', title: 'Change Profile' },
  { id: '3', title: 'Password' },
  { id: '4', title: 'Privacy' },
  { id: '5', title: 'Contact Us' },
];

const SettingsScreen = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <View style={styles.container}>
      <FlatList
        data={settings}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.title}</Text>
          </View>
        )}
        ListFooterComponent={
          <View style={styles.switchContainer}>
            <Text>Dark Theme</Text>
            <Switch
              value={isDarkTheme}
              onValueChange={toggleTheme}
            />
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
});

export default SettingsScreen;
