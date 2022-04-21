import { StyleSheet, Text, View } from "react-native";
import React from "react";
import PickTypeButton from "./PickTypeButton";

export default function TypePickerContainer() {
	return (
		<View style={styles.typePicker}>
			<PickTypeButton>Tất cả</PickTypeButton>
			<PickTypeButton>Voucher</PickTypeButton>
			<PickTypeButton>Cửa hàng</PickTypeButton>
		</View>
	);
}

const styles = StyleSheet.create({
	typePicker: {
		width: "100%",
		marginTop: 8,
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
