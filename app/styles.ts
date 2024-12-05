import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: '#fff',
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
});

export default styles;
