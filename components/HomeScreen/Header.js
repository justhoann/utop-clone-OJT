import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, Pressable, Modal } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/AntDesign";
import ModalCity from "./ModalCity";

const Header = ({ navigation }) => {
	return (
		<View>
			<View style={styles.header}>
				<Dropdown />
				<SearchBox />
				<Bell navigation={navigation} />
			</View>
			<Features />
		</View>
	);
};

export default Header;

function Dropdown() {
	const [title, setTitle] = useState("Hà Nội");
	const [modalVisible, setModalVisible] = useState(false);
	return (
		<View style={styles.dropdownContainer}>
			<Pressable onPress={() => setModalVisible((pre) => !pre)}>
				<Modal
					animationType='fade'
					transparent={false}
					visible={modalVisible}
					onRequestClose={() => {
						setModalVisible(!modalVisible);
					}}>
					<ModalCity
						setTitle={setTitle}
						setModalVisible={setModalVisible}
					/>
				</Modal>
				<View style={styles.dropdown}>
					<Icon name='location-pin' size={20} color='#fff' />
					<Text style={styles.textHeader}>{title}</Text>
					<Icon name='select-arrows' size={20} color='#fff' />
				</View>
			</Pressable>
		</View>
	);
}

function SearchBox() {
	return (
		<View style={{ flex: 4 }}>
			<Pressable
				onPress={() => {
					Alert.alert("search");
				}}>
				<View style={styles.searchBox}>
					<Icon1 name='search1' size={20} color='#000' />
					<Text style={{ marginLeft: 15 }}>Nhập để tìm kiếm ...</Text>
				</View>
			</Pressable>
		</View>
	);
}

function Bell(props) {
	return (
		<Pressable
			onPress={() => {
				props.navigation.navigate("NotificationScreen");
			}}>
			<View style={styles.bell}>
				<Icon1 name='bells' size={30} color='#fff' />
			</View>
		</Pressable>
	);
}

function Features() {
	return (
		<View style={styles.features}>
			<Pressable
				style={styles.feature}
				onPress={() => Alert.alert("Nạp tiền")}>
				<View>
					<Icon1
						name='wallet'
						size={40}
						style={{ marginVertical: 5 }}
						color='#fff'
					/>
					<Text style={styles.whiteText}>Nạp tiền</Text>
				</View>
			</Pressable>
			<Pressable
				style={styles.feature}
				onPress={() => Alert.alert("Nạp thẻ ĐT")}>
				<View style={styles.feature}>
					<Icon1
						name='mobile1'
						size={40}
						style={{ marginVertical: 5 }}
						color='#fff'
					/>
					<Text style={styles.whiteText}>Nạp thẻ ĐT</Text>
				</View>
			</Pressable>
			<Pressable
				style={styles.feature}
				onPress={() => Alert.alert("Membership")}>
				<View style={styles.feature}>
					<Icon1
						name='contacts'
						size={40}
						style={{ marginVertical: 5 }}
						color='#fff'
					/>
					<Text style={styles.whiteText}>Membership</Text>
				</View>
			</Pressable>
			<Pressable
				style={styles.feature}
				onPress={() => Alert.alert("Quét QR")}>
				<View style={styles.feature}>
					<Icon1
						name='qrcode'
						size={40}
						style={{ marginVertical: 5 }}
						color='#fff'
					/>
					<Text style={styles.whiteText}>Quét QR</Text>
				</View>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	whiteText: {
		color: "white",
	},
	header: {
		marginTop: 35,
		flexDirection: "row",
	},
	textHeader: {
		fontSize: 20,
		color: "#fff",
	},
	dropdownContainer: { flex: 2, alignItems: "center" },
	dropdown: {
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
	},
	searchBox: {
		backgroundColor: "#FFF",
		flexDirection: "row",
		alignItems: "center",
		padding: 5,
		borderColor: "#fff",
		borderWidth: 1,
		borderRadius: 100 / 2,
	},
	bell: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	features: {
		flexDirection: "row",
		marginVertical: 10,
	},
	feature: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
