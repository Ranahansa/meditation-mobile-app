import { View, Text, ImageBackground, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import MEDITATION_IMAGES from '@/constants/meditation-images'
import AppGradient from '@/components/AppGradient'
import AntDesign from '@expo/vector-icons/AntDesign';
import { router, useLocalSearchParams } from 'expo-router'
import CustomButton from '@/components/CustomButton';

const Meditate = () => {
    
    const {id} = useLocalSearchParams()
    const [secondsRemaining, setSecondsRemaining] = useState(10)

    useEffect(() => {
        let timerId: NodeJS.Timeout;
        
        if(secondsRemaining ===0){
            return
        }
        timerId = setTimeout(() => {
            setSecondsRemaining(secondsRemaining - 1)
        }, 1000)
        return () => {
            clearTimeout(timerId);
        }
    }, [])
    
    return (
        <View className='flex-1'>
            <ImageBackground source={MEDITATION_IMAGES[Number(id) - 1]} 
            resizeMode='cover' 
            className='flex-1'>
                <AppGradient colors={["transparent", 'rgba(0, 0, 0, 0.8)']}>
                    <Pressable
                        onPress={() => router.back()}
                        className="absolute z-10 top-16 left-6"
                    >
                        <AntDesign name="leftcircleo" size={50} color="white"/>
                    </Pressable>
                    <View className='justify-center flex-1'>
                        <View className='items-center justify-center mx-auto rounded-full bg-neutral-200 w-44 h-44'>
                            <Text className='text-3xl font-bold text-center text-white'>
                                00:{secondsRemaining}
                            </Text>
                        </View>
                    </View>
                    <View className='mb-5'>
                        <CustomButton title="Start Meditation" onPress={() => {}} containerStyles={'bg-white'} />
                    </View>
                </AppGradient>
            </ImageBackground>
        </View>
    )
}

export default Meditate