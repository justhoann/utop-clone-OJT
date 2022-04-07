import React, { useState, useCallback } from "react";
import {
	View,
	RefreshControl,
	FlatList,
	Dimensions,
	Alert,
	StyleSheet,
} from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Menu from "../components/Menu";
import Header from "../components/Header";
import UtopPoint from "../components/UtopPoint";
import SlideImg from "./../components/SlideImg";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleScreen from "../screens/ArticleScreen";
import ArticleContainer from "../components/ArticleContainer";
const WIDTH = Dimensions.get("window").width;

const HomeScreen = (props) => {
	const Stack = createNativeStackNavigator();
	const [refreshing, setRefreshing] = useState(false);
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
				data={[]}
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

export default HomeScreen;
