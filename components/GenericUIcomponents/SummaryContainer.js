import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import FlexRow from './FlexRow.js'

export default function SummaryContainer(props) {
	const l = "../../Images/walmart.jpeg"
  return (
		<>
			<FlexRow>
				<Image style={styles.logo}  source={props.logo}  />
				<Text style={styles.containerHeading}>{props.containerHeading}</Text>
			</FlexRow>
			<Text style={styles.location}>{props.location}</Text>
			<Text style={styles.containerContent}>{props.containerContent}</Text>
		</>
  )
}

const styles = StyleSheet.create({
	logo: {
    width: 30,
    height: 30,
  },
  containerHeading: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingHorizontal: 15
  },
  containerContent: {
		marginHorizontal: '5%',
		marginBottom: '2%'
  },
	location: {
		textTransform: 'uppercase',
		color: 'grey',
		marginHorizontal: '2%'
	}
});