import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * Écran d'informations simple
 */
function InfoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solana Mobile</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>À propos de cette application</Text>
        <Text style={styles.infoText}>
          Cette application est construite avec React Native pour les appareils
          Solana Mobile. Elle permet aux utilisateurs de se connecter à leur
          portefeuille Solana et de visualiser leurs informations de compte.
        </Text>

        <Text style={styles.infoTitle}>Fonctionnalités</Text>
        <Text style={styles.infoText}>
          • Connexion au portefeuille via Mobile Wallet Adapter{'\n'}• Affichage
          du solde de compte{'\n'}• Connexion alternative via Privy{'\n'}•
          Navigation simple entre les écrans
        </Text>

        <Text style={styles.version}>Version 0.0.1</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#8A2BE2', // Violet
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 30,
    color: '#666',
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#f5f5f5',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color: '#333',
  },
  infoText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#444',
    marginBottom: 16,
  },
  version: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default InfoScreen;
