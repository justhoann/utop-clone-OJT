import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Icon from "../Icon";

export default function SectionItem({ id, price, hours, title, status }) {
	return (
		<View style={styles.container}>
			<Icon
				name='list-outline'
				size={30}
				color='orange'
				style={styles.icon}
			/>
			<View style={styles.content}>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.time}>{hours}</Text>
				<Text
					style={[
						styles.status,
						status ? styles.statusSuccess : styles.statusFailure,
					]}>
					{status ? "Hoàn thành" : "Đã hủy"}
				</Text>
			</View>
			<View style={styles.price}>
				<Text style={styles.priceText}>{price}đ</Text>
				<Icon name='chevron-forward-outline' size={18} color='black' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "white",
		padding: 6,
		marginVertical: 6,

		borderRadius: 8,
	},
	icon: {
		width: "10%",
		marginHorizontal: 3,
	},
	content: {
		width: "60%",
		paddingHorizontal: 8,
	},
	title: {
		fontWeight: "bold",
		fontSize: 16,
		marginVertical: 3,
	},
	time: {
		color: "grey",
		fontSize: 14,
		marginVertical: 3,
	},
	status: {
		fontSize: 14,
		marginVertical: 3,
	},
	statusSuccess: {
		color: "green",
	},
	statusFailure: {
		color: "red",
	},
	price: {
		width: "30%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	priceText: {
		fontSize: 18,
		color: "black",
	},
});
