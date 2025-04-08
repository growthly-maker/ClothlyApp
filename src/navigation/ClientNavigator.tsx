import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/client/HomeScreen';
import OrdersScreen from '../screens/client/OrdersScreen';
import ProfileScreen from '../screens/client/ProfileScreen';
import {StyleSheet} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export type ClientTabParamList = {
  Home: undefined;
  Orders: undefined;
  Profile: undefined;
};

type ClientNavigatorProps = {
  logout: () => void;
};

const Tab = createBottomTabNavigator<ClientTabParamList>();

const ClientNavigator = ({logout}: ClientNavigatorProps) => {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: theme.colors.primary,
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
        name="Home"
        options={{
          title: 'Magasins',
          tabBarIcon: ({color, size}) => (
            <Icon name="home-outline" color={color} size={size} />
          ),
        }}>
        {props => <HomeScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Orders"
        options={{
          title: 'Commandes',
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-outline" color={color} size={size} />
          ),
        }}>
        {props => <OrdersScreen {...props} />}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          title: 'Profil',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-outline" color={color} size={size} />
          ),
        }}>
        {props => <ProfileScreen {...props} logout={logout} />}
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

export default ClientNavigator;
