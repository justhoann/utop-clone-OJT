import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SectionHeader from "../components/HistoryScreenComponents/SectionHeader";
import TitleHeader from "./../components/TitleHeader";
import ItemMenu from "./../components/MenuComponents/ItemMenu";

const MenuScreen = ({ navigation }) => {
	const navigateToScreen = (name) => {
		navigation.navigate(name);
	};
	return (
		// <SafeAreaView style={styles.container}>
		// </SafeAreaView>
		<ScrollView style={styles.container}>
			<TitleHeader>Menu</TitleHeader>
			<View style={styles.subContainer}>
				<SectionHeader>Cá nhân</SectionHeader>
				<ItemMenu
					name='Thông tin cá nhân'
					onPress={() => navigateToScreen("InformationScreen")}
				/>
				<ItemMenu name='Lịch sử điểm Utop' />
				<ItemMenu name='Giới thiệu bạn bè' />
			</View>
			<View style={styles.subContainer}>
				<SectionHeader>Thông tin</SectionHeader>
				<ItemMenu
					name='Câu hỏi thường gặp'
					icon='chatbubbles-outline'
				/>
				<ItemMenu name='Điều khoản sử dụng' icon='receipt-outline' />
				<ItemMenu
					name='Chính sách bảo mật'
					icon='shield-checkmark-outline'
				/>
				<ItemMenu
					name='Quy chế hoạt động'
					icon='document-text-outline'
				/>
				<ItemMenu name='Hỗ trợ' icon='person-circle-outline' />
				<ItemMenu name='Đăng xuất' icon='log-in-outline' />
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#dbdad5",
	},
	subContainer: {
		paddingHorizontal: 12,
		marginBottom: 15,
	},
});

export default MenuScreen;
