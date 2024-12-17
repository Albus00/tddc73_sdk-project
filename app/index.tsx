import React, { useState } from "react";
import { Text, View, StatusBar, Button } from "react-native";
import styles from "./styles";
import Cart from "@/components/shopping cart/cart";
import ImageCarousel from "@/components/imageCarousel";
import { CartItem } from "@/components/shopping cart/cart";
import { ImageAssets } from "@/assets/imageAssets";

export default function Index() {

  const [items, setItems] = useState<CartItem[]>([]);

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
        <ImageCarousel images={Object.values(ImageAssets)} />
        <View style={styles.shoppingContainer}>
          {/* Example Product List */}
          <View style={styles.productList}>
            {[
              { id: randomId(), name: 'Mario Odyssey', price: 49 },
              { id: randomId(), name: 'Zelda TOKT', price: 69 },
              { id: randomId(), name: 'Animal Crossing', price: 49 },
              { id: randomId(), name: 'Pokemon Arceus', price: 39 },
            ].map((product, index) => (
              <View key={product.id} style={[styles.productItem, { width: '46%' }]}>
                <Text style={{ fontSize: 16, textAlign: 'center' }}>{product.name}</Text>
                <View style={styles.purchaseButton}>
                  <Button
                    title={`$${product.price}`}
                    onPress={() => addItemToCart(product)}
                  />
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
