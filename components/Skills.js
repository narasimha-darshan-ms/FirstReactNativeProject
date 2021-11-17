import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import FlexRow from './GenericUIcomponents/FlexRow.js'
import SummaryContainer from './GenericUIcomponents/SummaryContainer'

import { skills_logo } from '../Constants/imageImports'

export default function Skills() {
    const skills = [skills_logo.HIVE, skills_logo.SPARK, skills_logo.SCALA, skills_logo.HADOOP, skills_logo.REACT, skills_logo.GIT]

    return (
        <View style={styles.container}>
            <FlexRow>
                <View style={{flex: 1, height: 1, backgroundColor: 'grey'}}/>
                <Text style={styles.headline}>Skills</Text>
                <View style={{flex: 1, height: 1, backgroundColor: 'grey'}}/>
            </FlexRow>
            <ScrollView horizontal={true}>
            {
                skills.map((element,index) => {
                    return (<Image key={index} style={styles.skillImageStyle} source={element} resizeMode='contain'/>)
                })
            }
            </ScrollView>
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
    },
    skillImageStyle: {
        width: 200,
        height: 100,
        marginHorizontal: 10
    }
});