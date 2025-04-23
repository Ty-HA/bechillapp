import {transact} from '@solana-mobile/mobile-wallet-adapter-protocol-web3js';
import React, {ComponentProps} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {useAuthorization} from './providers/AuthorizationProvider';

type Props = Readonly<ComponentProps<typeof Button>>;

export default function DisconnectButton(props: Props) {
  const {deauthorizeSession} = useAuthorization();
  return (
    <View style={styles.buttonContainer}>
      <Button
        {...props}
        color="#FF6666" // Garder la couleur rouge existante
        onPress={() => {
          transact(async wallet => {
            await deauthorizeSession(wallet);
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    padding: 5,
    overflow: 'hidden', // Pour s'assurer que le bouton respecte le borderRadius
  },
});
