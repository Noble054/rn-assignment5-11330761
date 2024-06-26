// src/components/TransactionList.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, } from 'react-native';

const transactions = [
  { id: '1', name: 'Apple Store', amount: '-$204.00', image: require('../../assets/apple.png') },
  { id: '2', name: 'Sporty', amount: '-$12.00', image: require('../../assets/spotify.png') },
  { id: '3', name: 'Money Transfer', amount: '$300.00', image: require('../../assets/moneyTransfer.png') },
  { id: '4', name: 'Grocery', amount: '$120.00', image: require('../../assets/grocery.png') }, 
  { id: '4', name: 'Subscription', amount: '$678.00', image: require('../../assets/subscription.png') }, 

];

const TransactionList = () => {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Transactions</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={transactions}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Image source={item.image} style={styles.transactionImage} />
            <Text style={styles.transactionName}>{item.name}</Text>
            <Text style={styles.transactionAmount}>{item.amount}</Text>
          </View>
         
        )}
      />
    </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 16,
    color: '#007BFF',
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  transactionName: {
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionList;
