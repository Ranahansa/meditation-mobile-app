import { View, Text, FlatList, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'
import { StatusBar } from 'expo-status-bar'
import { MEDITATION_DATA } from '../../constants/MeditationData';
import MEDITATION_IMAGES from '../../constants/meditation-images';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';

const NatureMeditate = () => {
    return (
        <View className='flex-1'>
            <AppGradient colors={['#161b2e','#0a4d4a', '#766e67']}>
                <View className='mb-6'>
                    <Text className='mb-3 text-3xl font-bold text-left text-gray-200'>
                        Welcome To Peace
                    </Text>
                    <Text className='text-xl font-medium text-indigo-100'>
                        Nature sounds for meditation, relaxation, and sleep.
                    </Text>
                </View>
                <View>
                    <FlatList data={MEDITATION_DATA} 
                    keyExtractor={(item) => item.id.toString()}
                    showsVerticalScrollIndicator={false} 
                    renderItem={({item}) => (
                        <Pressable
                            onPress={() => router.push(`/meditate/${item.id}`)}
                            className='h-48 my-3 overflow-hidden rounded-xl'
                        >
                            <ImageBackground
                                source={MEDITATION_IMAGES[item.id - 1]}
                                resizeMode='cover'
                                className='items-center justify-center flex-1 rounded-lg'
                            >
                                <LinearGradient 
                                colors={["transparent","rgba(0,0,0,0.8)" ]}
                                className='justify-center flex-1 w-full'
                                >
                                    <Text className='text-4xl font-bold text-center text-gray-100'>
                                    {item.title}
                                </Text>
                                </LinearGradient>
                            </ImageBackground>
                        </Pressable>
                    )} 
                    />
                </View>
            </AppGradient>
            <StatusBar style='light'/>
        </View>
    )
}

export default NatureMeditate