import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import MenuScreen from "./screens/MenuScreen";
import HistoryScreen from "./screens/HistoryScreen";
import VideoScreen from "./screens/VideoScreen";
import VoucherScreen from "./screens/VoucherScreen";
import { NavigationContainer } from "@react-navigation/native";

import Icon from "react-native-vector-icons/AntDesign";
import HomeScreenContainer from "./screens/HomeScreenContainer";

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen
					name='HomeScreenContainer'
					component={HomeScreenContainer}
					options={{
						headerShown: false,
						tabBarActiveTintColor: "blue",
						tabBarIcon: HomeIcon,
						tabBarLabel: "Home",
						tabBarLabelStyle: {
							color: "#000",
						},
					}}></Tab.Screen>
				<Tab.Screen
					name='HistoryScreen'
					component={HistoryScreen}
					options={{
						headerShown: false,
						tabBarIcon: HistoryIcon,
						tabBarLabel: "History",
						tabBarLabelStyle: {
							color: "#000",
						},
					}}
				/>
				<Tab.Screen
					name='VideoScreen'
					component={VideoScreen}
					options={{
						headerShown: false,
						tabBarIcon: VideoIcon,
						tabBarLabel: "Video",
						tabBarLabelStyle: {
							color: "#000",
						},
					}}
				/>
				<Tab.Screen
					name='VoucherScreen'
					component={VoucherScreen}
					options={{
						headerShown: false,
						tabBarIcon: VoucherIcon,
						tabBarLabel: "Voucher",
						tabBarLabelStyle: {
							color: "#000",
						},
					}}
				/>
				<Tab.Screen
					name='MenuScreen'
					component={MenuScreen}
					options={{
						headerShown: false,
						tabBarIcon: MenuIcon,
						tabBarLabel: "Menu",
						tabBarLabelStyle: {
							color: "#000",
						},
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

const HomeIcon = () => {
	return <Icon name='home' size={25} color='#000' />;
};
const HistoryIcon = () => {
	return <Icon name='book' size={25} color='#000' />;
};
const VideoIcon = () => {
	return <Icon name='play' size={30} color='orange' />;
};
const VoucherIcon = () => {
	return <Icon name='creditcard' size={25} color='#000' />;
};
const MenuIcon = () => {
	return <Icon name='bars' size={25} color='#000' />;
};
