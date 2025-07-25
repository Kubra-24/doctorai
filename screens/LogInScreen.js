import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const googleIcon = require('../assets/google.png');
const icloudIcon = require('../assets/icloud.webp');

const PasswordInput = ({ placeholder, value, onChangeText }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.inputBox}>
      <Ionicons name="lock-closed-outline" size={24} color="#fff" style={styles.inputIcon} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#6e6d6dff"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!showPassword}
        autoCapitalize="none"
        style={[styles.input, { paddingLeft: 0 }]}
      />
      <TouchableOpacity
        onPress={() => setShowPassword(!showPassword)}
        style={styles.eyeIconWrapper}
      >
        <Ionicons name={showPassword ? "eye" : "eye-off"} size={24} color="#555" />
      </TouchableOpacity>
    </View>
  );
};

export default function LogInScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Welcome')}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={18} color="#4b4b4bff" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.innerContainer}>
        <View style={styles.contentWrapper}>
          <View style={styles.form}>
            <Text style={styles.title}>Log In Your Account</Text>

            <View style={styles.inputBox}>
              <Ionicons name="mail-outline" size={24} color="#fff" style={styles.inputIcon} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#6e6d6dff"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                style={[styles.input, { paddingLeft: 0 }]}
              />
            </View>

            <PasswordInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
              <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>

           <TouchableOpacity
  style={styles.logInButton}
  onPress={() => {
    if (email === 'kubraaergiin@gmail.com' && password === '123') {
      navigation.navigate('Chat');
    } else {
      alert( "Email or password is incorrect. Please try again.");
    }
  }}
>
  <Text style={styles.logInButtonText}>Log In</Text>
</TouchableOpacity>


            <View style={styles.bottomSection}>
              <View style={styles.accountPromptContainer}>
                <Text style={styles.accountPromptText}>Create New Account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                  <Text style={styles.signUpLink}> Sign Up</Text>
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
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  innerContainer: {
    flexGrow: 1,
    padding: 20,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  form: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    marginTop: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    marginBottom: 20,
    position: 'relative',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#fff',
    paddingVertical: 8,
  },
  eyeIconWrapper: {
    position: 'absolute',
    right: 16,
    top: '55%',
  },
  forgotPasswordText: {
    color: '#fff',
    textAlign: 'right',
    marginRight: 10,
    marginTop: -5,
    fontSize: 12,
  },
  logInButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    paddingVertical: 14,
    marginTop: 10,

    
  },
  logInButtonText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 16,
  },
  bottomSection: {
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  accountPromptContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 17,
  },
  accountPromptText: {
    color: '#aaa',
    fontSize: 14,
  },
  signUpLink: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  horizontalLine: {
    width: '95%',
    height: 1,
    backgroundColor: '#444',
    marginVertical: 25,
  },
  continueText: {
    color: '#aaa',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 14,
    marginBottom: 10,
    textAlign: 'center',
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
});
