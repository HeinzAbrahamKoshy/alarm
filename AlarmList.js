import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// Sample alarm data for testing
const dummyAlarms = [
  { id: 1, time: '08:00 AM', repeat: 'Weekdays' },
  { id: 2, time: '12:00 PM', repeat: 'Daily' },
  { id: 3, time: '06:30 AM', repeat: 'Weekends' },
];

const AlarmList = ({ navigation }) => {
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    // For testing purposes, use dummyAlarms as initial data
    setAlarms(dummyAlarms);
  }, []);

  const renderAlarmItem = ({ item }) => (
    <TouchableOpacity style={styles.alarmItem} onPress={() => handleEditAlarm(item.id)}>
      <Text>{item.time}</Text>
      <Text>{item.repeat}</Text>
      <TouchableOpacity onPress={() => handleDeleteAlarm(item.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  const handleEditAlarm = (alarmId) => {
    // Navigation logic to navigate to Edit Alarm screen with alarmId
    navigation.navigate('EditAlarm', { alarmId });
  };

  const handleDeleteAlarm = (alarmId) => {
    // Delete logic here (e.g., remove item from AsyncStorage or API)
    const updatedAlarms = alarms.filter((alarm) => alarm.id !== alarmId);
    setAlarms(updatedAlarms);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={alarms}
        renderItem={renderAlarmItem}
        keyExtractor={(item) => item.id.toString()}
        ListEmptyComponent={<Text>No alarms found</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  alarmItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  deleteButton: {
    color: 'red',
  },
});

export default AlarmList;
