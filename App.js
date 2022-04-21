import Icon from "react-native-vector-icons/AntDesign";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MenuScreen from "./screens/MenuScreen";
import HistoryScreen from "./screens/HistoryScreen";
import VideoScreen from "./screens/VideoScreen";
import VoucherScreen from "./screens/VoucherScreen";
import HomeScreen from "./screens/HomeScreen";
import InformationScreen from "./screens/InformationScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style='light' />
			<Tab.Navigator
				screenOptions={{
					tabBarShowLabel: false,
				}}>
				<Tab.Screen
					name='HomeScreenContainer'
					component={HomeScreen}
					options={{
						headerShown: false,
						tabBarIcon: HomeIcon,
					}}
				/>
				<Tab.Screen
					name='HistoryScreen'
					component={HistoryScreen}
					options={{
						headerShown: false,
						tabBarIcon: HistoryIcon,
					}}
				/>
				<Tab.Screen
					name='VideoScreen'
					component={VideoScreen}
					options={{
						headerShown: false,
						tabBarIcon: VideoIcon,
					}}
				/>
				<Tab.Screen
					name='VoucherScreen'
					component={VoucherScreen}
					options={{
						headerShown: false,
						tabBarIcon: VoucherIcon,
					}}
				/>
				<Tab.Screen
					name='MenuContainerScreen'
					component={MenuContainerScreen}
					options={{
						headerShown: false,
						tabBarIcon: MenuIcon,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}

function MenuContainerScreen() {
	return (
		<Stack.Navigator initialRouteName='MenuScreen'>
			<Stack.Screen
				name='MenuScreen'
				component={MenuScreen}
				options={{
					headerShown: false,
					tabBarIcon: MenuIcon,
				}}
			/>
			<Stack.Screen
				name='InformationScreen'
				component={InformationScreen}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

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
