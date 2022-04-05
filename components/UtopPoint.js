import React from "react";
import { View, Text, StyleSheet } from "react-native";

const UtopPoint = () => {
	return (
		<View style={styles.container}>
			<Text>Điểm Utop của bạn</Text>
			<Text style={{ color: "red", fontSize: 20 }}>30</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginHorizontal: 10,
		marginVertical: 5,
		padding: 10,
		backgroundColor: "#fff",
		borderRadius: 8,
		justifyContent: "space-between",
		alignItems: "center",
	},
});
export default UtopPoint;
