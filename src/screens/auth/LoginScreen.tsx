import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigator';
import {useTheme} from '../../context/ThemeContext';

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'> & {
  authFunctions: {
    loginAsClient: () => void;
    loginAsDelivery: () => void;
    logout: () => void;
  };
};

const LoginScreen = ({navigation, authFunctions}: LoginScreenProps) => {
  const theme = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<'client' | 'delivery'>('client');

  const handleLogin = () => {
    // Ici, on simule la connexion sans vérification réelle
    if (userType === 'client') {
      authFunctions.loginAsClient();
    } else {
      authFunctions.loginAsDelivery();
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContent: {
      flexGrow: 1,
      justifyContent: 'center',
      padding: theme.sizes.padding,
    },
    logo: {
      alignSelf: 'center',
      width: 120,
      height: 120,
      marginBottom: theme.sizes.lg,
    },
    heading: {
      ...theme.typography.h2,
      color: theme.colors.text,
      marginBottom: theme.sizes.sm,
      textAlign: 'center',
    },
    subheading: {
      ...theme.typography.body1,
      color: theme.colors.textSecondary,
      marginBottom: theme.sizes.xl,
      textAlign: 'center',
    },
    input: {
      ...theme.typography.body1,
      backgroundColor: theme.colors.card,
      borderRadius: theme.sizes.radiusMedium,
      padding: theme.sizes.md,
      marginBottom: theme.sizes.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    toggleContainer: {
      flexDirection: 'row',
      borderRadius: theme.sizes.radiusMedium,
      marginBottom: theme.sizes.lg,
      backgroundColor: theme.colors.card,
      padding: 4,
      ...theme.styles.shadowLight,
    },
    toggleButton: {
      flex: 1,
      padding: theme.sizes.sm,
      alignItems: 'center',
      borderRadius: theme.sizes.radiusSmall,
    },
    toggleActive: {
      backgroundColor: userType === 'client' ? theme.colors.primary : theme.colors.secondary,
    },
    toggleText: {
      ...theme.typography.button,
      fontSize: 14,
    },
    toggleActiveText: {
      color: theme.colors.background,
    },
    toggleInactiveText: {
      color: theme.colors.textSecondary,
    },
    loginButton: {
      backgroundColor: userType === 'client' ? theme.colors.primary : theme.colors.secondary,
      borderRadius: theme.sizes.radiusMedium,
      padding: theme.sizes.md,
      alignItems: 'center',
      marginTop: theme.sizes.sm,
      ...theme.styles.shadowLight,
    },
    loginButtonText: {
      ...theme.typography.button,
      color: theme.colors.background,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: theme.sizes.lg,
    },
    footerText: {
      ...theme.typography.body2,
      color: theme.colors.textSecondary,
    },
    signupText: {
      ...theme.typography.body2,
      color: userType === 'client' ? theme.colors.primary : theme.colors.secondary,
      fontWeight: '600',
      marginLeft: theme.sizes.xs,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Image
            source={require('../../assets/clothly-logo-placeholder.png')}
            style={styles.logo}
          />
          <Text style={styles.heading}>Connexion</Text>
          <Text style={styles.subheading}>
            Entrez vos informations pour vous connecter
          </Text>

          <View style={styles.toggleContainer}>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                userType === 'client' && styles.toggleActive,
              ]}
              onPress={() => setUserType('client')}>
              <Text
                style={[
                  styles.toggleText,
                  userType === 'client'
                    ? styles.toggleActiveText
                    : styles.toggleInactiveText,
                ]}>
                Client
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.toggleButton,
                userType === 'delivery' && styles.toggleActive,
              ]}
              onPress={() => setUserType('delivery')}>
              <Text
                style={[
                  styles.toggleText,
                  userType === 'delivery'
                    ? styles.toggleActiveText
                    : styles.toggleInactiveText,
                ]}>
                Livreur
              </Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Mot de passe"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Se connecter</Text>
          </TouchableOpacity>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Pas encore de compte ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.signupText}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
