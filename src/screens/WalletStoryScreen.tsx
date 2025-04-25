import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Colors, Fonts} from '../constants/GlobalStyles';

// Définir le type pour une page de la story
interface StoryPage {
  id: string;
  title: string;
  description: string;
  value: string;
  backgroundColor: string;
}

// Props pour l'écran WalletStory
interface WalletStoryScreenProps {
  onComplete: () => void;
}

const WalletStoryScreen = ({onComplete}: WalletStoryScreenProps) => {
  // Données factices pour la story (dans un cas réel, elles viendraient d'une API)
  const storyPages: StoryPage[] = [
    {
      id: '1',
      title: 'Your Monthly Return',
      description: 'You outperformed the market by',
      value: '+12.8%',
      backgroundColor: '#7B4EFF',
    },
    {
      id: '2',
      title: 'Top Performer',
      description: 'Your best asset this month was',
      value: 'SOLANA',
      backgroundColor: '#FF6B6B',
    },
    {
      id: '3',
      title: 'Transaction Volume',
      description: 'You completed',
      value: '27 TRADES',
      backgroundColor: '#4CAF50',
    },
    {
      id: '4',
      title: 'Portfolio Diversification',
      description: 'Your portfolio spread across',
      value: '6 ASSETS',
      backgroundColor: '#2196F3',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const {width} = Dimensions.get('window');

  // Gérer le clic pour passer à la page suivante
  const goToNextPage = () => {
    if (currentIndex < storyPages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      flatListRef.current?.scrollToIndex({
        index: currentIndex + 1,
        animated: true,
      });
    } else {
      // Si c'est la dernière page, terminer la story
      onComplete();
    }
  };

  // Gérer le clic pour revenir à la page précédente
  const goToPrevPage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      flatListRef.current?.scrollToIndex({
        index: currentIndex - 1,
        animated: true,
      });
    }
  };

  // Rendu d'une page individuelle de la story
  const renderStoryPage = ({item, index}: {item: StoryPage; index: number}) => {
    return (
      <View
        style={[
          styles.storyPageContainer,
          {width, backgroundColor: item.backgroundColor},
        ]}>
        {/* Barre de progression en haut */}
        <View style={styles.progressBarContainer}>
          {storyPages.map((_, i) => (
            <View
              key={i}
              style={[
                styles.progressBar,
                {
                  backgroundColor:
                    i <= currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                  width: `${100 / storyPages.length - 2}%`,
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.storyContentContainer}>
          <Text style={styles.storyTitle}>{item.title}</Text>
          <Text style={styles.storyDescription}>{item.description}</Text>
          <Text style={styles.storyValue}>{item.value}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={storyPages}
        renderItem={renderStoryPage}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        keyExtractor={item => item.id}
      />

      {/* Zones tactiles pour naviguer */}
      <TouchableOpacity
        style={[styles.navTouchArea, styles.leftTouchArea]}
        onPress={goToPrevPage}
      />
      <TouchableOpacity
        style={[styles.navTouchArea, styles.rightTouchArea]}
        onPress={goToNextPage}
      />

      {/* Bouton de fermeture */}
      <TouchableOpacity style={styles.closeButton} onPress={onComplete}>
        <Text style={styles.closeButtonText}>✕</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  storyPageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
  },
  progressBarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: 10,
    width: '100%',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  progressBar: {
    height: 3,
    borderRadius: 3,
    marginHorizontal: 2,
  },
  storyContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  storyTitle: {
    fontFamily: Fonts.Monument,
    fontSize: 28,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  storyDescription: {
    fontFamily: Fonts.DMSerif,
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    marginBottom: 10,
    textAlign: 'center',
  },
  storyValue: {
    fontFamily: Fonts.Monument,
    fontSize: 48,
    color: 'white',
    marginTop: 20,
    textAlign: 'center',
  },
  navTouchArea: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
  },
  leftTouchArea: {
    left: 0,
  },
  rightTouchArea: {
    right: 0,
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default WalletStoryScreen;
