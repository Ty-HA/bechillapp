import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Dimensions,
  ViewStyle,
} from 'react-native';
import Header from '../components/Header';
import {GlobalStyles as GS} from '../constants/GlobalStyles';
import {Colors} from '../constants/GlobalStyles';

const background = require('../../assets/img/BeChill_landing_bg.png');

const ChillSpaceScreen = () => {
  return (
    <ImageBackground
      source={background}
      style={styles.mainContainer}
      resizeMode="cover">
      <View>
        <Header />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.cloudSection}>
            <View style={styles.cloudWrapper}>
              <Image
                source={require('../../assets/img/cloud.png')}
                style={styles.cloudImage}
                resizeMode="contain"
              />
              <View style={styles.chillScoreContainer}>
                <Text style={styles.chillScoreTitle}>chill score</Text>
                <Text style={styles.chillScore}>76</Text>
              </View>
            </View>

            <Text style={styles.status}>
              your bag is mostly in sync — just a few tweaks away from smooth
              sailing.
            </Text>
            <View style={styles.button}>
              <Text style={GS.buttonSecondaryText}>IMPROVE</Text>
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>🎯 Your goal</Text>
            <Text style={styles.cardContent}>steady growth, low risk</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>📊 Portfolio</Text>
            <Text style={styles.cardValue}>$4,832</Text>
            <View style={styles.assetList}>
              <View
                style={[
                  styles.assetBar,
                  {backgroundColor: '#6F2CFF'} as ViewStyle,
                ]}
              />
              <Text style={styles.assetItem}>SOL</Text>
              <View
                style={[
                  styles.assetBar,
                  {backgroundColor: '#B4D8F8'} as ViewStyle,
                ]}
              />
              <Text style={styles.assetItem}>JTO</Text>
              <View
                style={[
                  styles.assetBar,
                  {backgroundColor: '#ADFF2F'} as ViewStyle,
                ]}
              />
              <View
                style={[
                  styles.assetBar,
                  {backgroundColor: '#ADFF2F'} as ViewStyle,
                ]}
              />
            </View>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardLabel}>↩️ Last action</Text>
            <Text style={styles.cardContent}>
              You rebalanced your portfolio 2 days ago. Smart move.
            </Text>
          </View>

          <View style={[styles.card, styles.comingSoon]}>
            <Text style={styles.cardLabel}>🕐 Objective (coming soon)</Text>
            <Text style={styles.cardContent}>Chill score › 80</Text>
            <Text style={styles.cardContent}>Set up a DCA plan</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 20,
    paddingBottom: 60,
  },
  cloudSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cloudImage: {
    width: width * 0.7, // avant : 0.5
    height: width * 0.5, // avant : 0.3
    marginBottom: 10,
  },

  cloudWrapper: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chillScoreContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chillScoreTitle: {
    paddingTop: 30,
    fontSize: 14,
    color: '#888',
    fontWeight: '500',
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  chillScore: {
    fontSize: 48,
    color: Colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  status: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#333',
    fontSize: 14,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 6,
  },
  cardContent: {
    fontSize: 14,
    fontWeight: '600',
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  assetList: {
    gap: 4,
    marginTop: 4,
  },
  assetItem: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 6,
  },
  assetBar: {
    height: 5,
    borderRadius: 4,
    width: '100%',
  },
  comingSoon: {
    backgroundColor: '#F5F5F5',
  },
});

export default ChillSpaceScreen;
