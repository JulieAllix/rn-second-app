import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    // ...styles.card will enable to add aditional styles after if necessary
    // ...props.style is placed after in order to override any style if necessary
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: '#fefafd',
        color: '#457b9d',
        padding: 20,
        borderRadius: 5,
    }
});

export default Card;