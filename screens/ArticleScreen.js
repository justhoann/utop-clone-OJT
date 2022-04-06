import React, { useLayoutEffect } from "react";
import { Text, StyleSheet, View } from "react-native";

const ArticleScreen = (prop) => {
	useLayoutEffect(() => {
		prop.navigation.setOptions({
			tabBarVisible: false,
			title: prop.route.params?.item.title || "No title",
		});
	}, []);
	return (
		<View style={styles.containerArticle}>
			<Text>{prop.route.params?.item.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	containerArticle: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});

export default ArticleScreen;
