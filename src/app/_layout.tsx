import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Feather } from '@expo/vector-icons';

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer 
        screenOptions={{ headerShown: false }}
      >
        <Drawer.Screen 
            name="index" 
            options={{ 
                drawerLabel: 'Agenda',
                drawerIcon: () => <Feather name="clock" size={24} color="black" />
            }}
        />
        <Drawer.Screen 
            name="reservations" 
            options={{ 
                drawerLabel: 'Minhas reservas',
                drawerIcon: () => <Feather name="calendar" size={24} color="black" />
            }}
        />
        <Drawer.Screen 
            name="reports" 
            options={{ 
                drawerLabel: 'Relatórios',
                drawerIcon: () => <Feather name="bar-chart" size={24} color="black" />
            }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
