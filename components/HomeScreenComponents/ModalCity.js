import React from "react";
import {
	View,
	StyleSheet,
	Text,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const ModalCity = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Chọn Thành Phố</Text>
			<View style={styles.cityContainer}>
				<TouchableOpacity
					style={styles.touch}
					onPress={() => {
						props.setTitle("Hà Nội");
						props.setModalVisible((pre) => !pre);
					}}>
					<Text style={styles.cityValue}>Hà Nội</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.touch}
					onPress={() => {
						props.setTitle("Đà Nẵng");
						props.setModalVisible((pre) => !pre);
					}}>
					<Text style={styles.cityValue}>Đà Nẵng</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.touch}
					onPress={() => {
						props.setTitle("Sài Gòn");
						props.setModalVisible((pre) => !pre);
					}}>
					<Text style={styles.cityValue}>Sài Gòn</Text>
				</TouchableOpacity>
			</View>
			<Pressable
				style={styles.closeModal}
				onPress={() => props.setModalVisible((pre) => !pre)}>
				<Text
					style={{
						color: "white",
						fontSize: 20,
					}}>
					Close
				</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
	},
	title: {
		margin: 15,
		fontSize: 20,
	},
	closeModal: {
		backgroundColor: "#F00",
		width: WIDTH - 30,
		alignItems: "center",
		padding: 15,
		marginBottom: 10,
		borderRadius: 100 / 2,
	},
	cityContainer: {
		height: HEIGHT * 0.75,
		justifyContent: "space-around",
	},
	touch: {
		backgroundColor: "green",
		padding: 30,
		borderRadius: 100 / 2,
	},
	cityValue: {
		color: "white",
		fontSize: 20,
	},
});
export default ModalCity;
