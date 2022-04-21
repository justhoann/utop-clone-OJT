import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SectionHeader({ children }) {
	return (
		<View style={styles.sectionHeader}>
			<Text style={styles.SectionHeaderText}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	sectionHeader: {
		paddingVertical: 10,
	},
	SectionHeaderText: {
		fontSize: 18,
		fontWeight: "bold",
	},
});
