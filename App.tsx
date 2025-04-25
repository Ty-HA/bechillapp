import {
  ConnectionProvider,
  RPC_ENDPOINT,
} from './src/components/providers/ConnectionProvider';
import {clusterApiUrl} from '@solana/web3.js';
import React, {useState, useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {AuthorizationProvider} from './src/components/providers/AuthorizationProvider';
import {Header} from './src/components/Header';
import MainScreen from './src/screens/MainScreen';
import InfoScreen from './src/screens/InfoScreen';
import BottomBar from './src/components/BottomBar';
import {useAuthorization} from './src/components/providers/AuthorizationProvider';

// Composants de placeholder pour les nouveaux écrans
const ProfileScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderTitle}>Profil d'Investisseur</Text>
    <Text style={styles.placeholderText}>
      Votre profil sera déterminé en analysant votre historique de transactions
      et vos réponses à notre questionnaire sur votre tolérance au risque.
    </Text>
    <View style={styles.comingSoonBadge}>
      <Text style={styles.comingSoonText}>Bientôt disponible</Text>
    </View>
  </View>
);

const StrategyScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderTitle}>Stratégie d'Investissement</Text>
    <Text style={styles.placeholderText}>
      Créez une stratégie personnalisée avec notre IA pour atteindre vos
      objectifs financiers sur Solana. Définissez des étapes claires et suivez
      votre progression.
    </Text>
    <View style={styles.comingSoonBadge}>
      <Text style={styles.comingSoonText}>Bientôt disponible</Text>
    </View>
  </View>
);

const ActionsScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderTitle}>Actions Recommandées</Text>
    <Text style={styles.placeholderText}>
      Vos transactions recommandées et DCA planifiés apparaîtront ici. Autorisez
      Privy pour des signatures automatisées et suivez vos habitudes
      d'investissement.
    </Text>
    <View style={styles.comingSoonBadge}>
      <Text style={styles.comingSoonText}>Bientôt disponible</Text>
    </View>
  </View>
);

const LearnScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderTitle}>Ressources Éducatives</Text>
    <Text style={styles.placeholderText}>
      Accédez à des contenus éducatifs personnalisés, des actualités et des
      alpha pour améliorer vos compétences d'investissement.
    </Text>
    <View style={styles.comingSoonBadge}>
      <Text style={styles.comingSoonText}>Bientôt disponible</Text>
    </View>
  </View>
);

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

  // Sélection de l'écran actif
  const renderActiveScreen = () => {
    switch (activeScreen) {
      case 'wallet':
        return <MainScreen />;
      case 'info':
        return <InfoScreen />;
      case 'profile':
        return <ProfileScreen />;
      case 'strategy':
        return <StrategyScreen />;
      case 'actions':
        return <ActionsScreen />;
      case 'learn':
        return <LearnScreen />;
      default:
        return <MainScreen />;
    }
  };

  // Si connecté, afficher l'écran actif et la barre de navigation
  return (
    <View style={styles.navigationContainer}>
      <View style={styles.screenContainer}>{renderActiveScreen()}</View>
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
  placeholderScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  placeholderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A2BE2',
    marginBottom: 20,
    textAlign: 'center',
  },
  placeholderText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
    color: '#444',
  },
  comingSoonBadge: {
    backgroundColor: '#FFC107',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  comingSoonText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
