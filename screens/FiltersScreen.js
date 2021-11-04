import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
const FiltersScreen = () => {
    return(
        <View style={styles.screen}>
            <Text>This is FiltersScreen Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    }
})

export default FiltersScreen
