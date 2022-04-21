import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

export default function TitleHeader({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{children}</Text>
		</View>
	);
}
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const styles = StyleSheet.create({
	container: {
		width: WIDTH,
		height: HEIGHT * 0.11,
		padding: 8,
		alignItems: "center",
		justifyContent: "flex-end",
		backgroundColor: "yellow",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
