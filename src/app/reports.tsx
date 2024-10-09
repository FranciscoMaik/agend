import React from 'react';
import { View } from 'react-native';
import { ContentPage } from '../components/ContentPage';
import { DrawerSceneWrapper } from '../components/drawer-scene-wrapper';

const Reports: React.FC = () => {
  return (
    <DrawerSceneWrapper>
      <ContentPage titlePage='Relatórios'/>
    </DrawerSceneWrapper>
  );
}

export default Reports;