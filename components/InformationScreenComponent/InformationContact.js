import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";

export default function InformationContact() {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Phương thức đăng nhập</Text>
			<View style={styles.subContainer}>
				<TouchableOpacity>
					<View style={styles.loginMethodContainer}>
						<Text style={styles.label}>Kết nối Facebook</Text>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
							ios_backgroundColor='#3e3e3e'
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		padding: 8,
		borderRadius: 8,
		marginBottom: 8,
	},
	title: {
		fontWeight: "bold",
		fontSize: 16,
		marginBottom: 10,
	},
	subContainer: {
		borderRadius: 8,
		backgroundColor: "#fff",
		padding: 12,
	},
	loginMethodContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 8,
	},
	label: {
		fontWeight: "bold",
		fontSize: 16,
	},
});
