  import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CreateAlarmPage = ({ navigation }) => {
  const [time, setTime] = useState('');
  const [repeatDays, setRepeatDays] = useState([]);
  const [label, setLabel] = useState('');

  const handleSave = () => {
    // Handle saving the alarm data (e.g., to a database or state management)
    const newAlarm = {
      time,
      repeatDays,
      label,
    };
    console.log('New Alarm:', newAlarm);
    // You can add logic here to save the alarm data and navigate to the alarm list page
    navigation.navigate('AlarmList');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Alarm</Text>
      <TextInput
        style={styles.input}
        placeholder="Time (HH:MM)"
        value={time}
        onChangeText={setTime}
        keyboardType="numeric"
      />
      {/* Add repeat days selection here */}
      <TextInput
        style={styles.input}
        placeholder="Label"
        value={label}
        onChangeText={setLabel}
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Alarm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CreateAlarmPage;
