import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ArticleScreen from "./ArticleScreen";
import NotiScreen from "./NotiScreen";

import HomeScreenInner from "./HomeScreenInner";
const Stack = createNativeStackNavigator();
const HomeScreenContainer = () => {
	return (
		<>
			<Stack.Navigator>
				<Stack.Screen
					name='HomeScreen'
					component={HomeScreenInner}
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
					}}
				/>
			</Stack.Navigator>
		</>
	);
};

export default HomeScreenContainer;
