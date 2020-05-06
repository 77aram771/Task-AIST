import React, {useLayoutEffect, useState} from 'react';
import {
	ScrollView,
	View,
	Text,
	SafeAreaView,
	Platform,
	Image,
	TouchableOpacity,
	ImageBackground,
} from 'react-native'
import {Black, Viking, White_Smoke} from "../utils/colors";
import {Height, Width} from "../utils/constants";
import {Video} from 'expo-av'
import VideoPlayer from 'expo-video-player'
import {ScrollableTabView, ScrollableTabBar,} from '@valdio/react-native-scrollable-tabview'

export default function calendarScreen({navigation}) {

	const [playVideo, setPlayVideo] = useState(false);

	const [isOpen, setIsOpen] = useState(false);

	const [buttonChange, setButtonChange] = useState(false);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		});
	}, []);

	function openModal() {
		setIsOpen(!isOpen);
		setPlayVideo(false)
	}

	function changeButton() {
		setButtonChange(!buttonChange);
	}

	function renderText(text, marginBottom) {
		return (
			<View
				style={{
					alignSelf: 'center',
					width: Width - 40,
					marginBottom: marginBottom
				}}
			>
				<Text
					style={{
						fontSize: 16,
						color: Black,
						lineHeight: 28,
					}}
				>
					{text}
				</Text>
			</View>
		)
	}

	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: White_Smoke,
				paddingTop: Platform.OS === 'ios' ? 0 : 30,
				position: 'relative'
			}}
		>
			<ScrollView
				style={{
					flex: 1,
					backgroundColor: White_Smoke,
				}}
			>
				<View
					style={{
						width: Width,
						minHeight: 206,
						borderBottomLeftRadius: 25,
						borderBottomRightRadius: 25,
						backgroundColor: Viking,
						justifyContent: 'flex-start',
						alignItems: 'center',
						paddingTop: 20,
						marginBottom: 190
					}}
				>
					<View
						style={{
							width: Width - 40,
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<View
							style={{
								width: '70%'
							}}
						>
							<Text
								style={{
									fontSize: 24,
									color: '#fff',
								}}
							>
								Safety training for samsung
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'column',
								justifyContent: 'space-between',
								alignItems: 'flex-end',
								height: 70
							}}
						>
							<TouchableOpacity
								style={{
									flexDirection: 'row',
									justifyContent: 'center',
									alignItems: 'center'
								}}
								onPress={() => alert('test')}
							>
								<Image
									style={{
										width: 24,
										height: 24,
										marginRight: 12
									}}
									source={require('../../assets/icon/icon-user-view.png')}
								/>
								<Image
									style={{
										width: 14,
										height: 10
									}}
									source={require('../../assets/icon/icon-arrow-down.png')}
								/>
							</TouchableOpacity>
							<TouchableOpacity
								style={{
									justifyContent: 'flex-end',
									alignItems: 'flex-end',
									alignSelf: 'flex-end',
									alignContent: 'flex-end',
									justifySelf: 'flex-end',
									justifyItems: 'flex-end'
								}}
								onPress={openModal}
							>
								{
									isOpen
										? (
											<Image
												style={{
													width: 25,
													height: 20
												}}
												source={require('../../assets/icon/icon-arrow-top.png')}
											/>
										)
										: (
											<Image
												style={{
													width: 25,
													height: 20
												}}
												source={require('../../assets/icon/icon-menu.png')}
											/>
										)
								}
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View
					style={isOpen ? {
						width: Width,
						height: Height / 2,
						backgroundColor: Viking,
						position: 'absolute',
						top: 120,
						left: 0,
						right: 0,
						bottom: 0,
						zIndex: 2,
						borderBottomLeftRadius: 25,
						borderBottomRightRadius: 25,
					} : {
						position: 'absolute',
						top: -1120,
					}}
				>
					<ScrollableTabView
						renderTabBar={() => (
							<ScrollableTabBar
								style={{
									backgroundColor: 'white',
									borderRadius: 40,
									height: 80,
									justifyContent: 'center',
									alignItems: 'center',
									paddingLeft: 10,
									paddingRight: 10,
								}}
								tabStyle={{
									marginTop: 15,
									marginRight: 7.5,
									marginLeft: 7.5,
								}}
							/>
						)}
						tabBarTextStyle={{
							fontSize: 17,
							fontWeight: 'normal',
						}}
						tabBarInactiveTextColor={'black'}
						tabBarActiveTextColor={'#fff'}
						tabBarUnderlineStyle={{
							height: 60,
							backgroundColor: Viking,
							borderRadius: 30,
							marginBottom: 10,
							position: 'absolute',
							zIndex: -3
						}}
						initialPage={0}
					>
						<View
							key={'1'}
							tabLabel={'Module 1'}
							style={{
								flex: 1,
								backgroundColor: Viking,
								borderBottomLeftRadius: 25,
								borderBottomRightRadius: 25,
								paddingTop: 20,
								justifyContent: 'space-between',
							}}
						>
							<View
								style={{
									width: Width - 40,
									flexDirection: 'column',
									justifyContent: 'flex-start',
									alignItems: 'flex-start',
									alignSelf: 'center'
								}}
							>
								<Text
									style={{
										fontSize: 20,
										color: '#fff',
										marginBottom: 6
									}}
								>
									1. CCNSG Safety Passport
								</Text>
								<Text
									style={{
										fontSize: 20,
										color: '#fff',
										marginBottom: 6
									}}
								>
									2. CCNSG Leading a Team Safely
								</Text>
								<Text
									style={{
										fontSize: 20,
										color: '#fff',
										marginBottom: 6
									}}
								>
									3. IOSH Working Safely
								</Text>
								<Text
									style={{
										fontSize: 20,
										color: '#fff',
										marginBottom: 6
									}}
								>
									4. IOSH Managing Safely
								</Text>
							</View>
							<View
								style={{
									width: Width - 60,
									height: 75,
									marginBottom: 40,
									backgroundColor: '#fff',
									borderRadius: 35,
									flexDirection: 'row',
									alignSelf: 'center',
									justifyContent: 'space-around',
									alignItems: 'center',
								}}
							>
								<TouchableOpacity
									onPress={changeButton}
									style={buttonChange ? {
										width: '45%',
										height: 55,
										backgroundColor: Viking,
										borderRadius: 26,
										justifyContent: 'center',
										alignItems: 'center',
									} : {
										width: '45%',
										height: 55,
										backgroundColor: White_Smoke,
										borderRadius: 26,
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Text
										style={buttonChange ? {
											fontSize: 15,
											color: '#fff'
										} : {
											fontSize: 15,
											color: '#000'
										}}
									>
										{buttonChange ? `Surveys` : `Assessment`}
									</Text>
								</TouchableOpacity>
								<View
									style={{
										width: '35%',
										height: 55,
										backgroundColor: '#fff',
										borderRadius: 26,
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<Text
										style={{
											fontSize: 15,
											color: '#000'
										}}
									>
										Result
									</Text>
								</View>
							</View>
						</View>
						<View
							key={'2'}
							tabLabel={'Module 2'}
							style={{
								flex: 1,
								backgroundColor: Viking,
								borderBottomLeftRadius: 25,
								borderBottomRightRadius: 25,
							}}
						/>
						<View
							key={'3'}
							tabLabel={'Module 3'}
							style={{
								flex: 1,
								backgroundColor: Viking,
								borderBottomLeftRadius: 25,
								borderBottomRightRadius: 25,
							}}
						/>
						<View
							key={'4'}
							tabLabel={'Module 4'}
							style={{
								flex: 1,
								backgroundColor: Viking,
								borderBottomLeftRadius: 25,
								borderBottomRightRadius: 25,
							}}
						/>
						<View
							key={'5'}
							tabLabel={'Module 5'}
							style={{
								flex: 1,
								backgroundColor: Viking,
								borderBottomLeftRadius: 25,
								borderBottomRightRadius: 25,
							}}
						/>
						<View
							key={'6'}
							tabLabel={'Module 6'}
							style={{
								flex: 1,
								backgroundColor: Viking,
								borderBottomLeftRadius: 25,
								borderBottomRightRadius: 25,
							}}
						/>
					</ScrollableTabView>
				</View>
				{
					renderText(
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
						' Aenean euismod bibendum laoreet. ' +
						'Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.' +
						' Proin sodales pulvinar sic' +
						' + tempor.Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' +
						' Namfermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,' +
						' sed rhoncus pronin sapiennunc accuan eget.',
						40)
				}
				<ImageBackground
					style={{
						width: Width - 10,
						height: Height / 3.5,
						marginBottom: 30,
						alignSelf: 'center'
					}}
					imageStyle={{
						borderRadius: 24,
					}}
					source={require('../../assets/image/image-test.png')}
				/>
				{
					renderText(
						'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
						' Aenean euismod bibendum laoreet. ' +
						'Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.' +
						' Proin sodales pulvinar sic' +
						' + tempor.Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.' +
						' Namfermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,' +
						' sed rhoncus pronin sapiennunc accuan eget.',
						60)
				}
				<View
					style={
						playVideo
							? {
								width: Width - 25,
								height: Height / 3.5,
								position: 'absolute',
								top: 120,
								left: 15,
								right: 15,
								bottom: 0,
								zIndex: 1
							}
							: {
								width: Width - 30,
								height: Height / 3.5,
								position: 'absolute',
								top: 120,
								bottom: 0,
								zIndex: 1
							}}
				>
					{
						playVideo
							? (
								<VideoPlayer
									videoProps={{
										shouldPlay: true,
										resizeMode: Video.RESIZE_MODE_CONTAIN,
										source: {
											uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
										},
									}}
									inFullscreen={true}
									showControlsOnLoad={true}
									showFullscreenButton={false}
									width={Width - 30}
									height={Height / 3.5}
								/>
							)
							: (
								<ImageBackground
									style={{
										width: Width,
										height: Height / 3.5,
										justifyContent: 'center',
										alignItems: 'center',
										marginBottom: 30,
									}}
									imageStyle={{
										borderRadius: 24,
									}}
									source={require('../../assets/image/image-video.png')}
								>
									<TouchableOpacity
										onPress={() => setPlayVideo(true)}
									>
										<Image
											source={require('../../assets/icon/icon-play-button.png')}
											style={{
												width: 35,
												height: 35
											}}
										/>
									</TouchableOpacity>
								</ImageBackground>
							)
					}
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
