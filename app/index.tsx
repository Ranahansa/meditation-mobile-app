import { View, Text, ImageBackground, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import beachImage from '@/assets/meditation-images/beach.webp';

function App() {
    return (
        <View className='flex-1'>
            <ImageBackground source={beachImage} resizeMode='cover' className='flex-1'>
                <LinearGradient className='flex-1' colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}>
                    <SafeAreaView className='items-center justify-center flex-1'>
                        <Text className='text-4xl font-bold text-center text-white'>Meditation App</Text>
                        <Text className='m-3 text-6xl font-bold text-center text-white'>💆‍♂️</Text>
                        <Text className='text-white'>Find Your peace and calmness</Text>
                    </SafeAreaView>
                </LinearGradient>
            </ImageBackground>
        </View>
    );
}

export default App