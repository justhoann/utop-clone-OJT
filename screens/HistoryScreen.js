import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

import TitleHeader from "./../components/TitleHeader";
import TypePickerContainer from "./../components/HistoryScreenComponents/TypePickerContainer";
import CalenderContainer from "./../components/HistoryScreenComponents/CalenderContainer";
import ListTrade from "./../components/HistoryScreenComponents/ListTrade";

const HistoryScreen = () => {
	const navigation = useNavigation();
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Lịch sử giao dịch",
		});
	}, []);
	return (
		<>
			<StatusBar style='dark' />
			<View style={styles.container}>
				<TitleHeader>Lịch sử giao dịch</TitleHeader>
				<View style={styles.subHeader}>
					<CalenderContainer />
					<TypePickerContainer />
				</View>
				<ListTrade />
			</View>
		</>
	);
};

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#dbdad5",
	},
	subHeader: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		height: HEIGHT * 0.16,
		width: WIDTH,
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "#fff",
	},
});

export default HistoryScreen;
