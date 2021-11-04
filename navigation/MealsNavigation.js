import {Platform} from 'react-native'
import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors'

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen:CategoryMealScreen,
        navigationOptions:{
            headerTintColor: Platform.OS === 'android' ? 'white' : 'red'
        }
    },
    MealDetail: MealDetailScreen
},
{
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ""
        }, 
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
})

export default createAppContainer(MealsNavigator)