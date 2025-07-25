import React from 'react';
import {
  View, Text, TouchableOpacity, ScrollView,
  StyleSheet, SafeAreaView, Image
} from 'react-native';

const googleIcon = require('../assets/google.png');
const icloudIcon = require('../assets/icloud.webp');

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <View style={styles.form}>
          <Text style={styles.title}>Welcome to Doctor AI</Text>

          <TouchableOpacity
            style={styles.mainButton}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text style={styles.mainButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.mainButton, styles.secondaryButton]}
            onPress={() => navigation.navigate('LogIn')}
          >
            <Text style={[styles.mainButtonText, styles.secondaryButtonText]}>
              Log In
            </Text>
          </TouchableOpacity>
        </View>

        
       
        <View style={styles.lowerSection}>
         
<Text style={styles.continueText}>Continue With Accounts</Text>
          
          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={() => console.log('iCloud clicked')}>
              <Image source={icloudIcon} style={styles.iconImage} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Google clicked')}>
              <Image source={googleIcon} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  innerContainer: { flexGrow: 1, padding: 20, justifyContent: 'center' },
  form: { width: '100%', maxWidth: 480, alignSelf: 'center' },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 30,
    textAlign: 'center',
    color: '#ffffff',
  },
  mainButton: {
    backgroundColor: '#1a1a1a',
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 20,
  },
  mainButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: '#25272bff',
  },
  secondaryButtonText: {
    color: 'white',
  },
  lowerSection: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    marginTop: 20,
  },
  
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  iconButton: {
    backgroundColor: '#fff',
    borderRadius: 40,
    padding: 8,
    marginHorizontal: 8,
  },
  iconImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  continueText: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 10,
    textAlign: 'center',
  },
 
 
  
});
