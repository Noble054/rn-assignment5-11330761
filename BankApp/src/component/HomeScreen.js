// screens/HomeScreen.js
import React from 'react';
import styled, { useTheme } from 'styled-components/native';
import { View, Text, FlatList, StyleSheet, Image,ScrollView } from 'react-native';
import ActionButtons from '../component/ActionButtons';
import TransactionList from '../component/TransactionList';


const HomeScreen = () => {
  
  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('../../assets/profile.png')} style={styles.profileImage} />
        <Text style={styles.welcomeText}>Welcome, Albert</Text>
      </View>
      <Image source={require('../../assets/Card.png')} style={styles.cardImage} />
      <ActionButtons />
      <TransactionList />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  welcomeText: {
    marginLeft: 10,
    fontSize: 18,
  },
  cardImage: {
    width: '100%',
    height: 150,
    marginVertical: 20,
    borderRadius: 15, // Added borderRadius property
    overflow: 'hidden'
  },
});

export default HomeScreen;
