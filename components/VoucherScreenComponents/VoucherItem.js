import React from "react";

import { StyleSheet, Text, View, FlatList } from "react-native";
import Icon from "./../Icon";

export default function VoucherItem({ description, expireDate }) {
	return (
		<View style={styles.container}>
			<Icon
				style={styles.icon}
				name='file-tray-full'
				size={32}
				color='#000'
			/>
			<View style={styles.contentWrapper}>
				<Text style={styles.description}>{description}</Text>
				<Text style={styles.expireDate}>Hết hạn: {expireDate}</Text>
				<Text style={styles.viewMore}>Xem</Text>
			</View>
			<View>
				<Icon name='receipt' size={20} color='orange' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 12,
		margin: 12,
		backgroundColor: "white",
		elevation: 3,
		shadowOffset: { width: 2, height: 2 },
		shadowColor: "black",
		borderRadius: 8,
		flexDirection: "row",
		alignItems: "center",
		position: "relative",
	},
	icon: {
		marginRight: 12,
	},
	contentWrapper: {
		marginRight: 20,
	},
	description: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 4,
	},
	expireDate: {
		color: "#f00",
		marginVertical: 2,
	},
	viewMore: {
		color: "orange",
	},
});
