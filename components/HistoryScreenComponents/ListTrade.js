import React from "react";
import { StyleSheet, Text, View, SectionList } from "react-native";
import { historyTrade } from "./../../data/historyTrade";
import SectionHeader from "./SectionHeader";
import SectionItem from "./SectionItem";

export default function ListTrade() {
	return (
		<View style={styles.container}>
			<SectionList
				sections={historyTrade}
				renderItem={({ item }) => <SectionItem {...item} />}
				renderSectionHeader={({ section: { date } }) => (
					<SectionHeader>{date}</SectionHeader>
				)}
				keyExtractor={(item) => item.task + item.id.toString()}
				stickySectionHeadersEnabled
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

		marginHorizontal: 16,
	},
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
	},
	header: {
		fontSize: 32,
		backgroundColor: "#fff",
	},
	title: {
		fontSize: 24,
	},
});
