import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./../Icon";

export default function TimeOpen() {
	return (
		<View style={styles.contentTimeContainer}>
			<Icon name='time' size={18} color='orange' />
			<Text style={styles.contentTimeText}>Đang mở cửa</Text>
			<Text style={styles.contentTimeNumber}>09:00 - 22:20</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	contentTimeContainer: {
		width: "60%",
		marginVertical: 12,
		padding: 6,
		flexDirection: "row",
	},
	contentTimeText: {
		color: "orange",
		fontSize: 16,
		paddingHorizontal: 8,
		borderRightWidth: 1,
		borderColor: "grey",
	},
	contentTimeNumber: {
		paddingHorizontal: 8,
	},
});
