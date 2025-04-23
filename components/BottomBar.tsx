import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

/**
 * Composant BottomBar personnalisé pour la navigation
 * @param {Object} props - Les propriétés du composant
 * @param {string} props.activeScreen - L'écran actif ("wallet", "info", etc.)
 * @param {Function} props.onScreenChange - Fonction appelée lors d'un changement d'écran
 */
const BottomBar = ({activeScreen, onScreenChange}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tabItem, activeScreen === 'wallet' && styles.activeTab]}
        onPress={() => onScreenChange('wallet')}>
        <Text
          style={[
            styles.tabText,
            activeScreen === 'wallet' && styles.activeText,
          ]}>
          💰 Wallet
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tabItem, activeScreen === 'info' && styles.activeTab]}
        onPress={() => onScreenChange('info')}>
        <Text
          style={[
            styles.tabText,
            activeScreen === 'info' && styles.activeText,
          ]}>
          ℹ️ Info
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    elevation: 8, // Ombre pour Android
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeTab: {
    backgroundColor: 'rgba(138, 43, 226, 0.1)',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeText: {
    color: '#8A2BE2', // Violet
    fontWeight: 'bold',
  },
});

export default BottomBar;
