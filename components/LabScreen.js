import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import PracticeTracker from './PracticeTracker';
import Stopwatch from './Stopwatch';
import useStopwatch from '../hooks/useStopwatch';

export default function LabScreen() {
  // Requirement 2: LabScreen owns the solved count state and isRunning state
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Requirement 3 & 4: Call custom hook internally to receive seconds
  const seconds = useStopwatch(isRunning);

  // Requirement 2: Functional-update form of setter: setSolved(s => s + 1)
  const handleSolve = () => {
    setSolved((prevSolved) => prevSolved + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  // Requirement 5: Start and Stop handlers that toggle isRunning
  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Screen Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>IT313 Lab Session</Text>
        <Text style={styles.headerSubtitle}>Study Timer & Practice Tracker</Text>
      </View>

      {/* Sibling 1: Practice Tracker (receives state & handlers via props) */}
      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      {/* Sibling 2: Stopwatch (receives lifted seconds & isRunning via props) */}
      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      {/* Requirement 5 & 7: Start and Stop buttons passed as function references */}
      <View style={styles.timerControls}>
        <TouchableOpacity
          style={[styles.controlButton, styles.startButton, isRunning && styles.disabledButton]}
          onPress={handleStart}
          disabled={isRunning}
        >
          <Text style={styles.controlButtonText}>▶ Start Timer</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.controlButton, styles.stopButton, !isRunning && styles.disabledButton]}
          onPress={handleStop}
          disabled={!isRunning}
        >
          <Text style={styles.controlButtonText}>⏸ Stop Timer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    paddingBottom: 40,
    backgroundColor: '#f8fafc',
  },
  header: {
    marginBottom: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 15,
    color: '#64748b',
    marginTop: 4,
    fontWeight: '500',
  },
  timerControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  controlButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  startButton: {
    backgroundColor: '#16a34a',
  },
  stopButton: {
    backgroundColor: '#dc2626',
  },
  disabledButton: {
    opacity: 0.5,
  },
  controlButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
});