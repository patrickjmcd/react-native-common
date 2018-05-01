import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, onChangeText, value, placeholder, 
    autoCorrect, autoCapitalize, secureTextEntry, keyboardType }) => {
    const { labelStyle, inputStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                autoCorrect={autoCorrect}
                secureTextEntry={secureTextEntry}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                style={inputStyle}
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};


export { Input };
