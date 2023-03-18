import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface props extends TouchableOpacityProps {
  size: number;
  title: string;
}

export const PurpleButton = ({
  size,
  title,
  disabled,
  onPress,
  ...rest
}: props) => {
  const containerStyle = disabled
    ? { ...styles.container, opacity: 0.2 }
    : { ...styles.container, opacity: 1 };

  const activeStyle = disabled ? 0.2 : 0.7;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...containerStyle, width: size }}
      activeOpacity={activeStyle}
      {...rest}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4611ad",
    borderRadius: 6,
    alignItems: "center",
    paddingVertical: 4,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
