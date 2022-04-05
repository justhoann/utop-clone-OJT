import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { View, Text, StyleSheet, Image } from "react-native";

const Article = ({ name, slogan, images }) => {
	return (
		<View style={styles.container}>
			<View
				style={{
					flexDirection: "row",
				}}>
				<Image
					source={require("../assets/articleImages/utoplogo.jpg")}
					style={styles.logo}
				/>
				<View style={styles.content}>
					<Text style={styles.title}>{name}</Text>
					<Text styles={styles.subTitle}>
						<Icon
							name='list'
							color='orange'
							style={{ paddingRight: 10 }}
						/>
						{slogan}
					</Text>
				</View>
			</View>
			<View style={styles.imgContainer}>
				<Image style={styles.mainImg} source={{ uri: images[0] }} />
				<View style={styles.subMainImgContainer}>
					<Image
						style={styles.subMainImg}
						source={{ uri: images[1] }}
					/>
					<Image
						style={styles.subMainImg}
						source={{ uri: images[2] }}
					/>
				</View>
			</View>
			<View style={styles.footer}>
				<View style={styles.footerIcon}>
					<Icon name='home' color='orange' size={16} />
				</View>
				<View style={styles.textFooterContainer}>
					<Text style={styles.footerText}>
						Xem tất cả các cửa hàng{" "}
						<Icon
							name='arrow-with-circle-right'
							size={16}
							color='#000'
						/>
					</Text>
				</View>
			</View>
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
	logo: {
		borderRadius: 100 / 2,
		width: 40,
		height: 40,
		resizeMode: "center",
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		borderRadius: 100 / 2,
	},
	content: {
		flex: 5,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
	},
	subtitle: {
		fontSize: 16,
	},
	imgContainer: {
		flexDirection: "row",
		marginTop: 10,
	},
	mainImg: {
		flex: 2,
		height: 100,
		borderRadius: 10,
		marginRight: 5,
		resizeMode: "cover",
	},
	subMainImgContainer: {
		flex: 1,
		height: 100,
		justifyContent: "space-between",
	},
	subMainImg: {
		height: 48,

		borderRadius: 10,
	},
	footer: {
		marginTop: 10,
		fontSize: 16,
		flexDirection: "row",
	},
	footerIcon: {
		marginRight: 10,
	},
	textFooterContainer: {
		justifyContent: "center",
	},
});
export default Article;
