import React, {useState} from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput } from 'react-native';
import GradientBanner from '../components/Header';
import Footer from '../components/Footer';
import backgroundImage from '../images/whitebg.jpg';
import { PROJECT_NAME } from '../app/Config';
import GradientButton from '../components/GradientButton';

const ContactUsScreen = () => {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    console.log('Button is Clicked');
  }
  return (
    <>
      <View style={styles.backgroundGradientBanner}>
        <GradientBanner text={PROJECT_NAME} />
      </View>
      <ImageBackground source={backgroundImage} style={styles.background}>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.pageContent}>
              <Text style={styles.title}>Contact Us</Text>
            </View>
            <View style={styles.section}>           
              <Text style={styles.sectionHeading}>Contact Information:</Text>
              <Text> Mobile : <Text style={{ color: 'blue' }}>9347160365.</Text></Text>
              <Text> Email : <Text style={{ color: 'blue' }}>raja.pinja@gmail.com <Text style={{ color: 'black' }}>|</Text> raja_pinja@yahoo.com   </Text></Text>
            </View> 
            {/*  <TextInput
              placeholder="Username"
              placeholderTextColor="black"
              value={username}
              onChangeText={setUsername}
              style={styles.input} // Set the text color to black
            /> 
            
            <View style={styles.buttonRow}>
              <GradientButton
                onPress={handleLogin}
                title={'LOGIN'}
                colors={['#0000FF', '#50C878']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                buttonStyle={styles.buttonLogin}
              />
            </View>                 */}
          </View>
         
        </ScrollView>    
        <Footer /> 
      </ImageBackground>     
    </>
  );
};

const styles = StyleSheet.create({
  backgroundGradientBanner: {
    backgroundColor: '#FFFFFF', // Half white color
  },
  background: {
    flex: 1,
    resizeMode: 'cover', // Scale the image to cover the entire screen
    justifyContent: 'center', // Center vertically
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    marginBottom: 10,
    textShadowColor: "blue",
    fontWeight: 'bold',
    color: "blue",
    marginTop: 20
  },
  pageContent: {
    flex: 1, // Ensure content fills the remaining space
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  section: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionHeading: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    width: 280,
    padding: 10,
    borderWidth: 1, // Apply border
    borderColor: 'black', // Border color
    borderRadius: 5, // Border radius
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 16,
    height: 54,
    marginTop: 10,
    color:'black'
  }, 
  buttonRow: {
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
    margin: 5,
    marginTop: 10,
  },
  buttonLogin: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 13,
    width: 240,
    marginBottom: 6,
    backgroundColor: '#227fe3',
    marginTop: 8
  }
});

export default ContactUsScreen;
