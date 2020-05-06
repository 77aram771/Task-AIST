import React, {useLayoutEffect} from 'react';
import {Viking, White_Smoke} from "../utils/colors";
import {ScrollView, Text, View} from "react-native";

export default function resultsScreen({navigation}) {

	useLayoutEffect(() => {
		navigation.setOptions({
			headerStyle: {
				backgroundColor: Viking,
			},
			headerTintColor: '#000',
			headerTitleStyle: {
				fontWeight: 'bold',
				fontSize: 18
			},
		});
	}, []);

	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: White_Smoke
			}}
		>
			<View
				style={{
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Text
					style={{
						fontSize: 30
					}}
				>
					Results
				</Text>
			</View>
		</ScrollView>
	)
}
