import { Text, View, StatusBar } from "react-native";
import styles from "./styles";
import Cart from "@/components/shopping cart/cart";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headerStyle}>
        <Text style={styles.h1}>SHOP</Text>
        <Cart />
      </View>
      <StatusBar backgroundColor={"#F2F0EF"} barStyle={'dark-content'} />
      <View style={styles.container}>
        <Text style={styles.h1}>Hello World</Text>
      </View>
    </View>
  );
}
