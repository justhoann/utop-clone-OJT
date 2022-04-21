import { StyleSheet, Text, Pressable, View } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePicker() {
	const [isPickerShow, setIsPickerShow] = useState(false);
	const [date, setDate] = useState(new Date(Date.now()));

	const showPicker = () => {
		setIsPickerShow(true);
	};

	const onChange = (event, value) => {
		setDate(value);
		if (Platform.OS === "android") {
			setIsPickerShow(false);
		}
	};

	return (
		<View style={styles.container}>
			<Pressable onPress={showPicker} style={styles.text}>
				<Text>
					--
					{date.getDate() +
						"/" +
						(date.getMonth() + 1) +
						"/" +
						date.getFullYear()}
					--
				</Text>
			</Pressable>
			{isPickerShow && (
				<DateTimePicker
					value={date}
					mode={"date"}
					display={Platform.OS === "ios" ? "spinner" : "default"}
					is24Hour={true}
					onChange={onChange}
				/>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 6,
	},
});
