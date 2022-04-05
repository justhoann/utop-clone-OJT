import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import ArticleScreen from "./ArticleScreen";
import NotiScreen from "./NotiScreen";
const Stack = createNativeStackNavigator();
const HomeScreenContainer = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name='HomeScreen'
				component={HomeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='NotificationScreen'
				component={NotiScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name='article'
				component={ArticleScreen}
				options={{
					headerShown: true,
					title: "Article",
					tabBarVisible: false,
				}}
			/>
		</Stack.Navigator>
	);
};

export default HomeScreenContainer;
