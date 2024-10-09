import React from 'react';
import { SectionList, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ContentPage } from '../components/ContentPage';
import { PrimaryButton } from '../components/buttons/PrimaryButton';
import { SecondaryButton } from '../components/buttons/SecondaryButton';
import { DrawerSceneWrapper } from '../components/drawer-scene-wrapper';

const Reservations: React.FC = () => {
  return (
    <DrawerSceneWrapper>
      <ContentPage titlePage='Minhas reservas'>
        <SectionList
          sections={[
            { title: new Date('2024-07-12').toISOString().split('T')[0], data: ['Reserva 2'] },
            { title: new Date('2024-08-12').toISOString().split('T')[0], data: ['Reserva 4'] },
          ]}
          renderItem={() => <View style={{ gap: 10, marginTop: 24, marginBottom: 26 }}>
            <PrimaryButton title='Remarcar' />
            <SecondaryButton title='Cancelar' />
          </View>}
          renderSectionHeader={({ section }) => <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <Feather name='calendar' size={18} color='#9B6BB3' />
            <Text style={{ fontSize: 16, color: '#9B6BB3' }}>{section.title} </Text>
          </View>}
          keyExtractor={(item, index) => index.toString()}
          style={{ padding: 10 }}
        />
      </ContentPage>
    </DrawerSceneWrapper>
  );
}

export default Reservations;