import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 500,
    width: 300,
    backgroundColor: "#151519",
    borderRadius: 12,
    justifyContent: "space-between",
    paddingTop: 18,
    marginHorizontal: 4,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 12,
    backgroundColor: "#151519",
    resizeMode: "center",
    flexDirection: "row",
    marginRight: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "800",
    color: "#fff",
    zIndex: 2,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    fontWeight: "800",
    color: "#fff",
    zIndex: 2,
    marginBottom: 8,
    paddingHorizontal: 14,
  },
  version: {
    fontSize: 14,
    padding: 4,
    height: 24,
    fontWeight: "900",
    color: "#fff",
    textAlign: "center",
    borderRadius: 12,
  },
  deleteButton: {
    backgroundColor: "#de2a30",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 12,
    width: "100%",
  },
  updateButton: {
    backgroundColor: "#4611ad",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingVertical: 12,
    width: "100%",
  },
  deleteText: {
    textAlign: "center",
    fontWeight: "800",
    color: "#fff",
  },
  levelBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    marginVertical: 12,
  },
  counterText: {
    color: "#fff",
    width: 90,
    textAlign: "center",
    fontSize: 12,
    fontWeight: "800",
  },
});
