import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

export default function PickTypeButton({ children }) {
	return (
		<View style={styles.container}>
			<Text
				style={[
					styles.text,
					({ pressed }) =>
						pressed ? styles.active : styles.inactive,
				]}>
				{children}
			</Text>
		</View>
	);
}
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		width: WIDTH * 0.3,
		paddingVertical: 8,
		alignItems: "center",
		borderWidth: 1,
		borderRadius: 8,
		borderColor: "orange",
	},
	text: {
		color: "orange",
		fontSize: 16,
	},
	active: {
		backgroundColor: "#f2f288",
	},
	inactive: {
		backgroundColor: "white",
	},
});
