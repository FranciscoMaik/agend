import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Header } from "./Header";


interface ContentPageProps {
    titlePage: string;
    children?: React.ReactNode;
}

export const ContentPage: React.FC<ContentPageProps> = ({children, titlePage}) => {
  return (
    <LinearGradient
      colors={['#EECCFF', '#FFFFFF']}
      style={{ flex: 1, paddingTop: 60 }}
    >
      <Header titlePage={titlePage} />
        <View style={{ flex: 1 }}>
            {children}
        </View>
    </LinearGradient>
  );
}