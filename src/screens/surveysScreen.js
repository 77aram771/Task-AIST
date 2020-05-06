import React, {useLayoutEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';

import {Viking, White_Smoke} from '../utils/colors';

export default function surveysScreen ({navigation}) {

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
					Surveys
				</Text>
			</View>
		</ScrollView>
	)
}
