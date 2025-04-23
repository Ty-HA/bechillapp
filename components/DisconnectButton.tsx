import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import React, {ComponentProps, useState} from 'react';
import {Button, StyleSheet, View, Platform, Alert} from 'react-native';

import {useAuthorization} from './providers/AuthorizationProvider';

type Props = Readonly<ComponentProps<typeof Button>>;

export default function DisconnectButton(props: Props) {
  const {deauthorizeSession} = useAuthorization();
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const handleDisconnect = async () => {
    if (isDisconnecting) {
      return;
    }

    try {
      setIsDisconnecting(true);

      // On Android devices, wrap the disconnect in a try/catch
      await transact(async wallet => {
        await deauthorizeSession(wallet);
      });

      console.log('Successfully disconnected');
    } catch (error) {
      console.error('Error disconnecting wallet:', error);

      // Montrer une alerte pour les erreurs sur les appareils physiques
      if (Platform.OS === 'android' && !__DEV__) {
        Alert.alert(
          'Disconnect Error',
          'There was an issue disconnecting your wallet. Please try again.',
          [{text: 'OK'}],
        );
      }
    } finally {
      setIsDisconnecting(false);
    }
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        {...props}
        color="#FF6666"
        disabled={isDisconnecting}
        onPress={handleDisconnect}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: 'hidden',
    minWidth: 120,
  },
});
