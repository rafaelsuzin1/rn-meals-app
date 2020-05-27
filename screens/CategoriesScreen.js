import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'

import { CATEGORIES } from '../data/dummy-data'
import Colors from '../constants/Colors'

const { OS } = Platform

const CategoriesScreen = ({ navigation }) => {

    const renderItemGrid = itemData => {
        return (
            <TouchableOpacity 
                style={styles.gridItem}
                onPress={() => {
                    navigation.navigate({
                        routeName: 'CategoryMeals', 
                        params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            numColumns={2}
            renderItem={renderItemGrid}


        />
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    headerStyle: {
        backgroundColor: OS === 'android' ?  Colors.colorPrimary : ''
    },
    headerTintColor: OS === 'android' ? 'white' : Colors.colorPrimary
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
})


export default CategoriesScreen
