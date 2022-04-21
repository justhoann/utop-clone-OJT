import { StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Icon({ name, size, color, onPress, style }) {
	return (
		<TouchableOpacity onPress={onPress} style={style}>
			<Ionicons name={name} size={size} color={color} />
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({});
