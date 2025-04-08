import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigator';
import {useTheme} from '../../context/ThemeContext';

type WelcomeScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  'Welcome'
>;

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  const theme = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    backgroundImage: {
      flex: 1,
      justifyContent: 'space-between',
      padding: theme.sizes.padding,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0,0,0,0.3)',
    },
    logoContainer: {
      alignItems: 'center',
      marginTop: 60,
    },
    logo: {
      width: 150,
      height: 150,
    },
    logoText: {
      ...theme.typography.h1,
      color: theme.colors.background,
      fontWeight: '700',
      marginTop: theme.sizes.md,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    tagline: {
      ...theme.typography.h5,
      color: theme.colors.background,
      textAlign: 'center',
      marginTop: theme.sizes.sm,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    bottomContainer: {
      marginBottom: 40,
    },
    buttonPrimary: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.sizes.radiusMedium,
      padding: theme.sizes.md,
      alignItems: 'center',
      marginBottom: theme.sizes.md,
      ...theme.styles.shadowMedium,
    },
    buttonSecondary: {
      backgroundColor: 'transparent',
      borderRadius: theme.sizes.radiusMedium,
      padding: theme.sizes.md,
      alignItems: 'center',
      borderWidth: 2,
      borderColor: theme.colors.background,
    },
    buttonTextPrimary: {
      ...theme.typography.button,
      color: theme.colors.background,
    },
    buttonTextSecondary: {
      ...theme.typography.button,
      color: theme.colors.background,
    },
    features: {
      marginTop: theme.sizes.xxl,
      alignItems: 'center',
    },
    featureItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.sizes.md,
    },
    featureText: {
      ...theme.typography.body1,
      color: theme.colors.background,
      marginLeft: theme.sizes.sm,
      textShadowColor: 'rgba(0, 0, 0, 0.75)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 5,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../../assets/welcome-background.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.overlay} />

        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/clothly-logo-white.png')}
            style={styles.logo}
          />
          <Text style={styles.logoText}>Clothly</Text>
          <Text style={styles.tagline}>Vos vêtements préférés livrés</Text>

          <View style={styles.features}>
            <View style={styles.featureItem}>
              <Text style={styles.featureText}>
                • Livraison rapide de vêtements
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureText}>
                • Des milliers de produits disponibles
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureText}>
                • Paiement simple et sécurisé
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonTextPrimary}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSecondary}
            onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.buttonTextSecondary}>Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
