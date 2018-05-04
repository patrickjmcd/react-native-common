import React from 'react';
import { View, Text } from 'react-native';

const ValueDisplay = ({ label, value }) => {
    const { labelStyle, valueStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <Text style={valueStyle}>{value}</Text>
        </View>
    );
};

const styles = {
    labelStyle: {
        fontSize: 14,
        paddingLeft: 20,
        flex: 3
    },
    valueStyle: {
        color: '#000',
        paddingRight: 20,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'right',
        flex: 3
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    }
};


export { ValueDisplay };
