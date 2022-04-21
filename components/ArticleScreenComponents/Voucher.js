import { StyleSheet, Text, View } from "react-native";
import Icon from "./../Icon";

export default function Voucher() {
	return (
		<View style={styles.container}>
			<Icon
				name='receipt-outline'
				size={28}
				color='orange'
				style={styles.icon}
			/>
			<View style={styles.content}>
				<Text>Giảm 40k cho đơn từ 125K khi đặt ...</Text>
				<Text>hết bạn 10/05/2022</Text>
			</View>
			<View style={styles.viewMore}>
				<Text style={styles.viewMoreText}>Xem thêm</Text>
				<Icon name='chevron-forward-outline' size={16} color='orange' />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
	},
	icon: {
		width: "10%",
		alignItems: "center",
	},
	content: {
		width: "70%",
		flexDirection: "column",
		paddingHorizontal: 8,
	},
	viewMore: {
		flexDirection: "row",
	},
	viewMoreText: {
		color: "orange",
	},
});
