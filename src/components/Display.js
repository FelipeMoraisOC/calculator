import React from 'react'
import { View, StyleSheet, BackHandler, Text } from 'react-native'


const styles = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#708090',
        alignItems: 'flex-end'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})

export default props => 
        <View style={styles.display}>
            <Text style={styles.displayValue} numberOfLines={1}>{props.value}</Text>
        </View>
