import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

import FlexRow from './GenericUIcomponents/FlexRow.js'
import workExperience from '../Data/workExperience'
import SummaryContainer from './GenericUIcomponents/SummaryContainer'

export default function Experience() {
    return (
        <View style={styles.container}>
            <FlexRow>
                <View style={{flex: 1, height: 1, backgroundColor: 'grey'}}/>
                <Text style={styles.headline}>Experience</Text>
                <View style={{flex: 1, height: 1, backgroundColor: 'grey'}}/>
            </FlexRow>
            { workExperience.map((exp) => 
                <SummaryContainer 
                    key = {exp.id}
                    logo = {exp.logo}
                    containerHeading = {exp.containerHeading}
                    location = {exp.location}
                    containerContent = {exp.containerContent}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: '2%',
    },
    headline: {
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0081bd',
        paddingHorizontal: 10,
    }
});