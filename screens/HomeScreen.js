import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import {
	View,
	ScrollView,
	Pressable,
	Alert,
	RefreshControl,
} from "react-native";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import Menu from "../components/Menu";
import Header from "../components/Header";
import UtopPoint from "../components/UtopPoint";
import Article from "../components/Article";
import { articles } from "./../data/articles";
import SlideImg from "./../components/SlideImg";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ArticleScreen from "../screens/ArticleScreen";

const HomeScreen = (props) => {
	const Stack = createNativeStackNavigator();
	const [refreshing, setRefreshing] = React.useState(false);
	const wait = (timeout) => {
		return new Promise((resolve) => setTimeout(resolve, timeout));
	};
	const onRefresh = useCallback(() => {
		setRefreshing(true);
		wait(2000).then(() => {
			Alert.alert("End refresh");
			setRefreshing(false);
		});
	}, []);
	return (
		<ScrollView
			refreshControl={
				<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
			}>
			<ImageBackground
				source={require("../assets/orangeBackground.jpg")}
				resizeMode='cover'
				style={{
					width: "auto",
					flex: 1,
				}}>
				<View>
					<Header navigation={props.navigation} />
					<UtopPoint />
					<Menu />
					<SlideImg />
					<Stack.Navigator>
						<Stack.Screen
							name='article'
							component={ArticleScreen}
						/>
					</Stack.Navigator>
					{articles.map((item, index) => {
						return (
							<Pressable
								key={index}
								onPress={() => {
									props.navigation.navigate("article", {
										item: item,
									});
								}}>
								<Article
									name={item.name}
									logo={item.logo}
									slogan={item.slogan}
									images={item.images}
								/>
							</Pressable>
						);
					})}
				</View>
			</ImageBackground>
		</ScrollView>
	);
};

export default HomeScreen;
