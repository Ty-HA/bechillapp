import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import React, {ComponentProps, useState, useCallback} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {useAuthorization} from './providers/AuthorizationProvider';
import {alertAndLog} from '../util/alertAndLog';

type Props = Readonly<ComponentProps<typeof Button>>;

export default function ConnectButton(props: Props) {
  const {authorizeSession} = useAuthorization();
  const [authorizationInProgress, setAuthorizationInProgress] = useState(false);
  const handleConnectPress = useCallback(async () => {
    try {
      if (authorizationInProgress) {
        return;
      }
      setAuthorizationInProgress(true);
      await transact(async wallet => {
        await authorizeSession(wallet);
      });
    } catch (err: any) {
      alertAndLog(
        'Error during connect',
        err instanceof Error ? err.message : err,
      );
    } finally {
      setAuthorizationInProgress(false);
    }
  }, [authorizationInProgress, authorizeSession]);

  return (
    <View style={styles.buttonContainer}>
      <Button
        {...props}
        disabled={authorizationInProgress}
        onPress={handleConnectPress}
        color="#8A2BE2" // Couleur violette pour le bouton
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 0,
    padding: 5,
    overflow: 'hidden', // Assure que le contenu (y compris le bouton) respecte les bords arrondis
  },
});
