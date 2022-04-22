import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

export default function TitleHeader({ children }) {
	return (
		<>
			<StatusBar style='auto' />
			<View style={styles.container}>
				<Text style={styles.text}>{children}</Text>
			</View>
		</>
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
		justifyContent: "center",
		backgroundColor: "yellow",
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
	},
});
