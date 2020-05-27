import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

const MealDetailScreen = ({navigation}) => {
   return (
       <View style={styles.screen}>
           <Text>Meal Detail Screen! </Text>
       </View>
   )
}

export default MealDetailScreen

const styles = StyleSheet.create({
   screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   }
})
