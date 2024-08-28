
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ onFinish }: any) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      onFinish();
    }, 4000); 

    return () => clearTimeout(timeout); 
  }, []);

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Image source={require('../assets/simpleMeditationLogo.png')} style={{ width: 400, height: 400 }} />
        <Text className='text-2xl font-bold' style={styles.loadingText}>Welcome...</Text>
      </View>
    );
  }

  return null; 
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', 
  },
  loadingText: {
    fontSize: 20,
    color: '#000',
  },
});

export default SplashScreen;