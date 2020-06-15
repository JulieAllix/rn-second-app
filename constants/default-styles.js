import { StyleSheet } from 'react-native';
import Colors from '../constants/themeColors';

export default StyleSheet.create({
    headerText: {
        fontFamily: 'lobster',
        color: Platform.OS === 'android' ? Colors.light : Colors.accent,
        fontSize: 28,
    }
});