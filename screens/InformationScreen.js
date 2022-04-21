import React from "react";
import {
	StyleSheet,
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	Alert,
} from "react-native";

import TitleHeader from "../components/TitleHeader";
import InformationPerson from "../components/InformationScreenComponent/InformationPerson";
import InformationContact from "./../components/InformationScreenComponent/InformationContact";

export default function InformationScreen() {
	const data = {
		fullName: "Nguyen Van A",
		telephone: "01234567",
		email: "nguyenvana@gmail.com",
		avatar: "https://cdn.pixabay.com/photo/2022/04/18/16/20/animal-7140980_960_720.jpg",
	};

	return (
		<View style={styles.container}>
			<TitleHeader>Thông tin cá nhân</TitleHeader>
			<ScrollView>
				<InformationPerson person={data} />
				<InformationContact />
				<TouchableOpacity
					onPress={() => Alert.alert("đã lưu thông tin")}
					style={styles.saveDataButton}>
					<Text style={styles.saveDataText}>Lưu thông tin</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#dbdad5",
	},
	saveDataButton: {
		marginHorizontal: 12,
		marginBottom: 12,
		height: 60,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 60 / 2,
		borderColor: "orange",
		borderWidth: 1,
	},
	saveDataText: {
		color: "orange",
		fontSize: 18,
	},
});
