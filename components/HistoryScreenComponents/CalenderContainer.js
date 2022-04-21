import { StyleSheet, View } from "react-native";
import Icon from "./../Icon";
import DatePicker from "./DatePicker";

export default function CalenderContainer() {
	return (
		<View style={styles.container}>
			<Icon name='calendar' size={24} color='green' style={styles.icon} />
			<DatePicker />
			<DatePicker />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 8,
		borderRadius: 8,
		borderWidth: 1,
		borderColor: "grey",
	},
	icon: {
		paddingHorizontal: 6,
	},
	text: {
		paddingHorizontal: 6,
	},
});
