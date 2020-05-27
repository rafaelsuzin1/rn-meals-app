import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

const CategoryMealsScreen = ({navigation}) => {
    const categoryId = navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryId)

   return (
       <View style={styles.screen}>
           <Text>Category Meal Screen !</Text>
            <Text>{selectedCategory.title}</Text>
           <Button title='Go to Meal Detail!' onPress={() => {
               navigation.navigate({
                   routeName: 'MealDetail'
               })
           }} />

            <Button title='Go Back!' onPress={() => {
               navigation.pop();
           }} />
       </View>
   )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({
   screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   }
})
