import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  shoppingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerStyle: {
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "#F2F0EF",
    elevation: 5,
    height: 70,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productItem: {
    backgroundColor: "#F2F0EF",
    padding: 10,
    margin: 5,
    borderRadius: 5,
    elevation: 2,
  },
  productList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  purchaseButton: {
    marginTop: 15,
  },
});

export default styles;
