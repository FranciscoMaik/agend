import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Feather } from '@expo/vector-icons';
import { Text, TouchableOpacity } from 'react-native';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveBackgroundColor: 'transparent',
          drawerInactiveTintColor: '#EFCFFF',
          drawerActiveTintColor: '#FF99FF',
          drawerHideStatusBarOnOpen: true,
          overlayColor: 'transparent',
          drawerStyle: {
            backgroundColor: '#9B6BB3',
            paddingTop: 20,
            width: '53%',
          },
          drawerLabelStyle: {
            marginLeft: -24,
          },
          sceneContainerStyle: {
            backgroundColor: '#9B6BB3',
          }
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Agenda',
            drawerIcon: ({ color }) => <Feather name="clock" size={24} color={color} />
          }}
        />
        <Drawer.Screen
          name="reservations"
          options={{
            drawerLabel: 'Minhas reservas',
            drawerIcon: ({ color }) => <Feather name="calendar" size={24} color={color} />
          }}
        />
        <Drawer.Screen
          name="reports"
          options={{
            drawerLabel: 'Relatórios',
            drawerIcon: ({ color }) => <Feather name="bar-chart" size={24} color={color} />
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
