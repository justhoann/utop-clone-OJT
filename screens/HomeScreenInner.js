import React, { useState, useCallback } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	View,
	RefreshControl,
	FlatList,
	Dimensions,
	Alert,
	StyleSheet,
	ImageBackground,
} from "react-native";

import Menu from "./../components/HomeScreenComponents/Menu";
import SlideImg from "../components/HomeScreenComponents/SlideImg";
import ArticleScreen from "./ArticleScreen";
import ArticleContainer from "./../components/HomeScreenComponents/ArticleContainer";
import Header from "./../components/HomeScreenComponents/Header";
import UtopPoint from "./../components/HomeScreenComponents/UtopPoint";
import { StatusBar } from "expo-status-bar";

const WIDTH = Dimensions.get("window").width;
const HomeScreenInner = (props) => {
	const Stack = createNativeStackNavigator();
	const [refreshing, setRefreshing] = useState(false);
	const ListHeaderComponent = () => {
		return (
			<>
				<StatusBar style='light' />
				<View>
					<Menu />
					<SlideImg />
				</View>
			</>
		);
	};

	const ListFooterComponent = () => {
		return (
			<View>
				<Stack.Navigator>
					<Stack.Screen name='article' component={ArticleScreen} />
				</Stack.Navigator>
				<ArticleContainer props={props} />
			</View>
		);
	};
	const onRefresh = useCallback(() => {
		setRefreshing(true);
		Alert.alert("on refresh");
		setRefreshing(false);
	}, []);
	return (
		<ImageBackground
			source={require("../assets/WallpaperDog-10734561.jpg")}
			resizeMode='cover'
			style={styles.imagesBackground}>
			<Header navigation={props.navigation} />
			<UtopPoint />
			<FlatList
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
				ListHeaderComponent={() => <ListHeaderComponent />}
				ListFooterComponent={() => <ListFooterComponent />}
			/>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imagesBackground: {
		width: WIDTH,
		flex: 1,
	},
});

export default HomeScreenInner;
