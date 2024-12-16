import React, { useState } from "react";
import { Text, View, StatusBar, Button } from "react-native";
import styles from "./styles";
import Cart from "@/components/shopping cart/cart";
import { CartItem } from "@/components/shopping cart/cart";

export default function Index() {

  const [items, setItems] = useState<CartItem[]>([
    { id: '1', name: 'Item 1', price: 10 },
    { id: '2', name: 'Item 2', price: 20 },
    { id: '3', name: 'Item 3', price: 300 },
  ]);

  const addItemToCart = (item: CartItem) => {
    setItems([...items, item]);
  }

  const removeItemFromCart = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  }

  const randomId = () => Math.floor(Math.random() * 500).toString();

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerStyle}>
        <Text style={styles.h1}>SHOP</Text>
        <Cart {...{ items: items, addItemToCart, removeItemFromCart }} />
      </View>
      <StatusBar backgroundColor={"#F2F0EF"} barStyle={'dark-content'} />
      <View style={styles.container}>
        <View style={styles.productList}>
          {[
            { id: randomId(), name: 'Item 1', price: 40 },
            { id: randomId(), name: 'Item 2', price: 50 },
            { id: randomId(), name: 'Item 3', price: 60 },
            { id: randomId(), name: 'Item 4', price: 70 },
          ].map((product) => (
            <View key={product.id} style={styles.productItem}>
              <Text>{product.name}</Text>
              <Text>${product.price}</Text>
              <Button
                title="Add to Cart"
                onPress={() => addItemToCart(product)}
              />
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
