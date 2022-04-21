import { StyleSheet, FlatList } from "react-native";
import React from "react";

import VoucherItem from "./VoucherItem";
import { voucherDataList } from "./../../data/voucherDataList";

function renderVoucherItem({ item }) {
	return (
		<VoucherItem
			description={item.description}
			expireDate={item.expireDate}
		/>
	);
}

export default function AvailableVoucher() {
	return (
		<FlatList
			data={voucherDataList}
			keyExtractor={(item) => item.id}
			renderItem={renderVoucherItem}
		/>
	);
}

const styles = StyleSheet.create({});
