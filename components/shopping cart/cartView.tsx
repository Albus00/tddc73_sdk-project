import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const CartView = () => {
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Item 1', price: 10 },
    { id: '2', name: 'Item 2', price: 20 },
    { id: '3', name: 'Item 3', price: 30 },
  ]);

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const renderItem = ({ item }: { item: { id: string, name: string, price: number } }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <Button title="Remove" onPress={() => removeItem(item.id)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CartView;