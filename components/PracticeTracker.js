import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

/**
 * Requirement 1: Functional component that receives `solved`, `onSolve`,
 * and `onReset` as props.
 */
export default function PracticeTracker({ solved, onSolve, onReset }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Practice Problem Tracker</Text>
      
      <Text style={styles.countText}>Solved: {solved}</Text>

      {/* Requirement 6: Conditional rendering for "Great job!" once solved >= 5 */}
      {solved >= 5 && (
        <View style={styles.banner}>
          <Text style={styles.bannerText}>🎉 Great job!</Text>
        </View>
      )}

      <View style={styles.buttonRow}>
        {/* Requirement 7: Passed as function reference, NOT called directly */}
        <TouchableOpacity style={styles.solveButton} onPress={onSolve}>
          <Text style={styles.buttonText}>Solve +1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={onReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
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
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 12,
  },
  countText: {
    fontSize: 28,
    fontWeight: '800',
    color: '#2563eb',
    textAlign: 'center',
    marginVertical: 10,
  },
  banner: {
    backgroundColor: '#dcfce7',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#86efac',
  },
  bannerText: {
    color: '#166534',
    fontSize: 16,
    fontWeight: '700',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    gap: 12,
  },
  solveButton: {
    flex: 1,
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButton: {
    flex: 1,
    backgroundColor: '#64748b',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 15,
    fontWeight: '700',
  },
});