import React from 'react';
import { View, Text } from 'react-native';

const ValueDisplay = ({ label, value, units }) => {
    const { labelStyle, valueStyle, containerStyle, unitsStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <Text style={valueStyle}>{value}</Text>
            <Text style={unitsStyle}>{units}</Text>
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
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 16,
        lineHeight: 23,
        textAlign: 'right',
        flex: 2
    },
    unitsStyle: {
        fontSize: 10,
        flex: 1,
        textAlign: 'right',
        paddingRight: 20
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
