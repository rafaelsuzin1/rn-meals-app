import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const FavoritiesScreen = ({}) => {
   return (
       <View style={styles.screen}>
           <Text>Favorite Screen</Text>
       </View>
   )
}

export default FavoritiesScreen

const styles = StyleSheet.create({
   screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   }
})
