import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AvailableDeliveriesScreen from '../screens/delivery/AvailableDeliveriesScreen';
import ActiveDeliveriesScreen from '../screens/delivery/ActiveDeliveriesScreen';
import DeliveryProfileScreen from '../screens/delivery/DeliveryProfileScreen';
import {StyleSheet} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type DeliveryTabParamList = {
  AvailableDeliveries: undefined;
  ActiveDeliveries: undefined;
  DeliveryProfile: undefined;
};

type DeliveryNavigatorProps = {
  logout: () => void;
};

const Tab = createBottomTabNavigator<DeliveryTabParamList>();

const DeliveryNavigator = ({logout}: DeliveryNavigatorProps) => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.textTertiary,
        tabBarStyle: styles.tabBar,
        headerStyle: {
          backgroundColor: theme.colors.background,
          ...theme.styles.shadowLight,
        },
        headerTitleStyle: [
          theme.typography.h5,
          {color: theme.colors.text},
        ],
      }}>
      <Tab.Screen
        name="AvailableDeliveries"
        options={{
          title: 'Disponibles',
          tabBarIcon: ({color, size}) => (
            <Icon name="bike" color={color} size={size} />
          ),
        }}>
        {props => <AvailableDeliveriesScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="ActiveDeliveries"
        options={{
          title: 'En cours',
          tabBarIcon: ({color, size}) => (
            <Icon name="map-marker" color={color} size={size} />
          ),
        }}>
        {props => <ActiveDeliveriesScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="DeliveryProfile"
        options={{
          title: 'Profil',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-outline" color={color} size={size} />
          ),
        }}>
        {props => <DeliveryProfileScreen {...props} logout={logout} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default DeliveryNavigator;
