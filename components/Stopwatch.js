import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * Helper function to format seconds into "MM:SS" (e.g., 05:09 or 00:00)
 */
function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;
  const pad = (num) => String(num).padStart(2, '0');
  return `${pad(minutes)}:${pad(remainingSeconds)}`;
}

/**
 * Requirement 4: Functional component that receives `seconds` and `isRunning` as props.
 * Displays elapsed time and conditional status text ("Running…" or "Paused").
 */
export default function Stopwatch({ seconds, isRunning }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Lab Session Timer</Text>

      {/* Formatted time display (MM:SS) */}
      <Text style={styles.timeText}>{formatTime(seconds)}</Text>

      {/* Conditional rendering for status badge */}
      <View style={[styles.statusBadge, isRunning ? styles.runningBadge : styles.pausedBadge]}>
        <Text style={[styles.statusText, isRunning ? styles.runningText : styles.pausedText]}>
          {isRunning ? "● Running…" : "❚❚ Paused"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  timeText: {
    fontSize: 48,
    fontWeight: '800',
    color: '#0f172a',
    letterSpacing: 2,
    marginVertical: 10,
    fontVariant: ['tabular-nums'],
  },
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginTop: 4,
  },
  runningBadge: {
    backgroundColor: '#dcfce7',
    borderWidth: 1,
    borderColor: '#86efac',
  },
  pausedBadge: {
    backgroundColor: '#f1f5f9',
    borderWidth: 1,
    borderColor: '#cbd5e1',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '700',
  },
  runningText: {
    color: '#15803d',
  },
  pausedText: {
    color: '#64748b',
  },
});