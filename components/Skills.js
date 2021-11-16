import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import FlexRow from './GenericUIcomponents/FlexRow.js'
import SummaryContainer from './GenericUIcomponents/SummaryContainer'

export default function Skills() {
    const skillsImages = [require('../Images/SkillsLogo/Hive.png'), require('../Images/SkillsLogo/Apache_Spark.png'),require('../Images/SkillsLogo/Scala.png'), require('../Images/SkillsLogo/Hadoop.png'),require('../Images/SkillsLogo/React.png'), require('../Images/SkillsLogo/git.png')]


    return (
        <View style={styles.container}>
            <FlexRow>
                <View style={{flex: 1, height: 1, backgroundColor: 'grey'}}/>
                <Text style={styles.headline}>Skills</Text>
                <View style={{flex: 1, height: 1, backgroundColor: 'grey'}}/>
            </FlexRow>
            <ScrollView horizontal={true}>
            {
                skillsImages.map((element,index) => {
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