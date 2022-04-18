import React, { useState, useEffect, useRef } from "react";
import {
	View,
	SafeAreaView,
	StyleSheet,
	Dimensions,
	ScrollView,
	Image,
	Text,
} from "react-native";
import { imgSlide } from "../data/imgSlide";
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const SlideImg = () => {
	const [imgActive, setImgActive] = useState(0);

	const onchange = (nativeEvent) => {
		const slide = Math.ceil(
			nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
		);
		if (slide != imgActive) {
			setImgActive(slide);
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.wrap}>
				<ScrollView
					onScroll={({ nativeEvent }) => onchange(nativeEvent)}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					horizontal
					style={styles.wrap}>
					{imgSlide.map((photo, index) => (
						<Image
							key={photo}
							resizeMode='cover'
							style={[styles.wrap]}
							source={{ uri: photo }}
						/>
					))}
				</ScrollView>
				<View style={styles.wrapDot}>
					{imgSlide.map((dot, index) => (
						<Text
							key={dot}
							style={
								imgActive == index
									? styles.dotActive
									: styles.dot
							}>
							●
						</Text>
					))}
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 10,
		marginVertical: 5,
		borderRadius: 8,
		overflow: "hidden",
	},
	wrap: {
		borderRadius: 8,
		width: WIDTH - 20,
		height: HEIGHT * 0.25,
	},
	wrapDot: {
		position: "absolute",
		top: 10,
		left: 20,
		flexDirection: "row",
		alignSelf: "flex-start",
	},
	dotActive: {
		marginHorizontal: 2,
		color: "#300",
	},
	dot: {
		marginHorizontal: 2,
		color: "#fff",
	},
});

export default SlideImg;
