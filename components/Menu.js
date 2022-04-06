import React from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	FlatList,
	Pressable,
	Alert,
} from "react-native";
import { features } from "../data/features";
import Icon1 from "react-native-vector-icons/AntDesign";

const Menu = () => {
	return (
		<View style={styles.container}>
			<ScrollView
				horizontal={true}
				showsHorizontalScrollIndicator={false}>
				<View>
					<View style={{ flexDirection: "row" }}>
						<Pressable onPress={() => Alert.alert("Khuyến mãi")}>
							<Item
								title={features[0].title}
								icon={features[0].icon}
								color={features[0].color}
							/>
						</Pressable>
						<Pressable onPress={() => Alert.alert("Đi chợ")}>
							<Item
								title={features[1].title}
								icon={features[1].icon}
								color={features[1].color}
							/>
						</Pressable>
						<Pressable onPress={() => Alert.alert("Món lẩu")}>
							<Item
								title={features[2].title}
								icon={features[2].icon}
								color={features[2].color}
							/>
						</Pressable>
						<Pressable onPress={() => Alert.alert("Utop Back")}>
							<Item
								title={features[3].title}
								icon={features[3].icon}
								color={features[3].color}
							/>
						</Pressable>
						<Pressable onPress={() => Alert.alert("Mua sắm")}>
							<Item
								title={features[4].title}
								icon={features[4].icon}
								color={features[4].color}
							/>
						</Pressable>
					</View>

					<View style={{ flexDirection: "row" }}>
						<Pressable onPress={() => Alert.alert("ăn uống")}>
							<Item
								title={features[5].title}
								icon={features[5].icon}
								color={features[5].color}
							/>
						</Pressable>
						<Pressable onPress={() => Alert.alert("giao đi")}>
							<Item
								title={features[6].title}
								icon={features[6].icon}
								color={features[6].color}
							/>
						</Pressable>
						<Pressable onPress={() => Alert.alert("học hành")}>
							<Item
								title={features[7].title}
								icon={features[7].icon}
								color={features[7].color}
							/>
						</Pressable>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};

const Item = ({ title, icon, color }) => {
	return (
		<View style={styles.item}>
			<Icon1 name={icon} size={40} color={color} />
			<Text style={{ marginTop: 5 }}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
		marginVertical: 5,
		padding: 10,
		backgroundColor: "#fff",
		borderRadius: 8,
	},
	item: {
		justifyContent: "center",
		alignItems: "center",
		marginVertical: 15,
		width: 80,
	},
});
export default Menu;
