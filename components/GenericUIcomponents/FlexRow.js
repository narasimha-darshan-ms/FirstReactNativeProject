import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export default function FlexRow(props) {
    return (
        <View style={styles.container}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: '2%',
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center'
    }
  }
);