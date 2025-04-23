import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import PrivyConnectScreen from './PrivyConnectScreen';

// import {Section} from '../components/Section';
import ConnectButton from '../components/ConnectButton';
import AccountInfo from '../components/AccountInfo';
import {
  useAuthorization,
  Account,
} from '../components/providers/AuthorizationProvider';
import {useConnection} from '../components/providers/ConnectionProvider';
// import SignMessageButton from '../components/SignMessageButton';
// import SignTransactionButton from '../components/SignTransactionButton';

export default function MainScreen() {
  const {connection} = useConnection();
  const {selectedAccount} = useAuthorization();
  const [balance, setBalance] = useState<number | null>(null);
  const [showWebView, setShowWebView] = useState(false);

  const fetchAndUpdateBalance = useCallback(
    async (account: Account) => {
      console.log('Fetching balance for: ' + account.publicKey);
      const fetchedBalance = await connection.getBalance(account.publicKey);
      console.log('Balance fetched: ' + fetchedBalance);
      setBalance(fetchedBalance);
    },
    [connection],
  );

  useEffect(() => {
    if (!selectedAccount) {
      return;
    }
    fetchAndUpdateBalance(selectedAccount);
  }, [fetchAndUpdateBalance, selectedAccount]);

  return (
    <View style={styles.mainContainer}>
      {showWebView ? (
        <PrivyConnectScreen onDone={() => setShowWebView(false)} />
      ) : (
        <>
          {/* Contenu central avec les boutons */}
          <View style={styles.contentContainer}>
            {selectedAccount ? (
              <>
                <View style={styles.accountContainer}>
                  <AccountInfo
                    selectedAccount={selectedAccount}
                    balance={balance}
                    fetchAndUpdateBalance={fetchAndUpdateBalance}
                  />

                  {/* Commenté: Boutons de signature de transaction et message
                  <View style={styles.buttonsContainer}>
                    <Section title="Sign a transaction">
                      <SignTransactionButton />
                    </Section>

                    <Section title="Sign a message">
                      <SignMessageButton />
                    </Section>
                  </View>
                  */}
                </View>
              </>
            ) : (
              <View style={styles.connectButtonContainer}>
                <ConnectButton
                  title="Connect wallet"
                  color="#8A2BE2" // Violet
                />
              </View>
            )}

            <View style={styles.privyButton}>
              <Button
                title="Connect with Privy"
                onPress={() => setShowWebView(true)}
                color="#000000" // Noir
              />
            </View>
          </View>

          {/* Footer avec l'information du cluster */}
          <View style={styles.footer}>
            <Text>Selected cluster: {connection.rpcEndpoint}</Text>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  accountContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  connectButtonContainer: {
    marginVertical: 10,
    borderRadius: 25,
    overflow: 'hidden',
    width: '50%',
  },
  buttonsContainer: {
    width: '100%',
    marginTop: 20,
  },
  privyButton: {
    marginTop: 4,
    width: '50%',
    borderRadius: 25,
    overflow: 'hidden',
  },
  footer: {
    padding: 16,
    alignItems: 'center',
  },
});
