import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { dashboardStyles as styles } from './DashboardStyles';

const Dashboard = ({ navigation }) => {
  const handleLogout = () => {
    // Handle logout logic here
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Welcome to the Dashboard</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
