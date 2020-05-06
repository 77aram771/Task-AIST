import React, {useEffect, useState} from 'react';
import * as Font from "expo-font";
import {View, Image, ActivityIndicator, Text, YellowBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Viking} from "./src/utils/colors";
import calendarScreen from "./src/screens/calendarScreen";
import surveysScreen from "./src/screens/surveysScreen";
import resultsScreen from "./src/screens/resultsScreen";
import libraryScreen from "./src/screens/libraryScreen";
import profileScreen from "./src/screens/profileScreen";
import {Height, Width} from "./src/utils/constants";

console.disableYellowBox = true;

YellowBox.ignoreWarnings(['Warning:']);

const ScreenContainer = () => (
	<View style={{
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	}}>
		<ActivityIndicator size="large" color={Viking}/>
	</View>
);

const RootStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const CalendarStack = createStackNavigator();
const SurveysStack = createStackNavigator();
const ResultsStack = createStackNavigator();
const OrdersStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export default function App() {

	const [isLoading, setIsLoading] = useState(true);

	function CalendarStackScreen() {
		return (
			<CalendarStack.Navigator>
				<CalendarStack.Screen
					name="Event"
					options={{
						title: 'Safety training for samsung',
					}}
					component={calendarScreen}
				/>
			</CalendarStack.Navigator>
		);
	}

	function SurveysStackScreen() {
		return (
			<SurveysStack.Navigator>
				<SurveysStack.Screen name="Surveys" options={{title: ''}} component={surveysScreen}/>
			</SurveysStack.Navigator>
		);
	}

	function ResultsStackScreen() {
		return (
			<ResultsStack.Navigator>
				<ResultsStack.Screen name="Results" options={{title: ''}} component={resultsScreen}/>
			</ResultsStack.Navigator>
		);
	}

	function LibraryStackScreen() {
		return (
			<OrdersStack.Navigator>
				<OrdersStack.Screen name="Library" options={{title: ''}} component={libraryScreen}/>
			</OrdersStack.Navigator>
		);
	}

	function ProfileStackScreen() {
		return (
			<ProfileStack.Navigator>
				<ProfileStack.Screen name="Profile" options={{title: ''}} component={profileScreen}/>
			</ProfileStack.Navigator>
		);
	}

	const TabsStackScreen = () => {
		return (
			<Tab.Navigator
				screenOptions={({route}) => ({
					tabBarIcon: ({focused}) => {
						if (route.name === 'Event') {
							return (
								<View
									style={{
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Image
										source={
											focused
												? require('./assets/icon/icon-calendar-active.png')
												: require('./assets/icon/icon-calendar.png')
										}
										style={ focused ? {
											width: 28,
											height: 28,
										} : {
											width: 22,
											height: 22,
										}}
									/>
								</View>
							);
						}
						else if (route.name === 'Surveys') {
							return (
								<View
									style={{
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Image
										source={
											focused
												? require('./assets/icon/icon-survey.png')
												: require('./assets/icon/icon-survey.png')
										}
										style={ focused ? {
											width: 27,
											height: 24,
										} : {
											width: 23,
											height: 20,
										}}
									/>
								</View>
							);
						}
						else if (route.name === 'Results') {
							return (
								<View
									style={{
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Image
										source={
											focused
												? require('./assets/icon/icon-research.png')
												: require('./assets/icon/icon-research.png')
										}
										style={ focused ? {
											width: 31,
											height: 25,
										} : {
											width: 27,
											height: 21,
										}}
									/>
								</View>
							);
						}
						else if (route.name === 'Library') {
							return (
								<View
									style={{
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Image
										source={
											focused
												? require('./assets/icon/icon-book.png')
												: require('./assets/icon/icon-book.png')
										}
										style={ focused ? {
											width: 30,
											height: 24,
										} : {
											width: 26,
											height: 20,
										}}
									/>
								</View>
							);
						}
						else if (route.name === 'Profile') {
							return (
								<View
									style={{
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Image
										source={
											focused
												? require('./assets/icon/icon-user-active.png')
												: require('./assets/icon/icon-user.png')
										}
										style={ focused ? {
											width: 25,
											height: 29,
										} : {
											width: 21,
											height: 24,
										}}
									/>
								</View>
							);
						}
					},
				})}
				tabBarOptions={{
					activeTintColor: '#fff',
					inactiveTintColor: 'black',
					labelStyle: {
						fontSize: 10,
					},
					style: {
						borderTopLeftRadius: 42,
						borderTopRightRadius: 42,
						paddingLeft: 20,
						paddingRight: 20,
						marginTop: -48,
						height: Platform.OS === 'ios' ? 100 : 80
					},
					tabStyle: {
						paddingTop: 10,
						paddingBottom:10
					}
				}}
			>
				<Tab.Screen name="Event" component={CalendarStackScreen}/>
				<Tab.Screen name="Surveys" component={SurveysStackScreen}/>
				<Tab.Screen name="Results" component={ResultsStackScreen}/>
				<Tab.Screen name="Library" component={LibraryStackScreen}/>
				<Tab.Screen name="Profile" component={ProfileStackScreen}/>
			</Tab.Navigator>
		);
	};

	const RootStackScreen = () => {
		return (
			<RootStack.Navigator headerMode="none">
				<RootStack.Screen
					name="App"
					component={TabsStackScreen}
				/>
			</RootStack.Navigator>
		)
	};

	useEffect(() => {
		setTimeout(async () => {
			await Font.loadAsync({
				//"Metropolis-Black": require("./assets/fonts/Metropolis-Black.otf"),
			});
			setIsLoading(false);
		}, 1000);
	}, []);

	if (isLoading) {
		return (
			<ScreenContainer/>
		);
	}

	return (
		<NavigationContainer>
			<RootStackScreen/>
		</NavigationContainer>
	);
}
