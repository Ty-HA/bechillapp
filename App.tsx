import {
  ConnectionProvider,
  RPC_ENDPOINT,
} from './components/providers/ConnectionProvider';
import {clusterApiUrl} from '@solana/web3.js';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {AuthorizationProvider} from './components/providers/AuthorizationProvider';
import {Header} from './components/Header';
import MainScreen from './screens/MainScreen';
import InfoScreen from './screens/InfoScreen';
import BottomBar from './components/BottomBar';
import {useAuthorization} from './components/providers/AuthorizationProvider';

// Composant de navigation personnalisé qui utilise le context d'autorisation
const NavigationContent = () => {
  const [activeScreen, setActiveScreen] = useState('wallet');
  const {selectedAccount} = useAuthorization();
  const isConnected = !!selectedAccount;

  // Réinitialiser à l'écran wallet quand l'utilisateur se connecte/déconnecte
  useEffect(() => {
    setActiveScreen('wallet');
  }, [isConnected]);

  // Si non connecté, afficher uniquement l'écran de connexion
  if (!isConnected) {
    return <MainScreen />;
  }

  // Si connecté, afficher l'écran actif et la barre de navigation
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.screenContainer}>
        {activeScreen === 'wallet' ? <MainScreen /> : <InfoScreen />}
      </View>
      <BottomBar activeScreen={activeScreen} onScreenChange={setActiveScreen} />
    </View>
  );
};

// Composant principal App
export default function App() {
  return (
    <ConnectionProvider
      config={{commitment: 'processed'}}
      endpoint={clusterApiUrl(RPC_ENDPOINT)}>
      <AuthorizationProvider>
        <SafeAreaView style={styles.shell}>
          <Header />
          <NavigationContent />
        </SafeAreaView>
      </AuthorizationProvider>
    </ConnectionProvider>
  );
}

const styles = StyleSheet.create({
  shell: {
    height: '100%',
  },
  navigationContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  screenContainer: {
    flex: 1,
  },
});
