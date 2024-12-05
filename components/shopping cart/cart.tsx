import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Cart = () => {
  const [wares, setWares] = useState(0);

  return (
    <View>
      <Ionicons name="cart" size={36} color="black" />
      {wares != 0 && <Text style={styles.waresIndicator}>{wares}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  waresIndicator: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 50,
    width: 20,
    height: 20,
    textAlign: 'center',
    lineHeight: 19,
  },
});

export default Cart;