import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { Text, StyleSheet, View, ScrollView, Alert } from "react-native";

import Icon from "./../components/Icon";
import TimeOpen from "./../components/ArticleScreenComponents/TimeOpen";
import Location from "./../components/ArticleScreenComponents/Location";
import Voucher from "./../components/ArticleScreenComponents/Voucher";
import SlideImg from "./../components/HomeScreenComponents/SlideImg";

const ArticleScreen = (prop) => {
	useLayoutEffect(() => {
		prop.navigation.setOptions({
			tabBarBottomShown: false,
			headerShown: false,
			tabBarBottomShown: false,
		});
	}, [prop.navigation]);

	const route = prop.route;

	return (
		<>
			<StatusBar style='light' />
			<ScrollView>
				<View style={styles.containerArticle}>
					<Icon
						name='arrow-back-circle'
						size={32}
						color='white'
						style={styles.backButton}
						onPress={() => prop.navigation.goBack()}
					/>
					<Icon
						name='alert-circle'
						size={32}
						color='white'
						style={styles.shareButton}
						onPress={() => Alert.alert("share")}
					/>
					<View style={styles.slideContainer}>
						<SlideImg />
					</View>
					<View style={styles.contentContainer}>
						<Text style={styles.contentTitle}>
							{route.params?.item.title.toUpperCase()}
						</Text>
						<TimeOpen />
						<Location />
						<Voucher />
					</View>
				</View>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	containerArticle: {
		flex: 1,
		margin: 0,
		padding: 0,
	},
	backButton: {
		position: "absolute",
		top: 55,
		left: 10,
		zIndex: 2,
	},
	shareButton: {
		position: "absolute",
		top: 55,
		right: 10,
		zIndex: 2,
	},
	slideContainer: {
		alignItems: "center",
	},
	contentTitle: {
		padding: 6,
		fontSize: 18,
		fontWeight: "bold",
	},
});

export default ArticleScreen;
