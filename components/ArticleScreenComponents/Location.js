import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "../Icon";

export default function Location() {
	return (
		<View style={styles.container}>
			<View style={styles.locationContainer}>
				<Text style={styles.location}>
					2 Tây Sơn, Thị trấn Phùng, Đan Phượng, Hà Nội
				</Text>
				<Text style={styles.distance}>(2.9 km)</Text>
			</View>
			<View style={styles.buttonContainer}>
				<Icon name='navigate-circle' size={32} color='orange' />
				<Icon name='phone-portrait-outline' size={32} color='orange' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		marginBottom: 10,
		paddingHorizontal: 6,
		paddingBottom: 6,
		borderBottomWidth: 1,
		borderBottomColor: "grey",
	},
	locationContainer: {
		width: "75%",
	},
	location: {
		fontSize: 15,
	},
	distance: {
		color: "grey",
	},
	buttonContainer: {
		width: "25%",
		flexDirection: "row",
		justifyContent: "space-around",
	},
});
