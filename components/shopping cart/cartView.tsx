import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartItem } from './cart';

type Props = {
  items: CartItem[];
  removeItem: (id: string) => void;
};

const CartView = (props: Props) => {

  const renderItem = ({ item }: { item: { id: string, name: string, price: number } }) => (
    <View style={[styles.item, { alignItems: 'center' }]}>
      <Text style={{ flex: 1 }}>{item.name}</Text>
      <Text>${item.price}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => props.removeItem(item.id)}>
        <Ionicons name="trash" size={18} color="white" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'rgba(0, 0, 0, 0.25)'} barStyle={'dark-content'} />
      <Text style={styles.title}>Shopping Cart</Text>
      {props.items.length === 0 && <Text style={{ textAlign: 'center' }}>Your cart is empty</Text>}
      <FlatList
        data={props.items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <View style={{ marginTop: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 18 }}>
          Total: ${props.items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // For Android shadow
  },
  outerContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    gap: 5,
  },
  removeButton: {
    margin: 5,
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
});

export default CartView;
