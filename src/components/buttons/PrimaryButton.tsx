import React from 'react';
import { StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

interface PrimaryButtonProps extends TouchableOpacityProps {
    title: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.button} >
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        borderColor: '#FF99FF',
        borderWidth: 1,
    },
    text: {
        color: '#9B6BB3',
        fontSize: 14,
    }
})