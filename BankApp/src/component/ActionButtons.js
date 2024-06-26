// src/components/ActionButtons.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const actionButtons = [
  { id: '1', title: 'Send', image: require('../../assets/send.png') }, // Add your image paths here
  { id: '2', title: 'Receive', image: require('../../assets/recieve.png') },
  { id: '3', title: 'Top Up', image: require('../../assets/topUp.png') },
  { id: '4', title: 'Loan', image: require('../../assets/loan.png') },
];

const ActionButtons = () => {
  return (
    <View style={styles.container}>
      {actionButtons.map(button => (
        <TouchableOpacity key={button.id} style={styles.button}>
          <Image source={button.image} style={styles.image} />
          <Text style={styles.buttonText}>{button.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    alignItems: 'center',
  },
  image: {
    width: 40, // Adjust the size as needed
    height: 40, // Adjust the size as needed
    marginBottom: 5, // Space between the image and text
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ActionButtons;
