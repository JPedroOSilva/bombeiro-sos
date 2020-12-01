//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

// create a component
const BottomMenu = ({navigation, rootPage, backwards, forwards}) => {
    
    const ImageButton = ({onPress, source}) => (
        <TouchableOpacity 
            onPress={onPress}>
            <Image
                style = {styles.ImageButton} 
                source={source} />
        </TouchableOpacity>
    )

    return (
            <View style={styles.BottomMenu}>
                <ImageButton 
                    style = {styles.ImageButton}
                    source = {require('../assets/ArrowBackwards.png')}
                    onPress={() => {navigation.navigate( rootPage , { screen: backwards } )}} />

                <ImageButton 
                    style = {styles.ImageButton}
                    source = {require('../assets/Question.png')}
                    onPress={() => {navigation.push('indexPages')}} />
                
                <ImageButton 
                    
                    source = {require('../assets/ArrowForward.png')}
                    onPress={() => { navigation.navigate( rootPage , { screen: forwards } )}} />
            </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    BottomMenu:{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'space-evenly'
    },
    ImageButton:{
        marginVertical: 40,
        width: 50,
        height: 50
    }
});

//make this component available to the app
export default BottomMenu;
