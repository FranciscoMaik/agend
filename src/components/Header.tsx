import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerToggleButton } from '@react-navigation/drawer';

interface HeaderProps {
    titlePage: string;
}

export const Header: React.FC<HeaderProps> = ({titlePage}) => {
  return (
    <View style={styles.container}>
        <View />
        <Text style={styles.title}> {titlePage} </Text>
      <DrawerToggleButton 
        tintColor='#9B6BB3'
      />

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#9B6BB3',
    },
});