import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { trackingInfoStyles as styles } from './TrackingInfoStyles';

const TrackingInfo = () => {
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrack = () => {
    // Handle tracking logic here
    console.log('Tracking number:', trackingNumber);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracking Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter tracking number"
        onChangeText={setTrackingNumber}
        value={trackingNumber}
      />
      <TouchableOpacity style={styles.button} onPress={handleTrack}>
        <Text style={styles.buttonText}>Track</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TrackingInfo;
