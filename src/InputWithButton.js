import React from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';

const InputWithButton = ({ label, onChangeText, value, placeholder, 
    autoCorrect, autoCapitalize, secureTextEntry, keyboardType, 
    onButtonPress, buttonText }) => {
    const { labelStyle, inputStyle, containerStyle, buttonStyle, buttonTextStyle } = styles;
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
            <TouchableOpacity onPress={onButtonPress} style={buttonStyle}>
                <Text style={buttonTextStyle}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 3
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
    },

    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};


export { InputWithButton };
