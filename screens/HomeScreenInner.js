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

import Menu from "../components/HomeScreen/Menu";
import SlideImg from "../components/HomeScreen/SlideImg";
import ArticleScreen from "./ArticleScreen";
import UtopPoint from "../components/HomeScreen/UtopPoint";

const WIDTH = Dimensions.get("window").width;
const HomeScreenInner = (props) => {
	const Stack = createNativeStackNavigator();
	const [refreshing, setRefreshing] = useState(false);
	const ListHeaderComponent = () => {
		return (
			<View>
				<Menu />
				<SlideImg />
			</View>
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
