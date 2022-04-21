import React from "react";

import { View, Dimensions, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import TitleHeader from "../components/TitleHeader";
import AvailableVoucher from "./../components/VoucherScreenComponents/AvailableVoucher";
import NotAvailableVoucher from "./../components/VoucherScreenComponents/NotAvailableVoucher";

const Tab = createMaterialTopTabNavigator();

const VoucherScreen = () => {
	return (
		<View style={styles.container}>
			<TitleHeader>Voucher của tôi</TitleHeader>
			<View style={styles.subHeader}>
				<Tab.Navigator
					screenOptions={{
						tabBarStyle: {
							borderRadius: 10,
							marginHorizontal: 12,
							paddingHorizontal: 15,
						},
					}}>
					<Tab.Screen
						name='AvailableVoucher'
						component={AvailableVoucher}
						options={{
							tabBarLabel: "Còn hiệu lực",
						}}
					/>
					<Tab.Screen
						name='NotAvailableVoucher'
						component={NotAvailableVoucher}
						options={{
							tabBarLabel: "Hết hiệu lực",
						}}
					/>
				</Tab.Navigator>
			</View>
		</View>
	);
};

const HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	subHeader: {
		flex: 1,
		width: "100%",
		height: HEIGHT,
		position: "absolute",
		top: 80,
	},
});

export default VoucherScreen;
