import React from 'react';
import { StyleSheet, Text, TouchableOpacityProps } from 'react-native';
import { TouchableOpacity } from 'react-native';

interface SecondaryButtonProps extends TouchableOpacityProps {
  title: string;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({title, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
        backgroundColor: '#FF99FF',
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14,
    }
})