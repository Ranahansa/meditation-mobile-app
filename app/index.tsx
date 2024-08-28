
import React, { useState } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import beachImage from '@/assets/meditation-images/beach.webp';
import CustomButton from '@/components/CustomButton';
import SplashScreen from '@/components/SplashScreen';


function App() {
    const [isSplashVisible, setSplashVisible] = useState(true);

    const handleSplashFinish = () => {
        setSplashVisible(false);
    };

    return (
        <View className="flex-1 ">
            {isSplashVisible ? (
                <SplashScreen onFinish={handleSplashFinish} />
            ) : (
                <>
                    <ImageBackground source={beachImage} resizeMode="cover" className="flex-1">
                        <LinearGradient className="flex-1" colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}>
                            <SafeAreaView className="items-center justify-between flex-1 mx-5 my-5">
                                <View className="items-center">
                                    <Text className="mb-2 text-4xl font-bold text-center text-white">Meditation App</Text>
                                    <Text className="text-lg text-center text-white">Find your peace and calmness</Text>
                                </View>
                                <View>
                                    <CustomButton title="Get Start" onPress={() => alert('Get Start')} containerStyles={'bg-white'} />
                                </View>
                                <StatusBar style='light' />
                            </SafeAreaView>
                        </LinearGradient>
                    </ImageBackground>
                </>
            )}
        </View>
    );
}

export default App;