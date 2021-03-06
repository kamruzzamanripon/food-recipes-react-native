import React from 'react'
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity, Platform} from 'react-native'
import { CATEGORIES } from '../data/dummy-data';
import Colors from '../constants/Colors'
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = (props) => {
    console.log(props)

    const renderGridItem = itemData => {
        return <CategoryGridTile 
        title={itemData.item.title} 
        color={itemData.item.color}
        onSelect={()=>{
            props.navigation.navigate({ routeName: 'CategoryMeals', params:{categoryId: itemData.item.id}})
        }} />
      };

    return(
        <FlatList
        data={CATEGORIES}
        keyExtractor={(item, index) => item.id}
        renderItem={renderGridItem}
        numColumns={2}
      />
    )
}

CategoriesScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Meal Categories',
    headerLeft: (
      <Text
      title="Menu"
      iconName="ios-menu"
      onPress={() => {
        navData.navigation.toggleDrawer();
      }}
    >Menu</Text>
      
    )
  };
  };

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    gridItem:{
        flex:1,
        margin:15,
        height:150
    }
})

export default CategoriesScreen
