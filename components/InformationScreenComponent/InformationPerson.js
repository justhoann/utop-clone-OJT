import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	Dimensions,
	ScrollView,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import Icon from "../Icon";

export default function InformationPerson(props) {
	const [fullName, setFullName] = useState(props.person.fullName);
	const [telephone, setTelephone] = useState(props.person.telephone);
	const [email, setEmail] = useState(props.person.email);

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.avatarContainer}>
						<TouchableOpacity>
							<Image
								source={{ uri: props.person.avatar }}
								resizeMode='cover'
								style={styles.avatar}
							/>
						</TouchableOpacity>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>Họ và tên</Text>
						<TextInput
							onChangeText={setFullName}
							value={fullName}
							style={styles.textInput}
							placeholder='Họ và tên'
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>Số điện thoại</Text>
						<TextInput
							onChangeText={setTelephone}
							value={telephone}
							style={styles.textInput}
							placeholder='Số điện thoại'
						/>
					</View>
					<View style={styles.inputContainer}>
						<Text style={styles.inputLabel}>Email</Text>
						<TextInput
							onChangeText={setEmail}
							value={email}
							style={styles.textInput}
							placeholder='Nhập Email'
						/>
					</View>
					<TouchableOpacity style={styles.ultipart}>
						<View style={styles.ultipartContent}>
							<Text style={styles.inputLabel}>
								Quản lý thẻ/tài khoản
							</Text>
							<Icon
								name='chevron-forward-outline'
								color='black'
								size={18}
							/>
						</View>
					</TouchableOpacity>
					<TouchableOpacity style={styles.ultipart}>
						<View style={styles.ultipartContent}>
							<Text style={styles.inputLabel}>Tạo mã PIN</Text>
							<Icon
								name='chevron-forward-outline'
								color='black'
								size={18}
							/>
						</View>
					</TouchableOpacity>
				</ScrollView>
			</View>
		</KeyboardAvoidingView>
	);
}

const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		margin: 8,
		borderRadius: 8,
	},
	avatarContainer: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	avatar: {
		height: 150,
		width: 150,
		borderRadius: 150 / 2,
	},
	inputContainer: {
		padding: 12,
	},
	inputLabel: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 4,
	},
	textInput: {
		fontSize: 16,
		borderBottomWidth: 1,
		borderBottomColor: "grey",
	},
	ultipart: {
		padding: 12,
	},
	ultipartContent: {
		paddingVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		borderBottomWidth: 1,
		borderBottomColor: "grey",
	},
});
