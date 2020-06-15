import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    Dimensions, 
    TouchableNativeFeedback
} from 'react-native';

import Colors from '../constants/themeColors';
import BodyText from '../components/BodyText';

const MainButton = props => {
    const [buttonWidth, setButtonWidth] = useState(Dimensions.get('window').width / 4);

    let ButtonComponent = TouchableOpacity;
/*
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    };
*/
    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        };
    
        Dimensions.addEventListener('change', updateLayout);
        
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

    return (
        <ButtonComponent style={{...styles.button, width:buttonWidth}} onPress={props.onPress}>
            <BodyText style={styles.text}>
                {props.children}
            </BodyText>
        </ButtonComponent>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        padding: Dimensions.get('window').width < 400 ? 5 : 10,
        marginVertical: 10,
        borderRadius: 5,
        //width: 115
    },
    text: {
        color: Colors.light,
        textAlign: 'center',
        fontSize: Dimensions.get('window').width < 400 ? 11 : 16,
    },
});

export default MainButton;