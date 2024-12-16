import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CartView from './cartView';

export type CartItem = {
  id: string;
  name: string;
  price: number;
};

export type Props = {
  items: CartItem[];
  addItemToCart: (item: CartItem) => void;
  removeItemFromCart: (id: string) => void;
};

const Cart = (props: Props) => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const closeCartView = () => {
    setIsCartVisible(false);
  };

  return (
    <View>
      {/* Cart Icon */}
      <TouchableOpacity onPress={toggleCart}>
        <Ionicons name="cart" size={36} color="black" />
        {props.items.length !== 0 && <Text style={styles.waresIndicator}>{props.items.length}</Text>}
      </TouchableOpacity>

      {/* Modal for CartView */}
      <Modal
        visible={isCartVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeCartView}
      >
        <TouchableWithoutFeedback onPress={closeCartView}>
          <View style={styles.modalOverlay}>
            <TouchableWithoutFeedback>
              <View>
                <CartView items={props.items} removeItem={props.removeItemFromCart} />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)', // Semi-transparent background
  },
});

export default Cart;
