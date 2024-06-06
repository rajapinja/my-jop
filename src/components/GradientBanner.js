import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GradientBanner = ({ text }) => {
  return (
    <LinearGradient    
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBackground}
    ><Text >{text}</Text>  
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  gradientBackground: {
    padding: 0,
    borderRadius: 10,
    marginVertical: 10,
    alignItems:'center', 
    width:'100%'
  },
  banner: {
    fontSize:22,
    marginTop: 5,   
    textShadowColor:"blue",
    fontWeight: 'bold', 
    //color: '#32383D'    
    //color: '#0eac77',
    color: 'green'
  },
});

export default GradientBanner;
