import React, { useState, useEffect } from "react";
import {
	ActivityIndicator,
	Pressable,
	FlatList,
	StyleSheet,
	View,
	RefreshControl,
} from "react-native";
import Article from "./Article";

const URL = "https://jsonplaceholder.typicode.com/photos?_limit=5&_page=";

const ArticleContainer = (props) => {
	const navigation = props.props.navigation;
	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const getData = async () => {
		setIsLoading(true);
		await fetch(`${URL}${page}`)
			.then((res) => res.json())
			.then((resData) => {
				const newState = data.concat(resData);
				setData(newState);
				setIsLoading(false);
			});
	};

	const renderFlow = ({ item }) => {
		return (
			<Pressable
				onPress={() => {
					navigation.navigate("article", {
						item: item,
					});
				}}>
				<Article name={item.title} slogan={item.id} photo={item.url} />
			</Pressable>
		);
	};

	const renderFooterComponent = () => {
		return isLoading ? (
			<View style={styles.loader}>
				<ActivityIndicator size='large' color='blue' />
			</View>
		) : null;
	};

	const handleLoadMore = () => {
		setPage((pre) => pre + 1);
		getData();
		setIsLoading(true);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<FlatList
			refreshControl={<RefreshControl enabled={false} />}
			style={styles.articleContainer}
			data={data}
			renderItem={renderFlow}
			keyExtractor={(item, index) => String(index)}
			onEndReached={() => handleLoadMore()}
			onEndReachedThreshold={0}
			ListFooterComponent={renderFooterComponent}
		/>
	);
};

const styles = StyleSheet.create({
	articleContainer: {},
	loader: {
		marginVertical: 20,
		alignItems: "center",
	},
});

export default ArticleContainer;
