import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import horario from './styles./horario.css';

const MedicationScreen = () => {
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowPicker(false);
    setTime(currentTime);
  };

  const showTimePicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicação</Text>
      
      <TouchableOpacity style={styles.timePickerContainer} onPress={showTimePicker}>
        <Text style={styles.label}>Escolher horário</Text>
        <View style={styles.timeDisplay}>
          <Text style={styles.timeText}>{time.getHours()}</Text>
          <Text style={styles.separator}>:</Text>
          <Text style={styles.timeText}>{time.getMinutes().toString().padStart(2, '0')}</Text>
        </View>
        <View style={styles.ampmContainer}>
          <Text style={[styles.ampmText, time.getHours() < 12 ? styles.am : styles.pm]}>
            {time.getHours() < 12 ? 'AM' : 'PM'}
          </Text>
        </View>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
      )}

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MedicationScreen;
