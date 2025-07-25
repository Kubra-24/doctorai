import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, Modal, ScrollView,
  StyleSheet, SafeAreaView, Image, TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const googleIcon = require('../assets/google.png');
const icloudIcon = require('../assets/icloud.webp');

const PasswordInput = ({ placeholder, value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputBox}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor= '#ffffff'
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        style={[styles.input, styles.inputWithPaddingRight]}
      />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={styles.eyeIconWrapper}
        accessible={true}
        accessibilityLabel={showPassword ? "Hide password" : "Show password"}
      >
        <Ionicons
          name={showPassword ? "eye" : "eye-off"}
          size={24}
          color="#555"
        />
      </TouchableOpacity>
    </View>
  );
};

export default function SignUpScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreementChecked, setIsAgreementChecked] = useState(false);

  const isFormValid =
    fullName.trim() !== '' &&
    email.trim() !== '' &&
    password.trim() !== '' &&
    isAgreementChecked;

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={18} color="#4b4b4bff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.innerContainer}>
        <View style={styles.form}>
          <Text style={[styles.title, { color: '#FFFFFF' }]}>Create Your Account</Text>

          <View style={styles.inputBox}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor= '#ffffff'
              value={fullName}
              onChangeText={setFullName}
              style={styles.input}
              autoCapitalize="words"
            />
          </View>

          <View style={styles.inputBox}>
            <TextInput
              placeholder="Email"
              placeholderTextColor= '#ffffff'
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.input}
            />
          </View>

          <PasswordInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={[styles.signUpButton, !isFormValid && styles.signUpButtonDisabled]}
            disabled={!isFormValid}
            onPress={() => alert('Registration successful!')}
          >
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <View style={styles.alreadyAccountContainer}>
            <Text style={styles.alreadyAccountText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
              <Text style={styles.logInText}>Log In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.horizontalLine} />

          <Text style={styles.continueText}>Continue With Accounts</Text>

          <View style={styles.socialButtonsContainer}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={icloudIcon} style={styles.iconImage} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={googleIcon} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.flexOne} />

        <View style={styles.lowerSection}>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setIsAgreementChecked(prev => !prev)}
              style={[styles.checkbox, isAgreementChecked && styles.checkboxChecked]}
            >
              {isAgreementChecked && <Ionicons name="checkmark" size={14} color="#fff" />}
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Text style={styles.linkText}>User Agreement</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <SafeAreaView style={styles.modalContainer}>
          <Text style={styles.modalTitle}>User Agreement</Text>
          <ScrollView style={styles.modalScroll}>
            <Text style={styles.modalText}>
             User Agreement Content
            </Text>
          </ScrollView>

          <View style={styles.modalButtons}>
            <TouchableOpacity
              style={[styles.modalButton, styles.closeButton]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalButtonText}>Close</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.modalButton, styles.agreeButton]}
              onPress={() => {
                setIsAgreementChecked(true);
                setModalVisible(false);
              }}
            >
              <Text style={styles.modalButtonText}>Agree</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000000' },
  innerContainer: { flexGrow: 1, padding: 20},
  form: { width: '100%', maxWidth: 480, alignSelf: 'center', marginTop: 80},
  title: { fontSize: 24, fontWeight: '700', marginBottom: 25, textAlign: 'center' },

  inputBox: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingLeft: 0,
    paddingVertical: 0,
  },
  eyeIconWrapper: {
    position: 'absolute',
    right: 16,
    top: '70%',
   
  },

  signUpButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 10,
  },
  signUpButtonDisabled: {
    backgroundColor: '#25272bff'
  },
  signUpButtonText: {
    color: '#ffffff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },

  lowerSection: {
    alignItems: 'center',
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop:5,
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
  linkText: {
    color: '#1A78E5',
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
    fontWeight: '600',
  },
  alreadyAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
    alignItems: 'center',
  },
  alreadyAccountText: {
    color: '#404040ff',
    marginRight: 5,
  },
  logInText: {
    color: '#ffffff',
    fontWeight: '600',
  },
   continueText: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: '600',
    marginTop:3,
    marginBottom: 10,
    textAlign: 'center',
  },
  flexOne: {
    flex: 1,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 8,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1.5,
    borderColor: '#1A78E5',
    borderRadius: 4,
    marginRight: 8,
    marginTop: 21,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  checkboxChecked: {
    backgroundColor: '#1A78E5',
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalScroll: {
    flex: 1,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#ffffff',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 24,
    marginHorizontal: 8,
  },
  closeButton: {
    backgroundColor: '#B0BEC5',
  },
  agreeButton: {
    backgroundColor: '#1A78E5',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },

  backButton: {
    backgroundColor: '#1a1a1a',
    padding: 8,
    borderRadius: 8,
    position: 'absolute',
    top: 28,
    left: 5,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  horizontalLine: {
    width: '95%',
    height: 1,
    backgroundColor: '#444',
    marginVertical: 25,
    alignSelf: 'center',
  },
});
