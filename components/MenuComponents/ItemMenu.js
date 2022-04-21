import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icon from "./../Icon";

export default function ItemMenu({ name, icon, onPress }) {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={styles.container}>
				<View style={styles.content}>
					<Icon
						name={icon}
						size={20}
						color='black'
						style={styles.icon}
					/>
					<Text style={styles.text}>{name}</Text>
				</View>
				<Icon
					name='chevron-forward-outline'
					size={20}
					color='black'
					style={styles.icon}
				/>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 8,
		borderRadius: 8,
		backgroundColor: "white",
		justifyContent: "space-between",
		flexDirection: "row",
		marginVertical: 6,
	},
	content: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		marginHorizontal: 8,
	},
	text: {
		fontWeight: "bold",
	},
});
