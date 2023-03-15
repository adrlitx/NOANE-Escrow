import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useWalletConnect } from '@walletconnect/react-native-dapp';
import { loginStyles as styles } from './LoginStyles';

const Login = ({ navigation }) => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const connector = useWalletConnect();

  const handleConnectWallet = async () => {
    try {
      await connector.connect();
      setWalletConnected(true);
      setWalletAddress(connector.accounts[0]);
    } catch (error) {
      console.error('Failed to connect with WalletConnect', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login with WalletConnect</Text>
      {!walletConnected ? (
        <TouchableOpacity style={styles.button} onPress={handleConnectWallet}>
          <Text style={styles.buttonText}>Connect Wallet</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.connectedText}>
          Connected: {walletAddress}
        </Text>
      )}
    </View>
  );
};

export default Login;
