import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// A simple, focused "Who are you?" screen. Navigates to the existing
// app routes `Login` (customer) and `AdminLogin` (admin).
export default function WhoAreYouScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who Are You?</Text>

      <TouchableOpacity
        style={styles.customerButton}
        activeOpacity={0.86}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.buttonText}>Customer Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.adminButton}
        activeOpacity={0.86}
        onPress={() => navigation.navigate('AdminLogin')}
      >
        <Text style={styles.buttonText}>Admin Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 36,
    color: '#0F172A',
  },

  customerButton: {
    width: '92%',
    backgroundColor: '#F1F3F6',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#D9DEE5',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  adminButton: {
    width: '92%',
    backgroundColor: '#F1F3F6',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D9DEE5',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  buttonText: {
    color: '#0F172A',
    fontSize: 16,
    fontWeight: '700',
  },
});

