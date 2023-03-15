import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { userManagementStyles as styles } from './UserManagementStyles';

const UserManagement = () => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleUserSelection = (user) => {
    setSelectedUser(user);
  };

  const users = [
    { id: 1, name: 'User1' },
    { id: 2, name: 'User2' },
    { id: 3, name: 'User3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Management</Text>
      {users.map((user) => (
        <TouchableOpacity
          key={user.id}
          style={styles.userButton}
          onPress={() => handleUserSelection(user.name)}
        >
          <Text style={styles.buttonText}>{user.name}</Text>
        </TouchableOpacity>
      ))}
      {selectedUser && (
        <Text style={styles.selectedUser}>Selected User: {selectedUser}</Text>
      )}
    </View>
  );
};

export default UserManagement;
